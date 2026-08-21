import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { blogPosts } from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="pt-32 pb-20 max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-3">Post not found</h1>
        <Link to="/blog" className="text-brand-700 font-semibold hover:text-brand-800">Back to Blog</Link>
      </section>
    )
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Vision PU College' },
    publisher: { '@type': 'Organization', name: 'Vision PU College' },
    mainEntityOfPage: `https://www.visionedu.in/blog/${post.slug}`,
    ...(post.coverImage && { image: `https://www.visionedu.in${post.coverImage}` }),
  }

  const schemas = [articleSchema]
  if (post.faqs) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }

  return (
    <>
      <Seo
        fullTitle={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        image={post.coverImage ? `https://www.visionedu.in${post.coverImage}` : undefined}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        jsonLd={schemas}
      />

      <section className="relative pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-700/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-950/95"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4 fade-in-up">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight fade-in-up delay-100">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.coverImage && (
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video mb-8">
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="article-content">
            <post.Body />
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link to="/blog" className="text-brand-700 font-semibold text-sm hover:text-brand-800 inline-flex items-center gap-1">
              <i className="fas fa-arrow-left text-xs"></i> Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
