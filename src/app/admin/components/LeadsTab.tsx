'use client';
import { useState, useEffect } from 'react';
import { Download, Loader2 } from 'lucide-react';

export default function LeadsTab({ apiBase, token }: { apiBase: string, token: string }) {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    const res = await fetch(`${apiBase}/api/leads`, { headers: { Authorization: `Bearer ${token}` }});
    if (res.ok) setLeads(await res.json());
    setLoading(false);
  };
  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    const res = await fetch(`${apiBase}/api/leads/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      fetchLeads();
    } else {
      const err = await res.json().catch(() => ({}));
      alert('Failed to delete lead: ' + (err.error || 'Unknown error'));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">CRM Leads</h2>
      </div>

      {loading ? (
        <div className="flex justify-center p-8"><Loader2 className="w-8 h-8 animate-spin text-[#0095DA]" /></div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="p-4 font-semibold text-slate-500 w-48">Date</th>
                <th className="p-4 font-semibold text-slate-500">Name / Company</th>
                <th className="p-4 font-semibold text-slate-500">Contact</th>
                <th className="p-4 font-semibold text-slate-500">Interest</th>
                <th className="p-4 font-semibold text-slate-500">Notes</th>
                <th className="p-4 font-semibold text-slate-500 w-24">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id} className="border-b hover:bg-slate-50">
                  <td className="p-4 text-slate-600 align-top">
                    {new Date(lead.createdAt).toLocaleString()}
                  </td>
                  <td className="p-4 align-top">
                    <div className="font-bold">{lead.name}</div>
                    {lead.company && <div className="text-xs text-slate-500">{lead.company}</div>}
                  </td>
                  <td className="p-4 align-top">
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-mono break-all">{lead.contactInfo}</span>
                  </td>
                  <td className="p-4 align-top">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">{lead.serviceInterest}</span>
                  </td>
                  <td className="p-4 text-slate-600 align-top whitespace-pre-wrap">
                    {lead.notes || '-'}
                  </td>
                  <td className="p-4 align-top">
                    <button 
                      onClick={() => deleteLead(lead.id)}
                      className="text-red-500 hover:bg-red-50 px-2 py-1 rounded transition-colors text-sm font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">No leads found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
