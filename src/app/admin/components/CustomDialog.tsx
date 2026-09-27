import React, { useState, useEffect } from 'react';
import { AlertCircle, HelpCircle, MessageCircle, X } from 'lucide-react';

export type DialogState = {
  isOpen: boolean;
  type: 'alert' | 'confirm' | 'prompt';
  title: string;
  message: string;
  defaultValue?: string;
  onConfirm?: (value?: string) => void;
  onCancel?: () => void;
};

export const defaultDialogState: DialogState = {
  isOpen: false,
  type: 'alert',
  title: '',
  message: '',
};

export function triggerToast(message: string, type: 'success' | 'error' = 'success') {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('app-toast', { detail: { message, type } }));
  }
}

export function triggerDialog(dialog: Omit<DialogState, 'isOpen'>) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('app-dialog', { detail: { ...dialog, isOpen: true } }));
  }
}

export default function CustomDialog({
  dialog,
  setDialog
}: {
  dialog: DialogState;
  setDialog: (d: DialogState) => void;
}) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (dialog.isOpen && dialog.type === 'prompt') {
      setInputValue(dialog.defaultValue || '');
    }
  }, [dialog]);

  if (!dialog.isOpen) return null;

  const close = () => {
    setDialog({ ...dialog, isOpen: false });
    if (dialog.onCancel) dialog.onCancel();
  };

  const confirm = () => {
    setDialog({ ...dialog, isOpen: false });
    if (dialog.onConfirm) {
      if (dialog.type === 'prompt') dialog.onConfirm(inputValue);
      else dialog.onConfirm();
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            {dialog.type === 'alert' && <AlertCircle className="w-5 h-5 text-red-500" />}
            {dialog.type === 'confirm' && <HelpCircle className="w-5 h-5 text-blue-500" />}
            {dialog.type === 'prompt' && <MessageCircle className="w-5 h-5 text-indigo-500" />}
            <h3 className="font-bold text-slate-800 text-lg">{dialog.title}</h3>
          </div>
          <button onClick={close} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">{dialog.message}</p>
          
          {dialog.type === 'prompt' && (
            <input
              type="text"
              autoFocus
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyDown={e => {
                if (e.key === 'Enter') confirm();
                if (e.key === 'Escape') close();
              }}
            />
          )}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          {dialog.type !== 'alert' && (
            <button
              onClick={close}
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
          )}
          <button
            onClick={confirm}
            className={`px-6 py-2 text-sm font-bold text-white rounded-lg transition-all shadow-md ${
              dialog.type === 'alert' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {dialog.type === 'alert' ? 'OK' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
}
