import { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    try {
      console.log('submitdate', e)
      const body = { name, email }

      await axios.post(
        `http://localhost:3000/api/users`,
        JSON.stringify(body),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      console.log('넘어가요~create')
    } catch (error) {
      alert('흑흑...왜 안되지...?')
      console.error(error)
    }
  }

  return (
    <form onSubmit={submitData}>
      <h1>Signup user</h1>
      <input
        autoFocus
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        type="text"
        value={name}
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        type="text"
        value={email}
      />
      <input disabled={!name || !email} type="submit" value="Signup" />
    </form>
  )
}

export default Create
