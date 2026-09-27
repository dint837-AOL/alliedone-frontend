'use client';

import React, { useState, useEffect } from 'react';
import { X, Search, Upload, Image as ImageIcon, Trash2, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { triggerToast, triggerDialog } from '../app/admin/components/CustomDialog';

interface MediaFile {
  id: string;
  filename: string;
  url: string;
  altText: string;
  sizeBytes: number;
  mimeType: string;
}

interface MediaPickerProps {
  onSelect: (url: string, altText: string) => void;
  onClose: () => void;
  apiBase: string;
  token: string;
}

export default function MediaPicker({ onSelect, onClose, apiBase, token }: MediaPickerProps) {
  const [images, setImages] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [uploading, setUploading] = useState(false);
  const [selectedImg, setSelectedImg] = useState<MediaFile | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${apiBase}/api/admin/images`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setImages(data.images || []);
      }
    } catch (e) {
      console.error('Failed to load images', e);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const fd = new FormData();
      fd.append('image', file);

      const res = await fetch(`${apiBase}/api/admin/upload`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: fd
      });
      if (res.ok) {
        await fetchImages();
      } else {
        triggerToast('Upload failed', 'error');
      }
    } catch (err) {
      triggerToast('Upload error', 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleSelect = () => {
    if (selectedImg) {
      onSelect(selectedImg.url, selectedImg.altText || '');
    }
  };

  const handleDelete = () => {
    if (!selectedImg) return;
    triggerDialog({
      type: 'confirm',
      title: 'Delete Image',
      message: 'Are you sure you want to delete this image?',
      onConfirm: async () => {
        try {
          const res = await fetch(`${apiBase}/api/admin/images/${selectedImg.filename}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (res.ok) {
            triggerToast('Image deleted successfully', 'success');
            setSelectedImg(null);
            fetchImages();
          } else {
            triggerToast('Failed to delete image', 'error');
          }
        } catch {
          triggerToast('Error deleting image', 'error');
        }
      }
    });
  };

  const filtered = images.filter(img => img.filename.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg)', width: '100%', maxWidth: '900px', height: '80vh',
        borderRadius: '12px', display: 'flex', flexDirection: 'column',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '1.2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><ImageIcon size={20} /> Media Library</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-sec)' }}><X size={20} /></button>
        </div>

        {/* Toolbar */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'flex', gap: '16px', background: 'var(--surface)' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: 12, top: 10, color: 'var(--muted)' }} />
            <input 
              type="text" 
              placeholder="Search images..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '8px 12px 8px 36px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }}
            />
          </div>
          <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary)', color: 'var(--bg)', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>
            {uploading ? <div className="spinner" style={{width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite'}} /> : <Upload size={16} />}
            {uploading ? 'Uploading...' : 'Upload Image'}
            <input type="file" accept="image/*" onChange={handleUpload} style={{ display: 'none' }} disabled={uploading} />
          </label>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          
          {/* Grid */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>Loading...</div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>No images found.</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
                {filtered.map(img => (
                  <div 
                    key={img.filename} 
                    onClick={() => setSelectedImg(img)}
                    style={{ 
                      border: selectedImg?.filename === img.filename ? '2px solid var(--accent)' : '1px solid var(--border)',
                      borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', background: 'var(--surface)',
                      position: 'relative'
                    }}
                  >
                    <div style={{ width: '100%', aspectRatio: '1', position: 'relative', background: 'var(--primary-dim)' }}>
                      <Image src={img.url} alt={img.altText || img.filename} fill style={{ objectFit: 'contain' }} unoptimized />
                    </div>
                    <div style={{ padding: '8px', fontSize: '0.75rem', color: 'var(--text-sec)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {img.filename}
                    </div>
                    {selectedImg?.filename === img.filename && (
                      <div style={{ position: 'absolute', top: 8, right: 8, background: 'var(--accent)', color: '#fff', borderRadius: '50%', padding: '2px' }}>
                        <CheckCircle2 size={16} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details Sidebar */}
          {selectedImg && (
            <div style={{ width: '300px', borderLeft: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '1rem' }}>Attachment Details</h3>
                <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', background: 'var(--bg)', borderRadius: '6px', overflow: 'hidden', marginBottom: '16px' }}>
                  <Image src={selectedImg.url} alt="Preview" fill style={{ objectFit: 'contain' }} unoptimized />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '8px', wordBreak: 'break-all' }}><strong>File:</strong> {selectedImg.filename}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}><strong>Size:</strong> {(selectedImg.sizeBytes ? (selectedImg.sizeBytes / 1024).toFixed(1) + ' KB' : 'Unknown')}</div>
              </div>
              <div style={{ padding: '20px', flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px' }}>Alt Text <span style={{color: 'red'}}>*</span></label>
                <input 
                  type="text" 
                  value={selectedImg.altText || ''}
                  onChange={e => setSelectedImg({...selectedImg, altText: e.target.value})}
                  placeholder="Describe the image (Required)" 
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }}
                />
                <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '4px' }}>Required for SEO and accessibility.</p>
              </div>
              <div style={{ padding: '20px', borderTop: '1px solid var(--border)', display: 'flex', gap: '10px' }}>
                <button 
                  onClick={handleDelete}
                  style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  title="Delete Image"
                >
                  <Trash2 size={20} />
                </button>
                <button 
                  onClick={handleSelect}
                  disabled={!selectedImg.altText || selectedImg.altText.trim() === ''}
                  style={{ flex: 1, background: (!selectedImg.altText || selectedImg.altText.trim() === '') ? 'var(--muted)' : 'var(--accent)', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 600, cursor: (!selectedImg.altText || selectedImg.altText.trim() === '') ? 'not-allowed' : 'pointer' }}
                >
                  Select Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `@keyframes spin { 100% { transform: rotate(360deg); } }`}} />
    </div>
  );
}
