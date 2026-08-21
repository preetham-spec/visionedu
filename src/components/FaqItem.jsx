import { useState } from 'react'

function Block({ block }) {
  if (block.subsections) {
    return (
      <div className="space-y-3 mt-2">
        {block.subsections.map((s) => (
          <div key={s.label} className="flex gap-3">
            <span className="shrink-0 mt-0.5 text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">
              {s.label}
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    )
  }
  if (block.ol) {
    return (
      <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-600 pl-1">
        {block.ol.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    )
  }
  return (
    <p className="text-sm text-gray-600 leading-relaxed">
      {block.p}
      {block.phone && (
        <a href={`tel:+91${block.phone.replace(/\s/g, '')}`} className="text-brand-700 font-semibold hover:text-brand-800">
          {block.phone}
        </a>
      )}
      {block.suffix}
    </p>
  )
}

export default function FaqItem({ faq, open, onToggle }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
      >
        <span className="font-bold text-sm sm:text-base text-gray-900">{faq.question}</span>
        <i
          className={`fas fa-chevron-down text-brand-700 text-sm transition-transform shrink-0 ${
            open ? 'rotate-180' : ''
          }`}
        ></i>
      </button>
      {open && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 space-y-3 border-t border-gray-100 pt-4">
          {faq.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      )}
    </div>
  )
}
