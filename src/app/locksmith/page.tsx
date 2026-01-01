import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function LocksmithPage() {
  redirect('https://emergency-locksmith.vercel.app/')
}
