import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.visionedu.in'
const SITE_NAME = 'Vision PU College'
const DEFAULT_TITLE = "Vision PU College | Karnataka's Most Trusted Institute"
const DEFAULT_DESCRIPTION =
  "Karnataka's trusted Pre-University institute for Science, Commerce and Degree education, with integrated NEET/JEE/KCET coaching through Vision NEET Academy."
const DEFAULT_IMAGE = `${SITE_URL}/images/hero.jpg`

function upsertMeta(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
  return tag
}

function upsertCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
  return tag
}

/**
 * Sets per-page title, description, canonical URL, Open Graph / Twitter tags,
 * and optional extra JSON-LD (e.g. BreadcrumbList, Article, FAQPage) on mount.
 * Resets to site defaults on unmount so tags don't leak across routes.
 */
export default function Seo({ title, fullTitle: fullTitleProp, description, keywords, image, breadcrumbs, jsonLd }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = fullTitleProp || (title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE)
    const desc = description || DEFAULT_DESCRIPTION
    const img = image || DEFAULT_IMAGE
    const url = `${SITE_URL}${pathname}`

    document.title = fullTitle
    const metaTags = [
      upsertMeta('name', 'description', desc),
      upsertMeta('property', 'og:title', fullTitle),
      upsertMeta('property', 'og:description', desc),
      upsertMeta('property', 'og:image', img),
      upsertMeta('property', 'og:url', url),
      upsertMeta('property', 'og:type', 'website'),
      upsertMeta('property', 'og:site_name', SITE_NAME),
      upsertMeta('name', 'twitter:card', 'summary_large_image'),
      upsertMeta('name', 'twitter:title', fullTitle),
      upsertMeta('name', 'twitter:description', desc),
      upsertMeta('name', 'twitter:image', img),
    ]
    if (keywords) metaTags.push(upsertMeta('name', 'keywords', keywords))
    const canonicalTag = upsertCanonical(url)

    const scripts = []
    if (breadcrumbs && breadcrumbs.length) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.path}`,
        })),
      })
      document.head.appendChild(script)
      scripts.push(script)
    }
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      items.forEach((item) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(item)
        document.head.appendChild(script)
        scripts.push(script)
      })
    }

    return () => {
      document.title = DEFAULT_TITLE
      metaTags.forEach((t) => t.remove())
      canonicalTag.remove()
      scripts.forEach((s) => s.remove())
    }
  }, [title, fullTitleProp, description, keywords, image, pathname, breadcrumbs, jsonLd])

  return null
}
