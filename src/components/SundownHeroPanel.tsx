import { Broadcast, Radio } from '@phosphor-icons/react'

interface SundownHeroPanelProps {
  frequency: string
  coverageArea: string
}

export default function SundownHeroPanel({ frequency, coverageArea }: SundownHeroPanelProps) {
  return (
    <div className="hidden lg:block" aria-hidden="true">
      <div className="relative rounded-2xl border border-amber-100/20 bg-slate-950/30 p-6 shadow-2xl backdrop-blur-sm">
        <div className="absolute -inset-6 -z-10 rounded-full bg-amber-300/15 blur-3xl"></div>
        <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-slate-950/45">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-100/20"></div>
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose-300/25"></div>
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-200 via-rose-400 to-violet-500 shadow-2xl shadow-rose-950/50"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent"></div>
          <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between gap-3">
            <div className="h-16 w-1 rounded-full bg-amber-100/80"></div>
            <div className="h-10 w-1 rounded-full bg-amber-100/40"></div>
            <div className="h-20 w-1 rounded-full bg-amber-100/70"></div>
            <div className="h-12 w-1 rounded-full bg-amber-100/35"></div>
            <div className="h-24 w-1 rounded-full bg-amber-100/75"></div>
            <div className="h-14 w-1 rounded-full bg-amber-100/45"></div>
            <div className="h-16 w-1 rounded-full bg-amber-100/70"></div>
          </div>
          <Radio className="absolute left-6 top-6 h-8 w-8 text-amber-100" weight="duotone" />
          <Broadcast className="absolute right-6 top-6 h-8 w-8 text-rose-200" weight="duotone" />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-50">
          <span>{frequency}</span>
          <span>{coverageArea}</span>
        </div>
      </div>
    </div>
  )
}
