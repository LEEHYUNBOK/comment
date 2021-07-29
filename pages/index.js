import useSwr from 'swr'
import Link from 'next/link'
import React, { useState } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  
  const [name,setName] = useState('')
  const [value,setValue] = useState('')
  
  const { data, error } = useSwr('/api/users', fetcher)
  console.log('index data', data)
  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  

  return (
    <div>
      <div>
        <input type="text"
          name="name"
          placeholder="이메일을 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={(text) => setValue(name)}>extes</button>
        <h1>{value}</h1>
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
