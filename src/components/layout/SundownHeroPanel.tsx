import stationLogoPng from '@/assets/images/sundown-radio-logo.png'

interface SundownHeroPanelProps {
  frequency: string
  coverageArea: string
}

export default function SundownHeroPanel({ frequency, coverageArea }: SundownHeroPanelProps) {
  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
      <div className="relative rounded-2xl border border-amber-100/20 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-sm">
        <div className="absolute -inset-6 -z-10 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true"></div>
        <img
          src={stationLogoPng}
          alt="Sundown Radio — Alternative Music After Dark"
          width={691}
          height={512}
          className="w-full h-auto object-contain rounded-xl"
        />
        <div className="mt-4 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-50">
          <span>{frequency}</span>
          <span>{coverageArea}</span>
        </div>
      </div>
    </div>
  )
}
