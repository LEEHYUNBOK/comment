import { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    try {
      console.log('submitdate', e)
      // await axios
      //   .post('http://localhost:3000/api/bcrypt', JSON.stringify(password), {
      //     headers: { 'Content-Type': 'application/json' },
      //   })
      //   .then((res) => {
      //     setPassword(res.data)
      //     console.log('password test' + password + '' + name)

      //     const body = { name, password }
      //     axios.post(`http://localhost:3000/api/users`, JSON.stringify(body), {
      //       headers: { 'Content-Type': 'application/json' },
      //     })
      //     console.log('넘어가요~create')
      //   })
      // console.log('tttt', password)

      const body = { name, password }
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
        onChange={(e) => setPassword(e.target.value)}
        placeholder="content"
        type="text"
        value={password}
      />
      <input disabled={!name || !password} type="submit" value="Signup" />
    </form>
  )
}

export default Create
