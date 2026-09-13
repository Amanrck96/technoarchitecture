'use client'

import { useState } from 'react'

interface FaqItem {
  id: string
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="w-full py-6 flex items-center justify-between text-left group"
          >
            <span className="text-[#1A1A1A] font-medium pr-8 group-hover:text-[#4A4A4A] transition-colors">
              {item.question}
            </span>
            <span className={`text-2xl text-[#9B9B9B] transition-transform duration-300 flex-shrink-0 ${open === item.id ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === item.id ? 'max-h-96 pb-6' : 'max-h-0'}`}>
            <p className="text-[#4A4A4A] leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
