import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 bg-[#EBF4FB] rounded-full flex items-center justify-center mb-6 text-[#2180C0]">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
      <h2 className="text-7xl md:text-8xl font-extrabold text-[#0D3A5C] mb-4 tracking-tight">404</h2>
      <p className="text-2xl font-bold text-slate-700 mb-3">Page Not Found</p>
      <p className="text-slate-500 mb-10 max-w-md mx-auto text-lg">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-[#2180C0] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#1A5C8A] transition-colors shadow-md"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
