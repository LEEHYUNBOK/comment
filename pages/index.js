import useSwr from 'swr'
import Link from 'next/link'
import { useState } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  let getEmailValue = 'something@naver.com'
  const { data, error } = useSwr('/api/users?email=' + getEmailValue, fetcher)
  console.log('index data', data)
  console.log('index error', error)
  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  // const [name,setName] = useState('')

  return (
    <div>
      <div>
        {/* <input type="text" 
        value={name}
        onChange =
        /> */}
        <button>extes</button>
        <h1></h1>
      </div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link href="/user/[id]" as={`/user/${user.id}`}>
              <a>{`${user.name} ${user.id}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
