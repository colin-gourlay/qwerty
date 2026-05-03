export default function SoundWave() {
  return (
    <div className="flex items-center gap-[3px] h-4">
      <div className="w-[3px] bg-current rounded-full animate-sound-wave-1" style={{ height: '60%' }}></div>
      <div className="w-[3px] bg-current rounded-full animate-sound-wave-2" style={{ height: '100%' }}></div>
      <div className="w-[3px] bg-current rounded-full animate-sound-wave-3" style={{ height: '80%' }}></div>
      <div className="w-[3px] bg-current rounded-full animate-sound-wave-4" style={{ height: '100%' }}></div>
      <div className="w-[3px] bg-current rounded-full animate-sound-wave-5" style={{ height: '60%' }}></div>
    </div>
  )
}
