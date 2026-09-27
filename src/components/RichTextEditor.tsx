'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Link as LinkIcon, Heading2, Heading3, X } from 'lucide-react';
import { triggerDialog } from '../app/admin/components/CustomDialog';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  multiline?: boolean;
  headings?: boolean;
}

export default function RichTextEditor({ value, onChange, multiline = true, headings = false }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [linkDialog, setLinkDialog] = useState<{ isOpen: boolean, url: string, text: string, newTab: boolean, selection: Range | null }>({
    isOpen: false, url: '', text: '', newTab: true, selection: null
  });

  // Initialize content once
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command: string, arg?: string) => {
    document.execCommand(command, false, arg);
    editorRef.current?.focus();
    handleInput();
  };

  const insertLink = () => {
    const selection = window.getSelection();
    let text = '';
    let range = null;
    if (selection && selection.rangeCount > 0) {
      range = selection.getRangeAt(0);
      text = selection.toString();
    }
    setLinkDialog({ isOpen: true, url: '', text, newTab: true, selection: range });
  };

  const confirmLink = () => {
    if (linkDialog.selection) {
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(linkDialog.selection);
    }
    
    if (linkDialog.url) {
      const a = document.createElement('a');
      a.href = linkDialog.url;
      a.innerText = linkDialog.text || linkDialog.url;
      if (linkDialog.newTab) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      
      if (linkDialog.selection) {
        linkDialog.selection.deleteContents();
        linkDialog.selection.insertNode(a);
      } else {
        editorRef.current?.appendChild(a);
      }
      handleInput();
    }
    setLinkDialog({ isOpen: false, url: '', text: '', newTab: true, selection: null });
  };

  const insertHeading = (level: string) => {
    execCommand('formatBlock', level);
  };

  if (!multiline) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-input"
        style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: '6px', background: 'var(--surface)', color: 'var(--text)' }}
      />
    );
  }

  return (
    <div className="rich-text-editor" style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', background: 'var(--surface)' }}>
      {/* Toolbar */}
      <div style={{ display: 'flex', gap: '4px', padding: '6px', background: 'var(--primary-dim)', borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
        <button type="button" onClick={() => execCommand('bold')} className="rt-btn" title="Bold"><Bold size={16} /></button>
        <button type="button" onClick={() => execCommand('italic')} className="rt-btn" title="Italic"><Italic size={16} /></button>
        <button type="button" onClick={() => execCommand('underline')} className="rt-btn" title="Underline"><Underline size={16} /></button>
        <div style={{ width: 1, background: 'var(--border)', margin: '0 4px' }} />
        <button type="button" onClick={() => execCommand('justifyLeft')} className="rt-btn" title="Align Left"><AlignLeft size={16} /></button>
        <button type="button" onClick={() => execCommand('justifyCenter')} className="rt-btn" title="Align Center"><AlignCenter size={16} /></button>
        <button type="button" onClick={() => execCommand('justifyRight')} className="rt-btn" title="Align Right"><AlignRight size={16} /></button>
        <button type="button" onClick={() => execCommand('justifyFull')} className="rt-btn" title="Justify"><AlignJustify size={16} /></button>
        <div style={{ width: 1, background: 'var(--border)', margin: '0 4px' }} />
        <button type="button" onClick={() => execCommand('insertUnorderedList')} className="rt-btn" title="Bullet List"><List size={16} /></button>
        <button type="button" onClick={() => execCommand('insertOrderedList')} className="rt-btn" title="Numbered List"><ListOrdered size={16} /></button>
        <div style={{ width: 1, background: 'var(--border)', margin: '0 4px' }} />
        <button type="button" onClick={insertLink} className="rt-btn" title="Insert Link"><LinkIcon size={16} /></button>
        {headings && (
          <>
            <div style={{ width: 1, background: 'var(--border)', margin: '0 4px' }} />
            <button type="button" onClick={() => insertHeading('H2')} className="rt-btn" title="Heading 2"><Heading2 size={16} /></button>
            <button type="button" onClick={() => insertHeading('H3')} className="rt-btn" title="Heading 3"><Heading3 size={16} /></button>
          </>
        )}
      </div>
      
      {/* Editor Area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onBlur={handleInput}
        style={{
          minHeight: '120px',
          padding: '12px',
          outline: 'none',
          color: 'var(--text)',
          fontSize: '0.9rem',
          lineHeight: '1.6'
        }}
      />

      {linkDialog.isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200 text-slate-800">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold">Insert Link</h3>
              <button onClick={() => setLinkDialog({ ...linkDialog, isOpen: false })} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
            </div>
            <div className="p-4 space-y-4 text-sm">
              <div>
                <label className="block font-semibold mb-1">URL</label>
                <input autoFocus className="w-full border border-slate-300 p-2 rounded focus:ring-2 outline-none" placeholder="https://" value={linkDialog.url} onChange={e => setLinkDialog({...linkDialog, url: e.target.value})} />
              </div>
              <div>
                <label className="block font-semibold mb-1">Display Text</label>
                <input className="w-full border border-slate-300 p-2 rounded focus:ring-2 outline-none" placeholder="Text to display" value={linkDialog.text} onChange={e => setLinkDialog({...linkDialog, text: e.target.value})} />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="rt-newtab" checked={linkDialog.newTab} onChange={e => setLinkDialog({...linkDialog, newTab: e.target.checked})} className="rounded cursor-pointer" />
                <label htmlFor="rt-newtab" className="cursor-pointer">Open in new tab</label>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t flex justify-end gap-2">
              <button onClick={() => setLinkDialog({ ...linkDialog, isOpen: false })} className="px-4 py-2 text-slate-600 font-semibold rounded hover:bg-slate-200">Cancel</button>
              <button onClick={confirmLink} className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">Insert</button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .rt-btn {
          background: transparent;
          border: none;
          color: var(--text-sec);
          padding: 6px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rt-btn:hover {
          background: var(--border);
          color: var(--text);
        }
        .rich-text-editor a {
          color: var(--accent);
          text-decoration: underline;
        }
        .rich-text-editor ul {
          padding-left: 20px;
          margin-bottom: 10px;
        }
        .rich-text-editor ol {
          padding-left: 20px;
          margin-bottom: 10px;
        }
        .rich-text-editor h2, .rich-text-editor h3 {
          margin-top: 10px;
          margin-bottom: 8px;
        }
      `}} />
    </div>
  );
}
