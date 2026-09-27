'use client';
import { useState, useEffect } from 'react';
import { Download, Trash2, MailOpen, Mail, Plus, Save, GripVertical } from 'lucide-react';
import { triggerDialog, triggerToast } from './CustomDialog';

export default function FormsTab({ apiBase, token }: { apiBase: string, token: string }) {
  const [activeTab, setActiveTab] = useState<'submissions' | 'schema'>('submissions');
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [schemaFields, setSchemaFields] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const formKey = 'contact';

  useEffect(() => { 
    if (activeTab === 'submissions') fetchSubmissions(); 
    if (activeTab === 'schema') fetchSchema();
  }, [activeTab]);

  // --- SUBMISSIONS ---
  const fetchSubmissions = async () => {
    setLoading(true);
    const res = await fetch(`${apiBase}/api/admin/forms/${formKey}/submissions`, { headers: { Authorization: `Bearer ${token}` }});
    if (res.ok) setSubmissions(await res.json());
    setLoading(false);
  };

  const markRead = async (id: string) => {
    await fetch(`${apiBase}/api/admin/forms/${formKey}/submissions/${id}/read`, {
      method: 'PATCH', headers: { Authorization: `Bearer ${token}` }
    });
    fetchSubmissions();
  };

  const deleteSub = async (id: string) => {
    triggerDialog({
      type: 'confirm',
      title: 'Delete Submission',
      message: 'Are you sure you want to delete this submission?',
      onConfirm: async () => {
        try {
          await fetch(`${apiBase}/api/admin/forms/${formKey}/submissions/${id}`, {
            method: 'DELETE', headers: { Authorization: `Bearer ${token}` }
          });
          fetchSubmissions();
          triggerToast('Submission deleted', 'success');
        } catch {
          triggerToast('Failed to delete submission', 'error');
        }
      }
    });
  };

  // --- SCHEMA EDITOR ---
  const fetchSchema = async () => {
    setLoading(true);
    const res = await fetch(`${apiBase}/api/admin/forms/${formKey}/schema`, { headers: { Authorization: `Bearer ${token}` }});
    if (res.ok) {
      const data = await res.json();
      setSchemaFields(data.fields || []);
    } else {
      setSchemaFields([]);
    }
    setLoading(false);
  };

  const saveSchema = async () => {
    try {
      const res = await fetch(`${apiBase}/api/admin/forms/${formKey}/schema`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ fields: schemaFields })
      });
      if (res.ok) {
        triggerToast('Form schema saved successfully', 'success');
      } else {
        triggerToast('Failed to save schema', 'error');
      }
    } catch {
      triggerToast('Error saving schema', 'error');
    }
  };

  const addField = () => {
    setSchemaFields([...schemaFields, { name: '', label: '', type: 'text', required: false }]);
  };

  const updateField = (index: number, key: string, value: any) => {
    const updated = [...schemaFields];
    updated[index] = { ...updated[index], [key]: value };
    setSchemaFields(updated);
  };

  const removeField = (index: number) => {
    setSchemaFields(schemaFields.filter((_, i) => i !== index));
  };

  const moveField = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === schemaFields.length - 1) return;
    
    const updated = [...schemaFields];
    const swap = direction === 'up' ? index - 1 : index + 1;
    [updated[index], updated[swap]] = [updated[swap], updated[index]];
    setSchemaFields(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Forms: {formKey}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('submissions')}
            className={`px-4 py-2 text-sm font-semibold rounded ${activeTab === 'submissions' ? 'bg-[#0095DA] text-white' : 'bg-slate-200 text-slate-700'}`}
          >
            Submissions
          </button>
          <button 
            onClick={() => setActiveTab('schema')}
            className={`px-4 py-2 text-sm font-semibold rounded ${activeTab === 'schema' ? 'bg-[#0095DA] text-white' : 'bg-slate-200 text-slate-700'}`}
          >
            Schema Editor
          </button>
        </div>
      </div>

      {activeTab === 'submissions' && (
        <div>
          <div className="flex justify-end mb-4">
            <a href={`${apiBase}/api/admin/forms/${formKey}/submissions/export.csv`} className="bg-emerald-600 text-white px-4 py-2 rounded flex items-center gap-2 font-semibold text-sm hover:bg-emerald-700 transition-colors">
              <Download size={16}/> Export CSV
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b">
                  <th className="p-4 font-semibold text-slate-500 w-48">Date</th>
                  <th className="p-4 font-semibold text-slate-500">Data</th>
                  <th className="p-4 font-semibold text-slate-500 w-32">IP</th>
                  <th className="p-4 font-semibold text-slate-500 w-24">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading && <tr><td colSpan={4} className="p-8 text-center text-slate-500">Loading...</td></tr>}
                {!loading && submissions.map(s => (
                  <tr key={s.id} className={`border-b hover:bg-slate-50 transition-colors ${s.readAt ? 'bg-white opacity-80' : 'bg-blue-50 font-medium'}`}>
                    <td className="p-4 text-xs whitespace-nowrap text-slate-500">{new Date(s.createdAt).toLocaleString()}</td>
                    <td className="p-4 text-slate-700">
                      <div className="grid gap-1">
                        {Object.entries(s.data).map(([k,v]) => (
                          <div key={k}><span className="font-semibold text-slate-900">{k}:</span> {String(v)}</div>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-[10px] text-slate-400">{s.ipAddress || '-'}</td>
                    <td className="p-4 flex gap-2">
                      {!s.readAt && <button onClick={() => markRead(s.id)} className="p-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors" title="Mark Read"><MailOpen size={16}/></button>}
                      <button onClick={() => deleteSub(s.id)} className="p-1.5 bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors" title="Delete"><Trash2 size={16}/></button>
                    </td>
                  </tr>
                ))}
                {!loading && submissions.length === 0 && <tr><td colSpan={4} className="p-8 text-center text-slate-500">No submissions yet.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'schema' && (
        <div className="bg-white rounded-xl shadow p-6 space-y-6">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="font-bold text-lg text-slate-800">Form Fields Configuration</h3>
              <p className="text-sm text-slate-500">Add, reorder, or edit fields dynamically without changing code.</p>
            </div>
            <button onClick={saveSchema} className="bg-emerald-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 font-bold text-sm hover:bg-emerald-700 transition-colors shadow-sm">
              <Save size={16}/> Save Schema
            </button>
          </div>

          {loading ? (
            <div className="py-8 text-center text-slate-500">Loading schema...</div>
          ) : (
            <div className="space-y-3">
              {schemaFields.map((field, idx) => (
                <div key={idx} className="flex gap-4 p-4 border rounded-xl bg-slate-50 group items-start">
                  <div className="flex flex-col gap-1 text-slate-300 mt-2">
                    <button onClick={() => moveField(idx, 'up')} disabled={idx === 0} className="hover:text-slate-600 disabled:opacity-30">▲</button>
                    <button onClick={() => moveField(idx, 'down')} disabled={idx === schemaFields.length - 1} className="hover:text-slate-600 disabled:opacity-30">▼</button>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Field Name (ID)</label>
                      <input 
                        type="text" 
                        placeholder="e.g. firstName"
                        value={field.name} 
                        onChange={e => updateField(idx, 'name', e.target.value)} 
                        className="w-full border p-2 rounded text-sm focus:ring-2 focus:ring-[#0095DA] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Display Label</label>
                      <input 
                        type="text" 
                        placeholder="e.g. First Name"
                        value={field.label} 
                        onChange={e => updateField(idx, 'label', e.target.value)} 
                        className="w-full border p-2 rounded text-sm focus:ring-2 focus:ring-[#0095DA] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Field Type</label>
                      <select 
                        value={field.type} 
                        onChange={e => updateField(idx, 'type', e.target.value)} 
                        className="w-full border p-2 rounded text-sm focus:ring-2 focus:ring-[#0095DA] outline-none bg-white"
                      >
                        <option value="text">Text (Short)</option>
                        <option value="email">Email</option>
                        <option value="tel">Phone</option>
                        <option value="textarea">Textarea (Long)</option>
                        <option value="select">Select Dropdown</option>
                        <option value="checkbox">Checkbox</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2 pt-6">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={field.required} 
                          onChange={e => updateField(idx, 'required', e.target.checked)} 
                          className="w-4 h-4 text-[#0095DA] rounded focus:ring-[#0095DA]"
                        />
                        Required
                      </label>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeField(idx)} 
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-4" 
                    title="Remove Field"
                  >
                    <Trash2 size={18}/>
                  </button>
                </div>
              ))}
              
              <button 
                onClick={addField} 
                className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 hover:text-[#0095DA] hover:border-[#0095DA] transition-colors"
              >
                <Plus size={18}/> Add New Field
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
