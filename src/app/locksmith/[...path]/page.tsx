type Props = {
  params: {
    path: string[]
  }
}

export default function LocksmithCatchAllPage({ params }: Props) {
  const suffix = Array.isArray(params.path) && params.path.length > 0 ? params.path.join('/') : ''
  const src = suffix
    ? `https://emergency-locksmith.vercel.app/${suffix}`
    : 'https://emergency-locksmith.vercel.app/'

  return (
    <iframe title="Emergency Locksmith" src={src} className="w-full min-h-screen" style={{ border: 0 }} />
  )
}
