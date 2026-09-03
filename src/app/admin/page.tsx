'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  LogOut, Save, Upload, Eye, EyeOff, Plus, Trash2,
  ChevronRight, LayoutDashboard, Image as ImageIcon, Type, Layers,
  CheckCircle, AlertCircle, Loader2, Lock, User, Shield,
  Monitor, Smartphone, Tablet, X, RotateCcw, ArrowRight, ExternalLink
} from 'lucide-react';
import { DEFAULT_HOMEPAGE_CONTENT, HomepageContent } from '@/lib/siteContent';

const rawBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const API_BASE = rawBase.replace(/\/api\/?$/, '').replace(/\/+$/, '');

// ─── Types ────────────────────────────────────────────────────────────────────

type Section = 'hero' | 'portfolio';
type DeviceView = 'desktop' | 'tablet' | 'mobile';

// ─── Preset Images ────────────────────────────────────────────────────────────

const PRESET_HERO_IMAGES = [
  { label: 'Global Trade (Default)', path: '/image copy.png' },
  { label: 'Technology Modern', path: '/hero-bg.png' },
  { label: 'Automation & AI', path: '/automation-hero.png' },
  { label: 'Global Operations 2', path: '/image copy 2.png' },
  { label: 'Global Operations 3', path: '/image copy 3.png' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('aol_admin_token');
}

function setToken(token: string) {
  localStorage.setItem('aol_admin_token', token);
}

function clearToken() {
  localStorage.removeItem('aol_admin_token');
}

async function apiFetch(path: string, options: RequestInit = {}) {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || 'API error');
  }
  return res.json();
}

function deepMerge(target: any, source: any): any {
  if (typeof source !== 'object' || source === null) return source ?? target;
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      source[key] !== null &&
      typeof target[key] === 'object' &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key] ?? target[key];
    }
  }
  return result;
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-white text-sm font-medium transition-all duration-300 ${type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`}>
      {type === 'success' ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
      {message}
    </div>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password: password.trim() }),
      });
      if (!data.ok) {
        const errData = await data.json().catch(() => null);
        setError(errData?.error || `Login failed (Status: ${data.status})`);
        return;
      }
      const { token } = await data.json();
      setToken(token);
      onLogin(token);
    } catch {
      setError('Could not connect to backend. Verify your backend server is active.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061D30] via-[#0D3A5C] to-[#1A5C8A] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Admin Panel</h1>
            <p className="text-white/60 text-sm mt-1">AlliedOne CMS — Restricted Access</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  id="admin-username"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                  placeholder="Enter username"
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#5BAEE8] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  id="admin-password"
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="Enter password"
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-12 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#5BAEE8] focus:border-transparent transition-all"
                />
                <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3 text-red-200 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <button
              id="admin-login-btn"
              type="submit"
              disabled={loading}
              className="w-full bg-[#2180C0] hover:bg-[#1A5C8A] text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ChevronRight className="w-5 h-5" />}
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
        <p className="text-center text-white/30 text-xs mt-6">AlliedOne Limited © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

// ─── Image Upload Button ───────────────────────────────────────────────────────

function ImageUploadButton({ onUpload, label = 'Upload From Computer' }: { onUpload: (url: string) => void; label?: string }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      const token = getToken();
      const res = await fetch(`${API_BASE}/api/admin/upload`, {
        method: 'POST',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Upload failed');
      }
      const { url } = await res.json();
      onUpload(url);
    } catch (err) {
      alert('Image upload failed: ' + (err as Error).message);
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  }

  return (
    <>
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        disabled={uploading}
        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#0D3A5C] border border-slate-300 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm disabled:opacity-60"
      >
        {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4 text-[#2180C0]" />}
        {uploading ? 'Uploading…' : label}
      </button>
    </>
  );
}

// ─── Field Wrappers ────────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">{children}</label>;
}

function TextInput({ value, onChange, placeholder, className = '' }: { value: string; onChange: (v: string) => void; placeholder?: string; className?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2180C0] bg-white transition-all text-sm ${className}`}
    />
  );
}

function TextArea({ value, onChange, placeholder, rows = 3 }: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2180C0] bg-white transition-all text-sm resize-y"
    />
  );
}

// ─── Hero Editor ───────────────────────────────────────────────────────────────

