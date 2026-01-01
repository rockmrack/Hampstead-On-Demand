import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

type Props = {
  params: {
    path: string[]
  }
}

export default function LocksmithCatchAllPage({ params }: Props) {
  const suffix = Array.isArray(params.path) && params.path.length > 0 ? params.path.join("/") : ""
  const destination = suffix
    ? `https://emergency-locksmith.vercel.app/${suffix}`
    : "https://emergency-locksmith.vercel.app/"

  redirect(destination)
}
