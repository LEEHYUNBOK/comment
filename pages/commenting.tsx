import { useState } from 'react'

const Commenting = () => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    try {
      console.log('submitdate', e)
      const body = { name, content }

      await fetch(`http://localhost:3000/api/commenting`, {
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
      <h1>comment</h1>
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
        onChange={(e) => setContent(e.target.value)}
        placeholder="Email address"
        value={content}
      ></textarea>
      <input disabled={!name || !content} type="submit" value="Signup" />
    </form>
  )
}

export default Commenting
