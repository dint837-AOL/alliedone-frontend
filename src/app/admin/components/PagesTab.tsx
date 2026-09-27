'use client';
import { useState, useEffect } from 'react';
import { Plus, Edit2, Copy, Trash2, Globe, FileText, GripVertical, Image as ImageIcon, Layout, AlignLeft, MessageSquare, List, Link, Eye, EyeOff, Lock, Unlock } from 'lucide-react';
import RichTextEditor from '@/components/RichTextEditor';
import MediaPicker from '@/components/MediaPicker';
import { triggerToast, triggerDialog } from './CustomDialog';

export default function PagesTab({ apiBase, token }: { apiBase: string, token: string }) {
  const [pages, setPages] = useState<any[]>([]);
  const [editingPage, setEditingPage] = useState<any>(null);
  const [showMediaFor, setShowMediaFor] = useState<{ type: 'seo' | 'block' | 'authorImage', id?: string } | null>(null);

  let userRole = null;
  try {
    if (token) userRole = JSON.parse(atob(token.split('.')[1]))?.role;
  } catch {}

  useEffect(() => { fetchPages(); }, []);

  const fetchPages = async () => {
    const res = await fetch(`${apiBase}/api/admin/pages`, { headers: { Authorization: `Bearer ${token}` }});
    if (res.ok) {
      const data = await res.json();
      setPages(data.sort((a: any, b: any) => a.order - b.order));
    }
  };

  const createPage = async () => {
    triggerDialog({
      type: 'prompt',
      title: 'New Page',
      message: 'Enter the new page title:',
      onConfirm: async (title) => {
        if (!title) return;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const res = await fetch(`${apiBase}/api/admin/pages`, {
          method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ title, slug })
        });
        if (res.ok) {
          fetchPages();
          triggerToast('Page created', 'success');
        } else {
          triggerToast('Failed to create page', 'error');
        }
      }
    });
  };

  const toggleStatus = async (id: string, current: string) => {
    const status = current === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
    const res = await fetch(`${apiBase}/api/admin/pages/${id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status })
    });
    if (res.ok) fetchPages();
  };

  const deletePage = async (id: string) => {
    triggerDialog({
      type: 'confirm',
      title: 'Delete Page',
      message: 'Are you sure you want to delete this page?',
      onConfirm: async () => {
        const res = await fetch(`${apiBase}/api/admin/pages/${id}`, {
          method: 'DELETE', headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          fetchPages();
          triggerToast('Page deleted', 'success');
        } else {
          triggerToast('Failed to delete', 'error');
        }
      }
    });
  };

  const clonePage = async (id: string) => {
    const res = await fetch(`${apiBase}/api/admin/pages/${id}/clone`, {
      method: 'POST', headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) fetchPages();
  };

  const reorderPages = async (id: string, dir: 'up' | 'down') => {
    const idx = pages.findIndex(p => p.id === id);
    if (dir === 'up' && idx === 0) return;
    if (dir === 'down' && idx === pages.length - 1) return;
    
    const newPages = [...pages];
    const swap = dir === 'up' ? idx - 1 : idx + 1;
    [newPages[idx], newPages[swap]] = [newPages[swap], newPages[idx]];
    
    setPages(newPages);
    const updates = newPages.map((p, i) => ({ id: p.id, order: i }));
    
    await fetch(`${apiBase}/api/admin/pages/reorder`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ updates })
    });
  };

  const editPage = async (id: string) => {
    const res = await fetch(`${apiBase}/api/admin/pages/${id}`, { headers: { Authorization: `Bearer ${token}` }});
    if (res.ok) {
      const data = await res.json();
      data.blocks = data.blocks || [];
      setEditingPage(data);
    }
  };

  const savePageMeta = async () => {
    if (!editingPage) return;
    const res = await fetch(`${apiBase}/api/admin/pages/${editingPage.id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        title: editingPage.title,
        slug: editingPage.slug,
        seoTitle: editingPage.seoTitle,
        seoDesc: editingPage.seoDesc,
        seoImage: editingPage.seoImage,
        canonicalUrl: editingPage.canonicalUrl,
        status: editingPage.status
      })
    });
    if (res.ok) {
      triggerToast('Page settings saved', 'success');
      fetchPages();
    } else {
      triggerToast('Failed to save', 'error');
    }
  };

  // --- Block Management ---
  const addBlock = async (type: string) => {
    if (!editingPage) return;
    const res = await fetch(`${apiBase}/api/admin/pages/${editingPage.id}/blocks`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ type, content: { text: '', heading: '', image: '', link: '' } })
    });
    if (res.ok) editPage(editingPage.id);
  };

  const updateBlock = async (blockId: string, content: any) => {
    const updatedBlocks = editingPage.blocks.map((b: any) => b.id === blockId ? { ...b, content } : b);
    setEditingPage({ ...editingPage, blocks: updatedBlocks });

    await fetch(`${apiBase}/api/admin/pages/blocks/${blockId}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ content })
    });
  };

  const deleteBlock = async (blockId: string) => {
    triggerDialog({
      type: 'confirm',
      title: 'Delete Block',
      message: 'Are you sure you want to remove this block?',
      onConfirm: async () => {
        const res = await fetch(`${apiBase}/api/admin/pages/blocks/${blockId}`, {
          method: 'DELETE', headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) editPage(editingPage.id);
      }
    });
  };

  const duplicateBlock = async (blockId: string) => {
    const res = await fetch(`${apiBase}/api/admin/pages/blocks/${blockId}/duplicate`, {
      method: 'POST', headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) editPage(editingPage.id);
  };

  const reorderBlocks = async (blockId: string, dir: 'up' | 'down') => {
    const idx = editingPage.blocks.findIndex((b: any) => b.id === blockId);
    if (dir === 'up' && idx === 0) return;
    if (dir === 'down' && idx === editingPage.blocks.length - 1) return;
    
    const newBlocks = [...editingPage.blocks];
    const swap = dir === 'up' ? idx - 1 : idx + 1;
    [newBlocks[idx], newBlocks[swap]] = [newBlocks[swap], newBlocks[idx]];
    
    setEditingPage({ ...editingPage, blocks: newBlocks });
    
    const updates = newBlocks.map((b, i) => ({ id: b.id, order: i }));
    await fetch(`${apiBase}/api/admin/pages/${editingPage.id}/blocks/reorder`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ updates })
    });
  };

  const toggleBlockVisibility = (block: any) => {
    updateBlock(block.id, { ...block.content, isHidden: !block.content?.isHidden });
  };

  const toggleBlockLock = (block: any) => {
    updateBlock(block.id, { ...block.content, isLocked: !block.content?.isLocked });
  };

  const fonts = ['Inter', 'Manrope', 'Plus Jakarta Sans', 'DM Sans', 'Montserrat', 'Archivo', 'Barlow', 'Barlow Semi Condensed', 'IBM Plex Sans', 'Space Grotesk', 'Public Sans', 'Source Sans Pro', 'Tahoma', 'Times New Roman', 'Siyam Rupali', 'Arial', 'Verdana', 'Comic Sans', 'Calibri', 'Trebuchet MS', 'Bookman Old Style', 'Book Antiqua'];

  const renderBlockEditor = (block: any) => {
    const content = block.content || {};
    const setContent = (newContent: any) => updateBlock(block.id, { ...content, ...newContent });
    const setStyle = (key: string, value: any) => updateBlock(block.id, { ...content, style: { ...(content.style || {}), [key]: value } });

    let Editor = <div className="text-sm text-slate-500">No editor available for {block.type}</div>;
    switch (block.type) {
      case 'HERO':
        Editor = (
          <div className="space-y-4">
            <div className="border rounded-md overflow-hidden"><RichTextEditor value={content.heading || ''} onChange={html => setContent({ heading: html })} multiline={false} /></div>
            <div className="border rounded-md overflow-hidden"><RichTextEditor value={content.text || ''} onChange={html => setContent({ text: html })} multiline={true} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-2">
                <input className="w-full border p-2 rounded text-sm text-slate-500" value={content.image || ''} readOnly placeholder="Background Image" />
                <button onClick={() => setShowMediaFor({ type: 'block', id: block.id })} className="px-4 bg-slate-100 hover:bg-slate-200 border rounded text-sm font-semibold">Select</button>
              </div>
              <div className="flex gap-2">
                <input className="w-full border p-2 rounded" placeholder="CTA Label" value={content.ctaLabel || ''} onChange={e => setContent({ ctaLabel: e.target.value })} />
                <input className="w-full border p-2 rounded" placeholder="CTA Link" value={content.link || ''} onChange={e => setContent({ link: e.target.value })} />
              </div>
            </div>
            {content.image && <img src={content.image} alt="Hero" className="mt-2 h-32 object-cover rounded w-full" />}
          </div>
        );
        break;
      case 'TEXT':
        Editor = <RichTextEditor value={content.text || ''} onChange={(html) => setContent({ text: html })} multiline={true} />;
        break;
      case 'IMAGE':
        Editor = (
          <div className="space-y-4">
            <div className="flex gap-2">
              <input className="w-full border p-2 rounded text-sm text-slate-500" value={content.image || ''} readOnly placeholder="Select Image" />
              <button onClick={() => setShowMediaFor({ type: 'block', id: block.id })} className="px-4 bg-slate-100 hover:bg-slate-200 border rounded text-sm font-semibold">Select</button>
            </div>
            {content.image && <img src={content.image} alt="Preview" className="max-h-64 object-contain rounded" />}
          </div>
        );
        break;
      case 'CTA':
        Editor = (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 border rounded-md overflow-hidden"><RichTextEditor value={content.heading || ''} onChange={html => setContent({ heading: html })} multiline={false} /></div>
            <input className="col-span-1 border p-2 rounded" placeholder="Button Label" value={content.ctaLabel || ''} onChange={e => setContent({ ctaLabel: e.target.value })} />
            <input className="col-span-3 border p-2 rounded" placeholder="Destination URL" value={content.link || ''} onChange={e => setContent({ link: e.target.value })} />
          </div>
        );
        break;
      case 'QUOTE':
        Editor = (
          <div className="space-y-4">
            <div className="border rounded-md overflow-hidden"><RichTextEditor value={content.text || ''} onChange={html => setContent({ text: html })} multiline={true} /></div>
            <div className="grid grid-cols-2 gap-4">
              <input className="w-full border p-2 rounded" placeholder="Author Name" value={content.author || ''} onChange={e => setContent({ author: e.target.value })} />
              <input className="w-full border p-2 rounded" placeholder="Author Title (e.g. CEO, AlliedOne)" value={content.authorTitle || ''} onChange={e => setContent({ authorTitle: e.target.value })} />
            </div>
            <div className="flex gap-2">
              <input className="w-full border p-2 rounded text-sm text-slate-500" value={content.authorImage || ''} readOnly placeholder="Author Headshot" />
              <button onClick={() => setShowMediaFor({ type: 'authorImage', id: block.id })} className="px-4 bg-slate-100 hover:bg-slate-200 border rounded text-sm font-semibold">Select</button>
            </div>
          </div>
        );
        break;
    }
    
    return (
      <div className="space-y-6">
        {Editor}
        <div className="border-t pt-4 mt-4">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Style & Appearance</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-600">Font Family</label>
              <select className="w-full border p-1.5 rounded text-sm bg-white" value={content.style?.fontFamily || 'Inter'} onChange={e => setStyle('fontFamily', e.target.value)}>
                {fonts.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-600">Text Formatting</label>
              <div className="flex items-center gap-2">
                <button onClick={() => setStyle('isBold', !(content.style?.isBold))} className={`p-1.5 rounded border ${content.style?.isBold ? 'bg-slate-200 border-slate-400 font-bold' : 'bg-white hover:bg-slate-50'}`}>B</button>
                <button onClick={() => setStyle('isItalic', !(content.style?.isItalic))} className={`p-1.5 rounded border italic ${content.style?.isItalic ? 'bg-slate-200 border-slate-400' : 'bg-white hover:bg-slate-50'}`}>I</button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-600">Background Color</label>
              <div className="flex items-center gap-2">
                <input type="color" className="w-8 h-8 p-0 border-0 rounded cursor-pointer" value={content.style?.backgroundColor || '#ffffff'} onChange={e => setStyle('backgroundColor', e.target.value)} />
                <input type="text" className="flex-1 border p-1.5 rounded text-xs uppercase font-mono" value={content.style?.backgroundColor || '#ffffff'} onChange={e => setStyle('backgroundColor', e.target.value)} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-600">Text Color</label>
              <div className="flex items-center gap-2">
                <input type="color" className="w-8 h-8 p-0 border-0 rounded cursor-pointer" value={content.style?.textColor || '#000000'} onChange={e => setStyle('textColor', e.target.value)} />
                <input type="text" className="flex-1 border p-1.5 rounded text-xs uppercase font-mono" value={content.style?.textColor || '#000000'} onChange={e => setStyle('textColor', e.target.value)} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-600">Padding (Y)</label>
              <select className="w-full border p-1.5 rounded text-sm bg-white" value={content.style?.paddingY || 'py-12'} onChange={e => setStyle('paddingY', e.target.value)}>
                <option value="py-4">Small (py-4)</option>
                <option value="py-12">Medium (py-12)</option>
                <option value="py-24">Large (py-24)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getBlockIcon = (type: string) => {
    switch (type) {
      case 'HERO': return <Layout size={16} />;
      case 'TEXT': return <AlignLeft size={16} />;
      case 'IMAGE': return <ImageIcon size={16} />;
      case 'CTA': return <Link size={16} />;
      case 'QUOTE': return <MessageSquare size={16} />;
      default: return <List size={16} />;
    }
  };

  if (editingPage) {
    return (
      <div className="flex flex-col gap-6 h-full pb-20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Edit Page: {editingPage.title}</h2>
            <div className="text-sm text-slate-500 mt-1 flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-xs font-bold ${editingPage.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                {editingPage.status}
              </span>
              <a href={`/${editingPage.slug}${editingPage.status !== 'PUBLISHED' ? '?preview=true' : ''}`} target="_blank" className="hover:underline flex items-center gap-1"><Globe size={14}/> {editingPage.status === 'PUBLISHED' ? 'View Live' : 'Preview Draft'}</a>
            </div>
          </div>
          <button onClick={() => setEditingPage(null)} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 font-semibold rounded-lg transition-colors">Back to Pages</button>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow space-y-6">
          <div className="flex justify-between items-center border-b pb-4">
            <h3 className="text-lg font-bold text-slate-800">Page Properties & SEO</h3>
            <button onClick={savePageMeta} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-sm">Save Properties</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Page Title</label>
                <input className="w-full border p-2 rounded" value={editingPage.title} onChange={e => setEditingPage({...editingPage, title: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">URL Slug</label>
                <input className="w-full border p-2 rounded bg-slate-50" value={editingPage.slug} onChange={e => setEditingPage({...editingPage, slug: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-slate-600">SEO Meta Title</label>
                <input className="w-full border p-2 rounded" value={editingPage.seoTitle || ''} onChange={e => setEditingPage({...editingPage, seoTitle: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-slate-600">SEO Meta Description</label>
                <input className="w-full border p-2 rounded" value={editingPage.seoDesc || ''} onChange={e => setEditingPage({...editingPage, seoDesc: e.target.value})} />
                <div className={`text-xs mt-1 font-semibold ${(editingPage.seoDesc?.length || 0) > 160 ? 'text-red-500' : 'text-slate-500'}`}>
                  {editingPage.seoDesc?.length || 0}/160 characters
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-1 text-slate-600">Canonical URL</label>
                <input className="w-full border p-2 rounded bg-slate-50" placeholder="e.g. https://www.alliedoneltd.com/about" value={editingPage.canonicalUrl || ''} onChange={e => setEditingPage({...editingPage, canonicalUrl: e.target.value})} />
              </div>
            </div>
            <div className="lg:col-span-1 border-l pl-6">
              <label className="block text-sm font-semibold mb-1 text-slate-600">SEO Share Image</label>
              <div className="flex gap-2 mb-3">
                <input className="w-full border p-2 rounded text-xs text-slate-500" value={editingPage.seoImage || ''} readOnly placeholder="Select image..." />
                <button onClick={() => setShowMediaFor({ type: 'seo' })} className="px-3 bg-slate-100 hover:bg-slate-200 border rounded text-xs font-semibold">Browse</button>
              </div>
              {editingPage.seoImage && (
                <div className="relative w-full aspect-video bg-slate-100 rounded overflow-hidden border">
                  <img src={editingPage.seoImage} alt="SEO Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Content Builder</h3>
              <p className="text-sm text-slate-500">Drag or reorder blocks to build your page layout.</p>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors shadow-sm">
                <Plus size={16}/> Add Block
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                {['HERO', 'TEXT', 'IMAGE', 'CTA', 'QUOTE'].map(type => (
                  <button key={type} onClick={() => addBlock(type)} className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 border-b last:border-0 text-sm font-semibold text-slate-700">
                    <span className="text-[#0095DA]">{getBlockIcon(type)}</span> {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {editingPage.blocks?.map((block: any, idx: number) => (
              <div key={block.id} className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden shadow-sm group">
                <div className={`flex items-center justify-between px-4 py-2 border-b ${block.content?.isHidden ? 'bg-slate-200 opacity-70' : 'bg-slate-100'}`}>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col text-slate-300">
                      <button onClick={() => reorderBlocks(block.id, 'up')} disabled={idx === 0 || block.content?.isLocked} className="hover:text-slate-600 disabled:opacity-30 p-0.5 -mb-1">▲</button>
                      <button onClick={() => reorderBlocks(block.id, 'down')} disabled={idx === editingPage.blocks.length - 1 || block.content?.isLocked} className="hover:text-slate-600 disabled:opacity-30 p-0.5">▼</button>
                    </div>
                    <span className="flex items-center gap-2 font-bold text-sm text-slate-700 uppercase tracking-wider">
                      <span className="text-[#0095DA]">{getBlockIcon(block.type)}</span> {block.type}
                      {block.content?.isHidden && <span className="bg-slate-300 text-slate-700 px-2 py-0.5 rounded text-[10px] ml-2">HIDDEN</span>}
                      {block.content?.isLocked && <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] ml-2">LOCKED</span>}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => toggleBlockLock(block)} className="p-1.5 text-slate-500 hover:bg-white hover:text-red-600 rounded" title={block.content?.isLocked ? "Unlock Block" : "Lock Block"}>
                      {block.content?.isLocked ? <Lock size={16}/> : <Unlock size={16}/>}
                    </button>
                    <button onClick={() => toggleBlockVisibility(block)} className="p-1.5 text-slate-500 hover:bg-white hover:text-slate-800 rounded" title={block.content?.isHidden ? "Show Block" : "Hide Block"}>
                      {block.content?.isHidden ? <EyeOff size={16}/> : <Eye size={16}/>}
                    </button>
                    {!block.content?.isLocked && (
                      <>
                        <button onClick={() => duplicateBlock(block.id)} className="p-1.5 text-slate-500 hover:bg-white hover:text-blue-600 rounded" title="Duplicate"><Copy size={16}/></button>
                        <button onClick={() => deleteBlock(block.id)} className="p-1.5 text-slate-500 hover:bg-white hover:text-red-600 rounded" title="Remove"><Trash2 size={16}/></button>
                      </>
                    )}
                  </div>
                </div>
                <div className={`p-5 bg-white ${block.content?.isLocked ? 'opacity-50 pointer-events-none' : ''}`}>
                  {renderBlockEditor(block)}
                </div>
              </div>
            ))}
            {editingPage.blocks?.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl text-slate-400">
                <Layout size={48} className="mx-auto mb-4 opacity-50" />
                <p className="font-medium">No blocks added yet.</p>
                <p className="text-sm mt-1">Use the "Add Block" button to start building your page.</p>
              </div>
            )}
          </div>
        </div>

        {showMediaFor && (
          <MediaPicker 
            apiBase={apiBase} 
            token={token} 
            onClose={() => setShowMediaFor(null)} 
            onSelect={(url, altText) => { 
              if (showMediaFor.type === 'seo') {
                setEditingPage({ ...editingPage, seoImage: url });
              } else if (showMediaFor.type === 'block' && showMediaFor.id) {
                const block = editingPage.blocks.find((b: any) => b.id === showMediaFor.id);
                if (block) updateBlock(block.id, { ...block.content, image: url, imageAlt: altText });
              } else if (showMediaFor.type === 'authorImage' && showMediaFor.id) {
                const block = editingPage.blocks.find((b: any) => b.id === showMediaFor.id);
                if (block) updateBlock(block.id, { ...block.content, authorImage: url, authorImageAlt: altText });
              }
              setShowMediaFor(null); 
            }} 
          />
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Pages</h2>
        <button onClick={createPage} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 font-bold shadow-sm transition-colors"><Plus size={18}/> New Page</button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b">
              <th className="p-4 font-semibold text-sm w-16 text-center">Order</th>
              <th className="p-4 font-semibold text-sm">Title</th>
              <th className="p-4 font-semibold text-sm hidden md:table-cell">URL Slug</th>
              <th className="p-4 font-semibold text-sm w-32">Status</th>
              <th className="p-4 font-semibold text-sm w-48 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((p, idx) => (
              <tr key={p.id} className="border-b hover:bg-slate-50 transition-colors group">
                <td className="p-4 text-center">
                  <div className="flex flex-col items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => reorderPages(p.id, 'up')} disabled={idx === 0} className="hover:text-slate-600 disabled:opacity-30 p-0.5 -mb-1">▲</button>
                    <button onClick={() => reorderPages(p.id, 'down')} disabled={idx === pages.length - 1} className="hover:text-slate-600 disabled:opacity-30 p-0.5">▼</button>
                  </div>
                </td>
                <td className="p-4 font-medium">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-[#0095DA]"/> 
                    <span className="text-slate-800">{p.title}</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-slate-500 hidden md:table-cell font-mono text-xs">/{p.slug}</td>
                <td className="p-4">
                  <button 
                    onClick={() => {
                      if (userRole === 'CONTENT_EDITOR') triggerToast('Publishing requires Super Admin access', 'error');
                      else toggleStatus(p.id, p.status);
                    }} 
                    className={`px-2 py-1 text-xs rounded font-bold uppercase tracking-wider ${p.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}
                  >
                    {p.status}
                  </button>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-1">
                    <button onClick={() => editPage(p.id)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Edit Page"><Edit2 size={18}/></button>
                    <button onClick={() => clonePage(p.id)} className="p-2 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors" title="Duplicate Page"><Copy size={18}/></button>
                    <a href={`/${p.slug}${p.status !== 'PUBLISHED' ? '?preview=true' : ''}`} target="_blank" className="p-2 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors" title={p.status === 'PUBLISHED' ? 'View Live Page' : 'Preview Draft'}><Globe size={18}/></a>
                    {userRole !== 'CONTENT_EDITOR' && (
                      <button onClick={() => deletePage(p.id)} className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Delete Page"><Trash2 size={18}/></button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {pages.length === 0 && <tr><td colSpan={5} className="p-12 text-center text-slate-500">No pages found. Create your first page!</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
