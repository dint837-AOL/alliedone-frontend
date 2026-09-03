'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  LogOut, Save, Upload, Eye, EyeOff, Plus, Trash2,
  ChevronRight, LayoutDashboard, Image as ImageIcon, Type, Layers,
  CheckCircle, AlertCircle, Loader2, Lock, User, Shield
} from 'lucide-react';
import { DEFAULT_HOMEPAGE_CONTENT, HomepageContent } from '@/lib/siteContent';

const rawBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const API_BASE = rawBase.replace(/\/api\/?$/, '').replace(/\/+$/, '');

// ─── Types ────────────────────────────────────────────────────────────────────

type Section = 'hero' | 'portfolio';

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
      setError('Could not connect to server. Is the backend running?');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061D30] via-[#0D3A5C] to-[#1A5C8A] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
          {/* Logo area */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Admin Panel</h1>
            <p className="text-white/60 text-sm mt-1">AlliedOne CMS — Restricted Access</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
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

            {/* Password */}
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

function ImageUploadButton({ onUpload, label = 'Upload Image' }: { onUpload: (url: string) => void; label?: string }) {
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
      if (!res.ok) throw new Error('Upload failed');
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
        className="inline-flex items-center gap-2 bg-[#EBF4FB] hover:bg-[#2180C0] text-[#0D3A5C] hover:text-white border border-[#2180C0]/30 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-60"
      >
        {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
        {uploading ? 'Uploading…' : label}
      </button>
    </>
  );
}

// ─── Field Wrappers ────────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{children}</label>;
}

function TextInput({ value, onChange, placeholder, className = '' }: { value: string; onChange: (v: string) => void; placeholder?: string; className?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2180C0] transition-all text-sm ${className}`}
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
      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2180C0] transition-all text-sm resize-y"
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
        <div className="w-10 h-10 rounded-xl bg-[#0D3A5C] flex items-center justify-center flex-shrink-0">
          <Type className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-[#0D3A5C]">Hero Section</h2>
          <p className="text-slate-400 text-sm">Full-viewport banner at the top of the homepage</p>
        </div>
      </div>

      {/* Background Image */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <FieldLabel>Background Image</FieldLabel>
        <div className="flex items-start gap-4 mt-2">
          <div className="relative w-32 h-20 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0">
            {h.backgroundImage && (
              <Image src={h.backgroundImage} alt="Hero background" fill className="object-cover" unoptimized />
            )}
          </div>
          <div className="flex-1">
            <TextInput
              value={h.backgroundImage}
              onChange={v => setHero({ backgroundImage: v })}
              placeholder="/image copy.png"
            />
            <p className="text-xs text-slate-400 mt-1.5 mb-3">Public path (e.g. /hero-bg.png) or upload a new file:</p>
            <ImageUploadButton label="Upload New Hero Image" onUpload={url => setHero({ backgroundImage: url })} />
          </div>
        </div>
      </div>

      {/* Headline Lines */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <FieldLabel>Headline (3 lines)</FieldLabel>
        <p className="text-xs text-slate-400 mb-4">Each line appears stacked in the hero. Keep text uppercase and short.</p>
        <div className="space-y-3">
          {h.headline.map((line, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#0D3A5C] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
              <TextInput value={line} onChange={v => setHeadline(i, v)} placeholder={`Line ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <FieldLabel>Subtitle Text</FieldLabel>
        <p className="text-xs text-slate-400 mb-3">Use \n (backslash n) for line breaks in the subtitle.</p>
        <TextArea
          value={h.subtitle}
          onChange={v => setHero({ subtitle: v })}
          placeholder="Two independent, specialized businesses —\none shared commitment..."
          rows={3}
        />
      </div>

      {/* Live Preview */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
        <div className="bg-slate-700 px-4 py-2 flex items-center gap-2">
          <Eye className="w-4 h-4 text-slate-300" />
          <span className="text-slate-300 text-xs font-semibold">Preview</span>
        </div>
        <div className="relative h-52 bg-[#0D3A5C] overflow-hidden">
          {h.backgroundImage && (
            <Image src={h.backgroundImage} alt="preview" fill className="object-cover object-center opacity-40" unoptimized />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0D3A5C]/95 via-[#0D3A5C]/90 to-[#0D3A5C]/30" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center">
            <div className="font-black uppercase text-white text-xl leading-tight flex flex-col gap-1">
              {h.headline.map((line, i) => <span key={i}>{line || `Line ${i + 1}`}</span>)}
            </div>
            <p className="text-white/80 text-xs mt-3 max-w-xs leading-relaxed">
              {h.subtitle.replace(/\\n/g, '\n').split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
            </p>
          </div>
        </div>
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
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: accentColor }} />
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
        <FieldLabel>CTA Link</FieldLabel>
        <TextInput value={pillar.ctaHref} onChange={v => onChange({ ...pillar, ctaHref: v })} placeholder="/services#global-trade" />
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <FieldLabel>Bullet Points</FieldLabel>
          <button onClick={addBullet} className="inline-flex items-center gap-1 text-xs text-[#2180C0] hover:text-[#0D3A5C] font-semibold transition-colors">
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
                placeholder={`Bullet ${i + 1}`}
                className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2180C0] transition-all"
              />
              <button onClick={() => removeBullet(i)} className="text-slate-300 hover:text-red-400 transition-colors p-1">
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
        <div className="w-10 h-10 rounded-xl bg-[#2180C0] flex items-center justify-center flex-shrink-0">
          <Layers className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-[#0D3A5C]">Full Portfolio Section</h2>
          <p className="text-slate-400 text-sm">The two-pillar section directly below the hero</p>
        </div>
      </div>

      {/* Section Header */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
        <h3 className="font-bold text-slate-700 text-sm">Section Header</h3>
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

      {/* Pillar 1 */}
      <PillarEditor
        label="Pillar 1 — Dark Card (Global Trade)"
        pillar={p.pillar1}
        accentColor="#5BAEE8"
        onChange={pillar1 => setPortfolio({ pillar1 })}
      />

      {/* Pillar 2 */}
      <PillarEditor
        label="Pillar 2 — Light Card (Technology)"
        pillar={p.pillar2}
        accentColor="#2180C0"
        onChange={pillar2 => setPortfolio({ pillar2 })}
      />
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [section, setSection] = useState<Section>('hero');
  const [content, setContent] = useState<HomepageContent>(DEFAULT_HOMEPAGE_CONTENT);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Load existing content on mount
  useEffect(() => {
    (async () => {
      try {
        const data = await apiFetch('/api/admin/content/homepage');
        if (data.value) {
          // Deep merge with defaults
          setContent(prev => deepMerge(prev, data.value));
        }
      } catch {
        // Backend unreachable — just use defaults
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Deep merge utility (mirrors the server-side one)
  function deepMerge(target: any, source: any): any {
    if (typeof source !== 'object' || source === null) return source ?? target;
    const result = { ...target };
    for (const key of Object.keys(source)) {
      if (typeof source[key] === 'object' && !Array.isArray(source[key]) && source[key] !== null &&
          typeof target[key] === 'object' && !Array.isArray(target[key])) {
        result[key] = deepMerge(target[key], source[key]);
      } else {
        result[key] = source[key] ?? target[key];
      }
    }
    return result;
  }

  async function handleSave() {
    setSaving(true);
    try {
      await apiFetch('/api/admin/content/homepage', {
        method: 'PUT',
        body: JSON.stringify({ value: content }),
      });
      setToast({ message: 'Content saved successfully!', type: 'success' });
    } catch (err) {
      setToast({ message: 'Save failed: ' + (err as Error).message, type: 'error' });
    } finally {
      setSaving(false);
    }
  }

  const navItems: { id: Section; label: string; icon: React.ReactNode }[] = [
    { id: 'hero', label: 'Hero Section', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'portfolio', label: 'Full Portfolio', icon: <Layers className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-[#0D3A5C] flex flex-col min-h-screen">
        {/* Logo */}
        <div className="px-6 py-7 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">AlliedOne</p>
              <p className="text-white/40 text-xs">CMS Panel</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4 px-2">Homepage Sections</p>
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

        {/* Bottom actions */}
        <div className="px-4 py-6 border-t border-white/10 space-y-2">
          <a
            href="/"
            target="_blank"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/50 hover:text-white/80 hover:bg-white/5 transition-all"
          >
            <Eye className="w-4 h-4" />
            View Website
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
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-5 h-5 text-[#0D3A5C]" />
            <h1 className="font-bold text-[#0D3A5C] text-lg">
              {section === 'hero' ? 'Hero Section Editor' : 'Full Portfolio Editor'}
            </h1>
          </div>
          <button
            id="admin-save-btn"
            onClick={handleSave}
            disabled={saving || loading}
            className="inline-flex items-center gap-2 bg-[#0D3A5C] hover:bg-[#2180C0] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </header>

        {/* Editor area */}
        <div className="flex-1 overflow-y-auto p-8">
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

  // Prevent SSR mismatch
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
