import stationLogoPng from '@/assets/images/sundown-radio-logo.png'

export default function SundownHeroPanel() {
  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
      <div className="relative rounded-2xl border border-amber-100/20 bg-slate-950/60 p-4 shadow-2xl backdrop-blur-sm">
        <div className="absolute -inset-6 -z-10 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true"></div>
        <img
          src={stationLogoPng}
          alt="Sundown Radio — Alternative Music After Dark"
          width={691}
          height={512}
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>
    </div>
  )
}
