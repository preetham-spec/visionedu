const sizes = {
  sm: 'w-16 h-16',
  lg: 'w-24 h-24',
  xl: 'w-28 h-28',
}

/**
 * A white circular frame around each result photo. The padding keeps
 * the actual face a bit smaller within the circle ("zoomed out") and
 * guarantees a clean white ring even if the source crop's edge picks
 * up stray color from the original poster (ribbons, badges, etc.).
 */
export default function ResultAvatar({ src, alt, size = 'sm', ring = 'border-gray-200' }) {
  return (
    <div className={`${sizes[size]} rounded-full bg-white p-1.5 mx-auto mb-2 shrink-0 border ${ring}`}>
      <img src={src} alt={alt} className="w-full h-full rounded-full object-cover" />
    </div>
  )
}
