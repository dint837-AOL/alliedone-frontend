import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://alliedone-backend-9a02.onrender.com';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://alliedoneltd.com';

async function getPageData(slug: string, isPreview: boolean = false) {
  try {
    const url = `${API_URL}/api/pages/${slug}${isPreview ? '?preview=true' : ''}`;
    const options: RequestInit = isPreview ? { cache: 'no-store' } : { next: { revalidate: 60 } };
    const res = await fetch(url, options);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const isPreview = searchParams?.preview === 'true';
  const page = await getPageData(params.slug, isPreview);
  
  if (!page) {
    return { title: 'Not Found | AlliedOne' };
  }

  return {
    title: (isPreview ? '[PREVIEW] ' : '') + (page.seoTitle || page.title),
    description: page.seoDesc || '',
    alternates: {
      canonical: page.canonicalUrl || `${SITE_URL}/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle || page.title,
      description: page.seoDesc || '',
      images: page.seoImage ? [{ url: page.seoImage }] : [],
    }
  };
}

export default async function DynamicPage(props: { params: Promise<{ slug: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const isPreview = searchParams?.preview === 'true';
  const page = await getPageData(params.slug, isPreview);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-12 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A5486] mb-12 text-center">
          {page.title}
        </h1>

        <div className="space-y-12">
          {page.blocks.filter((b: any) => !b.isHidden).map((block: any) => {
            const content = block.content || {};

            switch (block.type) {
              case 'TEXT':
                return (
                  <div 
                    key={block.id}
                    className="prose prose-lg max-w-none text-slate-700"
                    style={{ 
                      fontFamily: block.fontFamily || 'inherit',
                      color: block.color || 'inherit',
                      fontWeight: block.isBold ? 'bold' : 'normal',
                      fontStyle: block.isItalic ? 'italic' : 'normal',
                    }}
                    dangerouslySetInnerHTML={{ __html: content.html || '' }}
                  />
                );

              case 'IMAGE':
                return content.url ? (
                  <div key={block.id} className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ minHeight: '300px' }}>
                    <Image
                      src={content.url}
                      alt={content.altText || 'Page Image'}
                      layout="fill"
                      objectFit="cover"
                      className="hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ) : null;

              case 'CTA':
                return content.ctaLabel ? (
                  <div key={block.id} className="flex justify-center my-8">
                    <Link
                      href={content.ctaLink || '#'}
                      className="bg-[#0A5486] hover:bg-[#0095DA] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      {content.ctaLabel}
                    </Link>
                  </div>
                ) : null;

              case 'QUOTE':
                return (
                  <blockquote key={block.id} className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-l-4 border-[#0095DA] my-12">
                    <div 
                      className="text-xl md:text-2xl font-medium text-slate-800 mb-8 italic"
                      dangerouslySetInnerHTML={{ __html: content.text || '' }}
                    />
                    <div className="flex items-center gap-4">
                      {content.authorImage && (
                        <div className="w-16 h-16 rounded-full overflow-hidden relative shadow-md">
                          <Image
                            src={content.authorImage}
                            alt={content.authorName || 'Author'}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-[#0A5486]">{content.authorName || 'Author Name'}</div>
                        <div className="text-slate-500 text-sm font-semibold">{content.authorTitle || 'Title'}</div>
                      </div>
                    </div>
                  </blockquote>
                );

              case 'HTML':
                return (
                  <div key={block.id} dangerouslySetInnerHTML={{ __html: content.html || '' }} />
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </main>
  );
}
