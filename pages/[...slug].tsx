import { useRouter } from "next/router"
import { useEffect } from "react"

export default () => {
  const router = useRouter()
  const slug = router.query.slug || []

  useEffect(() => {
    if (slug[0] === "cv") {
      router.replace("/cv-maxym-kot.pdf")
    }

    router.replace("/")
  })

  return null
}
