import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        description="Guidance on NEET, JEE, KCET, integrated PU academics, scholarships and admissions in Bangalore from the Vision PU College and Vision NEET Academy faculty."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
      />
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-700/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-950/95"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4 fade-in-up">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white font-medium">Blog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Vision <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Blog</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed fade-in-up delay-200">
            Guidance on NEET, JEE, PU academics and admissions from the Vision faculty.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="flex flex-col sm:flex-row gap-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6"
            >
              {post.coverImage && (
                <div className="sm:w-48 shrink-0 rounded-lg overflow-hidden aspect-video sm:aspect-square">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="min-w-0">
                <div className="text-xs text-gray-400 mb-2">
                  {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                <span className="text-brand-700 font-semibold text-sm inline-flex items-center gap-1">
                  Read more <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
