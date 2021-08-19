import { useState } from 'react'
import axios from 'axios'

const Delete = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { id } = props

  const dataDelete = async (e: React.SyntheticEvent) => {
    try {
      console.log('submitdate', e)
      const body = { name, email, id }

      await axios.post(
        `http://localhost:3000/api/delete`,
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
    <div>
      <details>
        <summary>삭제</summary>
        <form onSubmit={dataDelete}>
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
      </details>
    </div>
  )
}

export default Delete
