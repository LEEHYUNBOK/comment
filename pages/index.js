import useSwr from 'swr'
import Link from 'next/link'
import { useState } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  // let getEmailValue = 'something@naver.com'
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [mod, setMod] = useState('find')

  console.log('시작 ' + mod)
  // const { data, error } = useSwr('/api/users?name=' + name, fetcher)
  // console.log('data', data)
  console.log('~~~~~~~~~~~~~~~~')
  const { data, error } = useSwr('/api/users?method=' + mod, fetcher)
  console.log('변화 data', data)
  if (mod != 'find') {
    setMod('find')
  }
  console.log('시작 data', data)
  console.log('중간지점')
  // const { data, error } = useSwr('/api/users?method=' + push + fetcher)

  const click = (name) => {
    console.log('클릭3 시작', name)
    // const { data, error } = useSwr(
    //   '/api/users?method=' + push + 'name=' + name,
    //   fetcher
    // )
    // setMod('push&&name=' + name)
    setMod('push&&name=' + name)

    console.log('클릭4 data', data)
  }

  if (error) {
    console.log('에러')
    return <div>Failed to load users</div>
  }
  if (!data) {
    console.log('이제 로딩')
    console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
    return <div>Loading...</div>
  }

  return (
    <div>
      {console.log('본문', data)}
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
        <h1>{value}</h1>
      </div>
      {console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')}
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
