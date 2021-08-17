import { useState } from 'react'
import axios from 'axios'

const Commenting = () => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    try {
      setName('')
      setContent('')
      const body = { name, content }

      await axios
        .post(`http://localhost:3000/api/commenting`, JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => setError(res.data))
      console.log('넘어가요~comments')
    } catch (error) {
      setError('실패하였습니다.')
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
      <div>{error}</div>
    </div>
  )
}

export default Commenting
