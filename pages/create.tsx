import { useState } from 'react'
import axios from 'axios'
import UserCreate from './api/users'

const Create = () => {
  const [createUserName, setCreateUserName] = useState('')
  const [createUserPassword, setCreateUserPassword] = useState('')
  const [userError, setUserError] = useState('')

  const createUser = async (e: any) => {
    try {
      setCreateUserName('')
      setCreateUserPassword('')
      const createNewPassword = e.createUserPassword
      const createNewName = e.createUserName
      const body = { createNewName, createNewPassword }
      await axios
        .post(`/api/users`, JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          alert(res.data), setUserError(res.data)
        })
    } catch (error) {
      setUserError('실패하였습니다.')
      alert('실패하였습니다.')
      console.error(error)
    }
  }

  return (
    <div>
      <input
        onChange={(e) => setCreateUserName(e.target.value)}
        placeholder="Name"
        type="text"
        value={createUserName}
      />
      <input
        onChange={(e) => setCreateUserPassword(e.target.value)}
        placeholder="password"
        type="password"
        value={createUserPassword}
      />

      <button
        name="commenting"
        value="Signup"
        onClick={() => createUser({ createUserName, createUserPassword })}
      >
        Signup
      </button>
    </div>
  )
}

export default Create
