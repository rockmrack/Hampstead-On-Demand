import { redirect } from 'next/navigation'

export default function ServiceLandingPage({
  params,
}: {
  params: { service: string }
}) {
  const service = (params.service || '').toLowerCase()

  // Dedicated marketing page exists.
  if (service === 'locksmith') {
    redirect('/locksmith')
  }

  // Default: forward to the main services page with a category filter.
  redirect(`/services?category=${encodeURIComponent(service)}`)
}
