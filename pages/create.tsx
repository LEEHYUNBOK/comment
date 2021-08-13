import { useState } from 'react'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    try {
      console.log('submitdate', e)
      const body = { name, email }

      await fetch(`http://localhost:3000/api/push`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
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
      <br />
      <textarea
        id="textarea"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        value={email}
      ></textarea>
      <input disabled={!name || !email} type="submit" value="Signup" />
    </form>
  )
}

export default Create
