'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import type { SampleFaqItem } from '@/lib/sample-data'

export default function FaqAccordion({ items }: { items: SampleFaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
      {items.map((item, index) => {
        const isOpen = openId === item.id
        const itemNumber = String(index + 1).padStart(2, '0')

        return (
          <div key={item.id} className="py-6 transition-colors">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-start justify-between text-left group gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-[#9B9B9B] pt-1">
                  [{itemNumber}]
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#767676] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors leading-snug">
                    {item.question}
                  </h3>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#1A1A1A] shrink-0 group-hover:border-[#1A1A1A] transition-colors mt-1">
                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pl-10 pr-4 pt-4 text-sm text-[#4A4A4A] font-light leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
