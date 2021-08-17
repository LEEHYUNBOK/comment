import { useState } from 'react'
import axios from 'axios'

const Commenting = (props) => {
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  console.log('res', props)
  const id = props
  console.log('gggres', id)

  const inget = async (props: any) => {
    console.log('get', props)
    const id = props
    console.log('get2', id)
    const res = await axios
      .get('http://localhost:3000/api/incomment', {
        params: {
          id: 1,
        },
      })
      .then((res) => setComments(res.data))
  }

  const submitData = async (e: React.SyntheticEvent) => {
    try {
      setName('')
      setContent('')
      const body = { name, content }

      await axios
        .post(`http://localhost:3000/api/incoinput`, JSON.stringify(body), {
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
    <div>
      <details>
        <summary onClick={() => inget(id)}>더보기</summary>
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="post">
              <div>&emsp;cid = {comment.id}</div>
              <div>&emsp;cname = {comment.user.name}</div>
              <div className="content">&emsp;ccomments = {comment.content}</div>
              <br />
            </div>
          ))}
        </div>
        <div>
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
      </details>
    </div>
  )
}
export default Commenting