function HeroEditor({ content, onChange }: { content: HomepageContent; onChange: (c: HomepageContent) => void }) {
  const h = content.hero;

  function setHero(partial: Partial<typeof h>) {
    onChange({ ...content, hero: { ...h, ...partial } });
  }

  function setHeadline(idx: number, val: string) {
    const next: [string, string, string] = [...h.headline] as [string, string, string];
    next[idx] = val;
    setHero({ headline: next });
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#0D3A5C] flex items-center justify-center flex-shrink-0 shadow-sm">
          <Type className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#0D3A5C]">Hero Section</h2>
          <p className="text-slate-500 text-sm">Customize the main full-screen banner, headline lines, subtitle, and imagery.</p>
        </div>
      </div>

      {/* Background Image & Gallery */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
        <div>
          <FieldLabel>Background Image</FieldLabel>
          <p className="text-xs text-slate-500 mb-3">Choose from existing site images, paste any web URL, or upload from your computer.</p>
        </div>

        {/* Preset Gallery */}
        <div>
          <span className="text-xs font-semibold text-slate-400 block mb-2">Preset Library (click to apply):</span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {PRESET_HERO_IMAGES.map((preset) => {
              const isSelected = h.backgroundImage === preset.path;
              return (
                <button
                  key={preset.path}
                  type="button"
                  onClick={() => setHero({ backgroundImage: preset.path })}
                  className={`group relative h-20 rounded-xl overflow-hidden border-2 text-left transition-all ${
                    isSelected ? 'border-[#2180C0] ring-2 ring-[#2180C0]/20 shadow-md' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Image src={preset.path} alt={preset.label} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <span className="absolute bottom-1 left-2 right-2 text-[10px] font-bold text-white leading-tight drop-shadow truncate">
                    {preset.label}
                  </span>
                  {isSelected && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-[#2180C0] rounded-full flex items-center justify-center text-white text-[10px]">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom URL and File Upload */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 w-full">
            <span className="text-xs font-semibold text-slate-400 block mb-1.5">Custom Image URL or Path:</span>
            <TextInput
              value={h.backgroundImage}
              onChange={v => setHero({ backgroundImage: v })}
              placeholder="/image copy.png or https://..."
            />
          </div>
          <div className="pt-2 sm:pt-5">
            <ImageUploadButton onUpload={url => setHero({ backgroundImage: url })} />
          </div>
        </div>
      </div>

      {/* Headline Lines */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <FieldLabel>Headline (3 Lines)</FieldLabel>
        <p className="text-xs text-slate-500 mb-4">Each word or phrase renders on its own line in the hero. Keep words impactful and uppercase.</p>
        <div className="space-y-3">
          {h.headline.map((line, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#0D3A5C] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
              <TextInput value={line} onChange={v => setHeadline(i, v)} placeholder={`Line ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <FieldLabel>Subtitle Text</FieldLabel>
        <p className="text-xs text-slate-500 mb-3">Add descriptions or taglines. Line breaks in this box will format as line breaks on the page.</p>
        <TextArea
          value={h.subtitle}
          onChange={v => setHero({ subtitle: v })}
          placeholder="Two independent, specialized businesses —&#10;one shared commitment to reliability, expertise,&#10;and long-term partnership."
          rows={3}
        />
      </div>
    </div>
  );
}

// ─── Portfolio Pillar Editor ───────────────────────────────────────────────────

function PillarEditor({
  label,
  pillar,
  accentColor,
  onChange,
}: {
  label: string;
  pillar: HomepageContent['portfolio']['pillar1'];
  accentColor: string;
  onChange: (p: HomepageContent['portfolio']['pillar1']) => void;
}) {
  function updateBullet(idx: number, val: string) {
    const next = [...pillar.bullets];
    next[idx] = val;
    onChange({ ...pillar, bullets: next });
  }
  function addBullet() { onChange({ ...pillar, bullets: [...pillar.bullets, ''] }); }
  function removeBullet(idx: number) { onChange({ ...pillar, bullets: pillar.bullets.filter((_, i) => i !== idx) }); }

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
        <span className="w-3 h-3 rounded-full" style={{ background: accentColor }} />
        <h3 className="font-bold text-[#0D3A5C] text-base">{label}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel>Eyebrow Label</FieldLabel>
          <TextInput value={pillar.eyebrow} onChange={v => onChange({ ...pillar, eyebrow: v })} placeholder="Pillar 01" />
        </div>
        <div>
          <FieldLabel>CTA Button Text</FieldLabel>
          <TextInput value={pillar.ctaText} onChange={v => onChange({ ...pillar, ctaText: v })} placeholder="Explore Global Trade" />
        </div>
      </div>

      <div>
        <FieldLabel>Pillar Title</FieldLabel>
        <TextInput value={pillar.title} onChange={v => onChange({ ...pillar, title: v })} placeholder="Global Trade & Institutional Business" />
      </div>

      <div>
        <FieldLabel>Description</FieldLabel>
        <TextArea value={pillar.description} onChange={v => onChange({ ...pillar, description: v })} placeholder="Short description..." rows={3} />
      </div>

      <div>
        <FieldLabel>CTA Link Href</FieldLabel>
        <TextInput value={pillar.ctaHref} onChange={v => onChange({ ...pillar, ctaHref: v })} placeholder="/services#global-trade" />
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <FieldLabel>Bullet Points ({pillar.bullets.length})</FieldLabel>
          <button type="button" onClick={addBullet} className="inline-flex items-center gap-1 text-xs text-[#2180C0] hover:text-[#0D3A5C] font-bold transition-colors">
            <Plus className="w-3.5 h-3.5" /> Add Bullet
          </button>
        </div>
        <div className="space-y-2">
          {pillar.bullets.map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentColor }} />
              <input
                type="text"
                value={b}
                onChange={e => updateBullet(i, e.target.value)}
                placeholder={`Bullet item ${i + 1}`}
                className="flex-1 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2180C0] transition-all bg-white"
              />
              <button type="button" onClick={() => removeBullet(i)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Portfolio Editor ─────────────────────────────────────────────────────────

function PortfolioEditor({ content, onChange }: { content: HomepageContent; onChange: (c: HomepageContent) => void }) {
  const p = content.portfolio;
  function setPortfolio(partial: Partial<typeof p>) { onChange({ ...content, portfolio: { ...p, ...partial } }); }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#2180C0] flex items-center justify-center flex-shrink-0 shadow-sm">
          <Layers className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#0D3A5C]">Full Portfolio Section</h2>
          <p className="text-slate-500 text-sm">Edit the section header and the two business pillar cards below the hero.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-bold text-[#0D3A5C] text-sm">Section Header</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <FieldLabel>Eyebrow Label</FieldLabel>
            <TextInput value={p.eyebrow} onChange={v => setPortfolio({ eyebrow: v })} placeholder="Full Portfolio" />
          </div>
          <div>
            <FieldLabel>Section Title</FieldLabel>
            <TextInput value={p.title} onChange={v => setPortfolio({ title: v })} placeholder="Everything We Offer" />
          </div>
        </div>
        <div>
          <FieldLabel>Subtitle</FieldLabel>
          <TextArea value={p.subtitle} onChange={v => setPortfolio({ subtitle: v })} rows={2} />
        </div>
      </div>

      <PillarEditor
        label="Pillar 1 — Global Trade (Dark Navy Card)"
        pillar={p.pillar1}
        accentColor="#5BAEE8"
        onChange={pillar1 => setPortfolio({ pillar1 })}
      />

      <PillarEditor
        label="Pillar 2 — Technology Solutions (Light Slate Card)"
        pillar={p.pillar2}
        accentColor="#2180C0"
        onChange={pillar2 => setPortfolio({ pillar2 })}
      />
    </div>
  );
}

// ─── Live Preview Modal ───────────────────────────────────────────────────────

function LivePreviewModal({
  content,
  onClose,
  onSave,
  saving,
}: {
  content: HomepageContent;
  onClose: () => void;
  onSave: () => void;
  saving: boolean;
}) {
  const [device, setDevice] = useState<DeviceView>('desktop');
  const { hero, portfolio } = content;

  return (
    <div className="fixed inset-0 z-[9990] bg-black/80 backdrop-blur-sm flex flex-col animate-in fade-in duration-200">
      {/* Top control bar */}
      <div className="bg-[#0D3A5C] border-b border-white/10 px-6 py-3 flex items-center justify-between text-white flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Draft Preview
          </div>
          <span className="text-white/60 text-xs hidden md:inline">
            (Previewing your unsaved changes. Visitors only see what is published.)
          </span>
        </div>

        {/* Viewport switchers */}
        <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/15">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              device === 'desktop' ? 'bg-[#2180C0] text-white shadow' : 'text-white/60 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" /> <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              device === 'tablet' ? 'bg-[#2180C0] text-white shadow' : 'text-white/60 hover:text-white'
            }`}
          >
            <Tablet className="w-4 h-4" /> <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              device === 'mobile' ? 'bg-[#2180C0] text-white shadow' : 'text-white/60 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" /> <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSave}
            disabled={saving}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-md disabled:opacity-60"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Publish to Live Site
          </button>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all"
            title="Exit Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Preview viewport container */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex justify-center bg-slate-900/50">
        <div
          className={`bg-white shadow-2xl transition-all duration-300 overflow-x-hidden flex flex-col rounded-2xl overflow-hidden border border-slate-700 ${
            device === 'desktop'
              ? 'w-full max-w-7xl'
              : device === 'tablet'
              ? 'w-[768px]'
              : 'w-[390px]'
          }`}
        >
          {/* Mock Browser Header */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            </div>
            <div className="flex-1 mx-4 bg-white rounded-lg px-3 py-1 text-[11px] text-slate-500 border border-slate-200 text-center font-mono truncate">
              https://www.alliedoneltd.com (Draft Mode)
            </div>
          </div>

          {/* ── REALISTIC HERO SECTION ── */}
          <section
            className="relative w-full overflow-hidden"
            style={{ minHeight: device === 'mobile' ? '460px' : '560px', height: '65vh' }}
          >
            {hero.backgroundImage && (
              <Image
                src={hero.backgroundImage}
                alt="Hero preview"
                fill
                className="object-cover object-center"
                unoptimized
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0D3A5C]/95 via-[#0D3A5C]/90 to-[#0D3A5C]/30 pointer-events-none" />

            <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-14">
              <div className="max-w-[700px]">
                <h1
                  className="font-black tracking-[0.05em] leading-[1.2] mb-6 uppercase text-white drop-shadow-sm flex flex-col gap-2"
                  style={{
                    fontSize: device === 'mobile' ? '1.8rem' : 'clamp(2rem, 3.8vw, 3.2rem)',
                  }}
                >
                  {hero.headline.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </h1>

                <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed max-w-[420px] font-medium drop-shadow-sm whitespace-pre-line">
                  {hero.subtitle}
                </p>
              </div>
            </div>
          </section>

          {/* ── REALISTIC PORTFOLIO SECTION ── */}
          <section className="py-20 bg-[#F8FAFC] px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-14">
                <span className="inline-block text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em] mb-2">
                  {portfolio.eyebrow}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D3A5C] mt-1 mb-3 tracking-tight">
                  {portfolio.title}
                </h2>
                <div className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed whitespace-pre-line">
                  {portfolio.subtitle}
                </div>
              </div>

              {/* Cards Grid */}
              <div className={`grid gap-6 ${device === 'mobile' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                {/* Pillar 1 */}
                <div className="bg-[#0D3A5C] rounded-3xl p-8 text-white flex flex-col shadow-lg">
                  <span className="text-[#5BAEE8] text-xs font-bold uppercase tracking-wider mb-2">
                    {portfolio.pillar1.eyebrow}
                  </span>
                  <h3 className="text-2xl font-extrabold mb-3 leading-tight">{portfolio.pillar1.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{portfolio.pillar1.description}</p>
                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {portfolio.pillar1.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5BAEE8] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-white text-[#0D3A5C] px-5 py-2.5 rounded-xl font-bold text-xs w-fit shadow">
                    {portfolio.pillar1.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col shadow-sm">
                  <span className="text-[#2180C0] text-xs font-bold uppercase tracking-wider mb-2">
                    {portfolio.pillar2.eyebrow}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0D3A5C] mb-3 leading-tight">
                    {portfolio.pillar2.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{portfolio.pillar2.description}</p>
                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {portfolio.pillar2.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2180C0] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-[#0D3A5C] text-white px-5 py-2.5 rounded-xl font-bold text-xs w-fit shadow">
                    {portfolio.pillar2.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [section, setSection] = useState<Section>('hero');
  const [content, setContent] = useState<HomepageContent>(DEFAULT_HOMEPAGE_CONTENT);
  const [publishedContent, setPublishedContent] = useState<HomepageContent>(DEFAULT_HOMEPAGE_CONTENT);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Load existing content on mount
  useEffect(() => {
    (async () => {
      try {
        const data = await apiFetch('/api/admin/content/homepage');
        if (data.value) {
          const merged = deepMerge(DEFAULT_HOMEPAGE_CONTENT, data.value);
          setContent(merged);
          setPublishedContent(merged);
        }
      } catch {
        // Use defaults if backend offline
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const hasUnsavedChanges = JSON.stringify(content) !== JSON.stringify(publishedContent);

  async function handleSave() {
    setSaving(true);
    try {
      await apiFetch('/api/admin/content/homepage', {
        method: 'PUT',
        body: JSON.stringify({ value: content }),
      });
      setPublishedContent(content);
      setToast({ message: 'Content published instantly to live site!', type: 'success' });
    } catch (err) {
      setToast({ message: 'Save failed: ' + (err as Error).message, type: 'error' });
    } finally {
      setSaving(false);
    }
  }

  function handleReset() {
    if (confirm('Discard all unsaved changes and reset to the currently published content?')) {
      setContent(publishedContent);
    }
  }

  const navItems: { id: Section; label: string; icon: React.ReactNode }[] = [
    { id: 'hero', label: 'Hero Section', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'portfolio', label: 'Full Portfolio', icon: <Layers className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-[#0D3A5C] flex flex-col min-h-screen shadow-xl">
        <div className="px-6 py-7 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shadow-sm">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">AlliedOne</p>
              <p className="text-white/40 text-xs">CMS Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4 px-2">Sections</p>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left ${
                section === item.id
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              }`}
            >
              {item.icon}
              {item.label}
              {section === item.id && <ChevronRight className="w-4 h-4 ml-auto opacity-60" />}
            </button>
          ))}
        </nav>

        <div className="px-4 py-6 border-t border-white/10 space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/50 hover:text-white hover:bg-white/5 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Open Live Site
          </a>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/50 hover:text-red-300 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <LayoutDashboard className="w-5 h-5 text-[#0D3A5C]" />
              <h1 className="font-bold text-[#0D3A5C] text-lg">
                {section === 'hero' ? 'Hero Section' : 'Full Portfolio Section'}
              </h1>
            </div>

            {/* Status indicator */}
            {hasUnsavedChanges ? (
              <span className="hidden sm:inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 text-xs px-2.5 py-1 rounded-full font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Unsaved Draft
              </span>
            ) : (
              <span className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-1 rounded-full font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Up to Date
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {hasUnsavedChanges && (
              <button
                type="button"
                onClick={handleReset}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 px-3 py-2 rounded-lg hover:bg-slate-100 transition-all"
                title="Discard your draft and restore currently published text"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Discard Draft
              </button>
            )}

            {/* Full-screen interactive live preview button */}
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="inline-flex items-center gap-2 bg-[#EBF4FB] hover:bg-[#2180C0] text-[#0D3A5C] hover:text-white border border-[#2180C0]/30 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm"
            >
              <Eye className="w-4 h-4" />
              Live Preview Draft
            </button>

            {/* Publish button */}
            <button
              id="admin-save-btn"
              onClick={handleSave}
              disabled={saving || loading || !hasUnsavedChanges}
              className="inline-flex items-center gap-2 bg-[#0D3A5C] hover:bg-[#2180C0] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {saving ? 'Publishing…' : 'Save & Publish Live'}
            </button>
          </div>
        </header>

        {/* Editor area */}
        <div className="flex-1 overflow-y-auto p-8 max-w-5xl">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-[#2180C0]" />
            </div>
          ) : (
            <>
              {section === 'hero' && <HeroEditor content={content} onChange={setContent} />}
              {section === 'portfolio' && <PortfolioEditor content={content} onChange={setContent} />}
            </>
          )}
        </div>
      </main>

      {/* Live Preview Modal */}
      {showPreview && (
        <LivePreviewModal
          content={content}
          onClose={() => setShowPreview(false)}
          onSave={handleSave}
          saving={saving}
        />
      )}

      {/* Toast */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

// ─── Page Root ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [token, setTokenState] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTokenState(getToken());
  }, []);

  function handleLogin(t: string) {
    setToken(t);
    setTokenState(t);
  }

  function handleLogout() {
    clearToken();
    setTokenState(null);
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0D3A5C] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  if (!token) return <LoginScreen onLogin={handleLogin} />;
  return <Dashboard onLogout={handleLogout} />;
}
