import { Link } from 'react-router-dom'

export default function CampusSection({ campus, bg }) {
  return (
    <section id={campus.id} className={`py-14 md:py-20 ${bg} scroll-mt-32`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {campus.image && (
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6 aspect-video">
            <img src={campus.image} alt={campus.name} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex items-center gap-3 mb-4">
          {campus.badges.map((b, i) => (
            <span
              key={b}
              className={`text-xs px-3 py-1 rounded-full font-bold ${
                i === 0
                  ? campus.exclusive
                    ? 'bg-brand-700 text-white'
                    : 'bg-brand-100 text-brand-800'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {b}
            </span>
          ))}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">{campus.name}</h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">{campus.description}</p>

        {!campus.addressPending && (
          <div className="flex items-start gap-3 mb-5 p-4 rounded-xl bg-gray-50 border border-gray-100">
            <i className="fas fa-map-marker-alt text-brand-700 mt-1"></i>
            <div>
              <div className="text-sm font-semibold text-gray-900">{campus.addressLine1}</div>
              <div className="text-xs text-gray-500">{campus.addressLine2}</div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          {campus.amenities.map(([icon, label]) => (
            <div key={label} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
              <i className={`fas ${icon} text-brand-700 w-4`}></i> {label}
            </div>
          ))}
        </div>

        {campus.learnMoreLink && (
          <Link
            to={campus.learnMoreLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 mt-5"
          >
            {campus.learnMoreLabel || 'Learn More'} <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        )}
      </div>
    </section>
  )
}
