export default function Logo({
  className = '',
  color = 'bg-brand-700',
  src = '/images/logo-mark.png',
  aspect = '322/128',
  label = 'Vision PU College',
}) {
  const maskStyle = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskPosition: 'left center',
    maskPosition: 'left center',
  }

  return (
    <span
      role="img"
      aria-label={label}
      style={{ ...maskStyle, aspectRatio: aspect }}
      className={`block ${color} ${className}`}
    />
  )
}
