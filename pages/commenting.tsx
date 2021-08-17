import { useState } from 'react'

const Commenting = () => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    try {
      setName('')
      setContent('')
      const body = { name, content }

      await fetch(`http://localhost:3000/api/commenting`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }).then((res) => res.json())
      console.log('넘어가요~comments')
    } catch (error) {
      alert('흑흑...왜 안되지...?')
      console.error(error)
    }
  }

  return (
    // <form onSubmit={submitData}>
    //   <h1>comment</h1>
    //   <input
    //     autoFocus
    //     onChange={(e) => setName(e.target.value)}
    //     placeholder="Name"
    //     type="text"
    //     value={name}
    //   />
    //   <br />
    //   <textarea
    //     id="textarea"
    //     onChange={(e) => setContent(e.target.value)}
    //     placeholder="Email address"
    //     value={content}
    //   ></textarea>
    //   <input disabled={!name || !content} type="submit" value="Signup" />
    // </form>
    <div>
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
      <button
        name="commenting"
        disabled={!name || !content}
        value="Signup"
        onClick={submitData}
      >
        Signup
      </button>
    </div>
  )
}

export default Commenting
