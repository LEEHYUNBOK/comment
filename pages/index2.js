import useSwr from 'swr'
import Link from 'next/link'
import { useState } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  // let getEmailValue = 'something@naver.com'
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [mod, setMod] = useState('find')

  // console.log('name', name)
  // console.log('시작 ' + mod)
  // console.log('~~~~~~~~~~~~~~~~')

  const { data, error } = useSwr('/api/users?method=' + mod, fetcher)

  // console.log('변화 data', data)
  // console.log('시작 data', data)
  // console.log('중간지점')

  const click = (name) => {
    console.log('클릭3 시작', name)

    setMod('push&&name=' + name)

    console.log('클릭4 data', data)
  }

  const reset = (name) => {
    console.log('클릭5 시작', name)

    setMod('find')

    console.log('클릭6 data', data)
  }
  return data ? (
    <div>
      {/* {console.log('본문', data)} */}
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={(text) => (setValue(name), setName(''), click(name))}>
          extes
        </button>
        <button onClick={(text) => reset()}>change</button>
        <h1>{value}</h1>
      </div>
      {console.log('본문 출력@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')}
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
  ) : (
    <div></div>
  )
}
