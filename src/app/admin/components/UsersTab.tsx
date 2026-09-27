'use client';
import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Shield, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';
import { triggerToast, triggerDialog } from './CustomDialog';

export default function UsersTab({ apiBase, token }: { apiBase: string, token: string }) {
  const [users, setUsers] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'CONTENT_EDITOR', isActive: true });

  useEffect(() => { 
    fetchUsers(); 
    fetchLogs();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${apiBase}/api/admin/users`, { headers: { Authorization: `Bearer ${token}` }});
    if (res.ok) setUsers(await res.json());
  };

  const fetchLogs = async () => {
    const res = await fetch(`${apiBase}/api/admin/activity-log`, { headers: { Authorization: `Bearer ${token}` }});
    if (res.ok) setLogs(await res.json());
  };

  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingId ? `${apiBase}/api/admin/users/${editingId}` : `${apiBase}/api/admin/users`;
    const method = editingId ? 'PUT' : 'POST';
    
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      triggerToast(`User ${editingId ? 'updated' : 'created'} successfully`, 'success');
      setShowModal(false);
      fetchUsers();
    } else {
      const err = await res.json();
      triggerToast(err.error || 'Failed to save user', 'error');
    }
  };

  const deleteUser = async (id: string) => {
    triggerDialog({
      type: 'confirm',
      title: 'Delete User',
      message: 'Are you sure you want to delete this user? This cannot be undone.',
      onConfirm: async () => {
        const res = await fetch(`${apiBase}/api/admin/users/${id}`, {
          method: 'DELETE', headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          triggerToast('User deleted', 'success');
          fetchUsers();
        } else {
          triggerToast('Failed to delete user', 'error');
        }
      }
    });
  };

  const toggleStatus = async (user: any) => {
    const res = await fetch(`${apiBase}/api/admin/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ isActive: !user.isActive })
    });
    if (res.ok) {
      fetchUsers();
      triggerToast(`User ${user.isActive ? 'disabled' : 'enabled'}`, 'success');
    }
  };

  const openNewUser = () => {
    setEditingId(null);
    setFormData({ username: '', email: '', password: '', role: 'CONTENT_EDITOR', isActive: true });
    setShowModal(true);
  };

  const openEditUser = (user: any) => {
    setEditingId(user.id);
    setFormData({ username: user.username, email: user.email, password: '', role: user.role, isActive: user.isActive });
    setShowModal(true);
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Admin Users</h2>
          <button onClick={openNewUser} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 font-semibold text-sm">
            <Plus size={16}/> New User
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Login</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-b hover:bg-slate-50">
                  <td className="p-4 font-semibold">{u.username} <div className="text-xs text-slate-500 font-normal">{u.email}</div></td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-fit ${u.role === 'SUPER_ADMIN' ? 'bg-red-100 text-red-700' : 'bg-purple-100 text-purple-700'}`}>
                      {u.role === 'SUPER_ADMIN' ? <ShieldAlert size={12}/> : <Shield size={12}/>}
                      {u.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <button onClick={() => toggleStatus(u)} className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-bold ${u.isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                      {u.isActive ? <CheckCircle size={12}/> : <XCircle size={12}/>}
                      {u.isActive ? 'Active' : 'Disabled'}
                    </button>
                  </td>
                  <td className="p-4 text-slate-500">{u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString() : 'Never'}</td>
                  <td className="p-4 flex items-center gap-2">
                    <button onClick={() => openEditUser(u)} className="p-2 text-blue-600 hover:bg-blue-50 rounded" title="Edit User"><Edit2 size={16}/></button>
                    <button onClick={() => deleteUser(u.id)} className="p-2 text-red-600 hover:bg-red-50 rounded" title="Delete User"><Trash2 size={16}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Activity Log</h2>
        <div className="bg-white rounded-xl shadow overflow-hidden max-h-[400px] overflow-y-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b sticky top-0">
              <tr><th className="p-4">Time</th><th className="p-4">User</th><th className="p-4">Action</th><th className="p-4">Detail</th></tr>
            </thead>
            <tbody>
              {logs.map(l => (
                <tr key={l.id} className="border-b hover:bg-slate-50">
                  <td className="p-4 text-xs whitespace-nowrap text-slate-500">{new Date(l.createdAt).toLocaleString()}</td>
                  <td className="p-4 font-semibold">{l.adminUser}</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">{l.action}</span></td>
                  <td className="p-4 text-slate-600">{l.detail}</td>
                </tr>
              ))}
              {logs.length === 0 && <tr><td colSpan={4} className="p-8 text-center text-slate-500">No activity logs found.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-2xl">
            <h3 className="text-xl font-bold mb-4">{editingId ? 'Edit User' : 'New User'}</h3>
            <form onSubmit={handleSaveUser} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Username</label>
                <input required className="w-full border p-2 rounded" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input required type="email" className="w-full border p-2 rounded" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Password {editingId && <span className="text-slate-400 font-normal text-xs">(leave blank to keep current)</span>}</label>
                <input type="password" required={!editingId} className="w-full border p-2 rounded" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Role</label>
                <select className="w-full border p-2 rounded" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
                  <option value="CONTENT_EDITOR">CONTENT_EDITOR</option>
                  <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t mt-6">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded">Save User</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
