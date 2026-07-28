'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D3A5C] mb-4 tracking-tight">Something went wrong</h2>
      <p className="text-slate-500 mb-10 max-w-md mx-auto text-lg">
        An unexpected error occurred while loading this page. Our team has been notified.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#2180C0] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#1A5C8A] transition-colors shadow-md"
        >
          Try Again
        </button>
        <Link 
          href="/"
          className="bg-white border border-slate-200 text-[#0D3A5C] px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
