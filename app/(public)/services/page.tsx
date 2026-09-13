import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Building2,
  LayoutGrid,
  Compass,
  Leaf,
  Trees,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Check,
} from 'lucide-react'
import { getServices } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Architectural Disciplines & Services | Techno Architecture',
  description: 'Explore our studio disciplines: Architectural Design, Interior Architecture, Urban Masterplanning, Sustainable Consulting, Landscape Integration, and Turnkey Execution.',
}

export default async function ServicesPage() {
  const services = await getServices()

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building2,
    LayoutGrid,
    Compass,
    Leaf,
    Trees,
    ShieldCheck,
  }

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      {/* Editorial Header */}
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#767676] mb-4">
              <span>Techno Architecture Practice</span>
              <span>&bull;</span>
              <span>Core Disciplines</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1A1A1A] max-w-4xl tracking-tight leading-[1.08]">
              Comprehensive spatial stewardship from initial sketch to finished stone.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#4A4A4A] font-light max-w-2xl leading-relaxed">
              We offer integrated architectural capabilities tailored to complex private, commercial, and civic commissions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Building2
            const serviceIndex = String(index + 1).padStart(2, '0')

            return (
              <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
                <div className="bg-white p-8 lg:p-10 border border-[#E5E5E5] flex flex-col justify-between h-full hover:border-[#1A1A1A] transition-all duration-300 group shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E5E5]/60">
                      <span className="font-mono text-xs text-[#9B9B9B] tracking-widest">
                        [{serviceIndex}]
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#FAF9F7] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h2 className="text-2xl font-serif font-normal text-[#1A1A1A] mb-3 group-hover:text-[#4A4A4A] transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-xs text-[#4A4A4A] font-light leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Scope Deliverables */}
                    <div className="pt-4 border-t border-[#E5E5E5]/60">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#767676] block mb-3">
                        Key Capabilities:
                      </span>
                      <ul className="space-y-2">
                        {service.scope.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[11px] text-[#4A4A4A]">
                            <Check className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] group-hover:gap-3 transition-all"
                    >
                      <span>Inquire Discipline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#9B9B9B] block">
                Integrated Delivery
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-white leading-tight">
                Design precision matched with construction accountability.
              </h2>
              <p className="text-sm text-[#9B9B9B] font-light leading-relaxed">
                By bridging architecture, interior detailing, and engineering coordination under one roof, we eliminate miscommunication and safeguard client budgets.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 border border-white/10">
                <span className="text-2xl font-serif text-white block mb-2">01</span>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-2">Discovery & Feasibility</h4>
                <p className="text-[11px] text-[#9B9B9B] leading-relaxed">Topographical appraisal, microclimate mapping, and program optimization.</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10">
                <span className="text-2xl font-serif text-white block mb-2">02</span>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-2">Schematic & BIM</h4>
                <p className="text-[11px] text-[#9B9B9B] leading-relaxed">Detailed 3D massing, parametric daylight testing, and coordinated GFC sets.</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10">
                <span className="text-2xl font-serif text-white block mb-2">03</span>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-2">Artisanal Execution</h4>
                <p className="text-[11px] text-[#9B9B9B] leading-relaxed">On-site quality auditing, bespoke fabrication oversight, and handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
