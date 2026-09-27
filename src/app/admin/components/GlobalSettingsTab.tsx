'use client';
import { useState, useEffect } from 'react';
import MediaPicker from '@/components/MediaPicker';
import { Save, Plus, Trash2, GripVertical, Link } from 'lucide-react';
import { triggerToast } from './CustomDialog';

export default function GlobalSettingsTab({ apiBase, token }: { apiBase: string, token: string }) {
  const [settings, setSettings] = useState<any>({ nav: [], footer: { copyright: '', links: [] }, site: {} });
  const [showMedia, setShowMedia] = useState<'logo' | 'favicon' | null>(null);

  useEffect(() => { fetchSettings(); }, []);

  const fetchSettings = async () => {
    const keys = ['nav', 'footer', 'siteSettings'];
    const res = await Promise.all(keys.map(k => fetch(`${apiBase}/api/admin/content/${k}`).then(r => r.json())));
    setSettings({
      nav: Array.isArray(res[0].value) ? res[0].value : [],
      footer: res[1].value || { copyright: '', links: [] },
      site: res[2].value || {}
    });
  };

  const saveSettings = async (key: string, value: any) => {
    try {
      const res = await fetch(`${apiBase}/api/admin/content/${key}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ value })
      });
      if (res.ok) triggerToast('Settings saved successfully', 'success');
      else triggerToast('Failed to save settings', 'error');
    } catch {
      triggerToast('Error saving settings', 'error');
    }
  };

  // Nav Helpers
  const addNavItem = () => setSettings({...settings, nav: [...settings.nav, { label: '', url: '' }]});
  const updateNavItem = (idx: number, key: string, val: string) => {
    const newNav = [...settings.nav];
    newNav[idx][key] = val;
    setSettings({...settings, nav: newNav});
  };
  const removeNavItem = (idx: number) => setSettings({...settings, nav: settings.nav.filter((_: any, i: number) => i !== idx)});
  const moveNavItem = (idx: number, dir: 'up'|'down') => {
    if (dir === 'up' && idx === 0) return;
    if (dir === 'down' && idx === settings.nav.length - 1) return;
    const newNav = [...settings.nav];
    const swap = dir === 'up' ? idx - 1 : idx + 1;
    [newNav[idx], newNav[swap]] = [newNav[swap], newNav[idx]];
    setSettings({...settings, nav: newNav});
  };
  const addSubNavItem = (parentIdx: number) => {
    const newNav = [...settings.nav];
    if (!newNav[parentIdx].children) newNav[parentIdx].children = [];
    newNav[parentIdx].children.push({ label: '', url: '' });
    setSettings({...settings, nav: newNav});
  };
  const updateSubNavItem = (parentIdx: number, childIdx: number, key: string, val: string) => {
    const newNav = [...settings.nav];
    newNav[parentIdx].children[childIdx][key] = val;
    setSettings({...settings, nav: newNav});
  };
  const removeSubNavItem = (parentIdx: number, childIdx: number) => {
    const newNav = [...settings.nav];
    newNav[parentIdx].children = newNav[parentIdx].children.filter((_: any, i: number) => i !== childIdx);
    setSettings({...settings, nav: newNav});
  };

  // Footer Helpers
  const addFooterLink = () => setSettings({...settings, footer: {...settings.footer, links: [...(settings.footer.links || []), { label: '', url: '' }]}});
  const updateFooterLink = (idx: number, key: string, val: string) => {
    const newLinks = [...(settings.footer.links || [])];
    newLinks[idx][key] = val;
    setSettings({...settings, footer: {...settings.footer, links: newLinks}});
  };
  const removeFooterLink = (idx: number) => setSettings({...settings, footer: {...settings.footer, links: (settings.footer.links || []).filter((_: any, i: number) => i !== idx)}});

  return (
    <div className="space-y-8 pb-20">
      {/* Site Identity */}
      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h3 className="text-lg font-bold">Site Identity & Brand</h3>
          <button onClick={() => saveSettings('siteSettings', settings.site)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">
            <Save size={16}/> Save Identity
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Company Name</label>
            <input className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" value={settings.site.companyName || ''} onChange={e => setSettings({...settings, site: {...settings.site, companyName: e.target.value}})} placeholder="e.g. Acme Corp" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Primary Brand Color</label>
            <div className="flex gap-3 items-center">
              <input type="color" className="w-12 h-10 border p-1 rounded cursor-pointer" value={settings.site.primaryColor || '#0095DA'} onChange={e => setSettings({...settings, site: {...settings.site, primaryColor: e.target.value}})} />
              <input type="text" className="flex-1 border p-2 rounded text-sm uppercase font-mono" value={settings.site.primaryColor || '#0095DA'} onChange={e => setSettings({...settings, site: {...settings.site, primaryColor: e.target.value}})} />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">Logo URL</label>
            <div className="flex gap-2">
              <input className="w-full border p-2 rounded text-sm text-slate-500" value={settings.site.logo || ''} readOnly placeholder="Select an image..." />
              <button onClick={() => setShowMedia('logo')} className="px-4 bg-slate-100 hover:bg-slate-200 border rounded font-semibold text-sm transition-colors">Browse</button>
            </div>
            {settings.site.logo && <div className="mt-3 p-4 bg-slate-50 rounded border flex items-center justify-center"><img src={settings.site.logo} alt="Logo" className="max-h-16 object-contain" /></div>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Favicon URL</label>
            <div className="flex gap-2">
              <input className="w-full border p-2 rounded text-sm text-slate-500" value={settings.site.favicon || ''} readOnly placeholder="Select an image..." />
              <button onClick={() => setShowMedia('favicon')} className="px-4 bg-slate-100 hover:bg-slate-200 border rounded font-semibold text-sm transition-colors">Browse</button>
            </div>
            {settings.site.favicon && <div className="mt-3 p-4 bg-slate-50 rounded border flex items-center justify-center"><img src={settings.site.favicon} alt="Favicon" className="max-h-8 object-contain" /></div>}
          </div>
        </div>

        <h4 className="font-bold text-sm border-b pt-4 pb-2 mt-4 text-slate-700">Global Contact Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">Contact Email</label>
            <input className="w-full border p-2 rounded text-sm" value={settings.site.contactEmail || ''} onChange={e => setSettings({...settings, site: {...settings.site, contactEmail: e.target.value}})} placeholder="hello@company.com" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">Contact Phone</label>
            <input className="w-full border p-2 rounded text-sm" value={settings.site.contactPhone || ''} onChange={e => setSettings({...settings, site: {...settings.site, contactPhone: e.target.value}})} placeholder="+1 234 567 890" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">Physical Address</label>
            <input className="w-full border p-2 rounded text-sm" value={settings.site.contactAddress || ''} onChange={e => setSettings({...settings, site: {...settings.site, contactAddress: e.target.value}})} placeholder="123 Main St, City" />
          </div>
        </div>

        <h4 className="font-bold text-sm border-b pt-4 pb-2 mt-4 text-slate-700">Social Media Links</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">LinkedIn URL</label>
            <input className="w-full border p-2 rounded text-sm" value={settings.site.socialLinkedIn || ''} onChange={e => setSettings({...settings, site: {...settings.site, socialLinkedIn: e.target.value}})} placeholder="https://linkedin.com/..." />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">Twitter (X) URL</label>
            <input className="w-full border p-2 rounded text-sm" value={settings.site.socialTwitter || ''} onChange={e => setSettings({...settings, site: {...settings.site, socialTwitter: e.target.value}})} placeholder="https://twitter.com/..." />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">Facebook URL</label>
            <input className="w-full border p-2 rounded text-sm" value={settings.site.socialFacebook || ''} onChange={e => setSettings({...settings, site: {...settings.site, socialFacebook: e.target.value}})} placeholder="https://facebook.com/..." />
          </div>
        </div>

        <h4 className="font-bold text-sm border-b pt-4 pb-2 mt-4 text-slate-700">Form Settings</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">Form Submission Recipient Email</label>
            <input className="w-full border p-2 rounded text-sm" value={settings.site.formRecipientEmail || ''} onChange={e => setSettings({...settings, site: {...settings.site, formRecipientEmail: e.target.value}})} placeholder="admin@company.com" />
            <p className="text-xs text-slate-400 mt-1">Email address that will receive form submissions.</p>
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">Homepage Contact Form</label>
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="suppressForm" className="w-4 h-4 cursor-pointer rounded" checked={settings.site.suppressHomepageForm || false} onChange={e => setSettings({...settings, site: {...settings.site, suppressHomepageForm: e.target.checked}})} />
              <label htmlFor="suppressForm" className="text-sm cursor-pointer text-slate-600">Suppress (Hide) form on the homepage</label>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Editor */}
      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="text-lg font-bold">Main Navigation</h3>
            <p className="text-xs text-slate-500">Manage the top header menu links.</p>
          </div>
          <button onClick={() => saveSettings('nav', settings.nav)} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">
            <Save size={16}/> Save Nav
          </button>
        </div>
        
        <div className="space-y-3">
          {settings.nav.map((item: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-2 p-4 border rounded-xl bg-slate-50">
              <div className="flex gap-4 items-center">
                <div className="flex flex-col gap-1 text-slate-300">
                  <button onClick={() => moveNavItem(idx, 'up')} disabled={idx === 0} className="hover:text-slate-600 disabled:opacity-30">▲</button>
                  <button onClick={() => moveNavItem(idx, 'down')} disabled={idx === settings.nav.length - 1} className="hover:text-slate-600 disabled:opacity-30">▼</button>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Menu Label</label>
                    <input className="w-full border p-2 rounded text-sm" value={item.label} onChange={e => updateNavItem(idx, 'label', e.target.value)} placeholder="e.g. About Us" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">URL / Link (Optional for Dropdowns)</label>
                    <div className="relative">
                      <Link className="absolute left-2 top-2.5 text-slate-400 w-4 h-4" />
                      <input className="w-full border p-2 pl-8 rounded text-sm" value={item.url} onChange={e => updateNavItem(idx, 'url', e.target.value)} placeholder="e.g. /about" />
                    </div>
                  </div>
                </div>
                <button onClick={() => removeNavItem(idx)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Remove Link">
                  <Trash2 size={18}/>
                </button>
              </div>
              
              {/* Sub-menu items */}
              <div className="pl-12 pr-4 space-y-2 mt-2">
                {(item.children || []).map((child: any, cIdx: number) => (
                  <div key={cIdx} className="flex gap-3 items-center bg-white p-2 border rounded-lg shadow-sm">
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <input className="w-full border p-1.5 rounded text-xs" value={child.label} onChange={e => updateSubNavItem(idx, cIdx, 'label', e.target.value)} placeholder="Sub-menu Label" />
                      <input className="w-full border p-1.5 rounded text-xs" value={child.url} onChange={e => updateSubNavItem(idx, cIdx, 'url', e.target.value)} placeholder="Sub-menu URL" />
                    </div>
                    <button onClick={() => removeSubNavItem(idx, cIdx)} className="p-1 text-slate-400 hover:text-red-600 transition-colors" title="Remove Sub-item"><Trash2 size={14}/></button>
                  </div>
                ))}
                <button onClick={() => addSubNavItem(idx)} className="text-xs text-blue-600 font-semibold flex items-center gap-1 hover:underline mt-1">
                  <Plus size={12}/> Add Sub-menu Item
                </button>
              </div>
            </div>
          ))}
          {settings.nav.length === 0 && <div className="text-center p-6 text-slate-500 text-sm">No navigation items added yet.</div>}
          
          <button onClick={addNavItem} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 hover:text-[#0095DA] transition-colors">
            <Plus size={18}/> Add Menu Item
          </button>
        </div>
      </div>

      {/* Footer Editor */}
      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="text-lg font-bold">Footer Content</h3>
            <p className="text-xs text-slate-500">Manage footer links and copyright text.</p>
          </div>
          <button onClick={() => saveSettings('footer', settings.footer)} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">
            <Save size={16}/> Save Footer
          </button>
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Copyright Text</label>
          <input className="w-full border p-2 rounded text-sm" value={settings.footer.copyright || ''} onChange={e => setSettings({...settings, footer: {...settings.footer, copyright: e.target.value}})} placeholder="© 2026 Acme Corp. All rights reserved." />
        </div>

        <h4 className="font-bold text-sm border-b pt-4 pb-2 mt-4 text-slate-700">Footer Links</h4>
        <div className="space-y-3">
          {(settings.footer.links || []).map((item: any, idx: number) => (
            <div key={idx} className="flex gap-4 p-3 border rounded-lg bg-slate-50 items-center">
              <div className="flex-1 grid grid-cols-2 gap-4">
                <input className="w-full border p-2 rounded text-sm" value={item.label} onChange={e => updateFooterLink(idx, 'label', e.target.value)} placeholder="Link Label (e.g. Privacy Policy)" />
                <input className="w-full border p-2 rounded text-sm" value={item.url} onChange={e => updateFooterLink(idx, 'url', e.target.value)} placeholder="URL (e.g. /privacy)" />
              </div>
              <button onClick={() => removeFooterLink(idx)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 size={16}/>
              </button>
            </div>
          ))}
          <button onClick={addFooterLink} className="w-full py-2 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 hover:text-[#0095DA] transition-colors">
            <Plus size={16}/> Add Footer Link
          </button>
        </div>
      </div>

      {showMedia && (
        <MediaPicker 
          apiBase={apiBase} 
          token={token} 
          onClose={() => setShowMedia(null)} 
          onSelect={(url) => { 
            setSettings({...settings, site: {...settings.site, [showMedia]: url}}); 
            setShowMedia(null); 
          }} 
        />
      )}
    </div>
  );
}
