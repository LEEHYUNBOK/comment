import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
// console.log('url', fetcher)
export default function User() {
  const router = useRouter()
  console.log('url', router)
  const { data, error } = useSwr(
    router.query.id ? `/api/user/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>c2c{data.name}</div>
}
