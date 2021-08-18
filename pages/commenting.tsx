import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'

const Commenting = (props) => {
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const { id } = props

  const inget = async (props: any) => {
    const id = props
    const res = await axios
      .get('http://localhost:3000/api/incomment', {
        params: {
          id: id,
        },
      })
      .then((res) => setComments(res.data))
  }

  const submitData = async (e: React.SyntheticEvent) => {
    try {
      setName('')
      setContent('')
      const body = { name, content, id }

      await axios
        .post(`http://localhost:3000/api/incoinput`, JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          if (res.data === '사용자가 아닙니다.') {
            setError(res.data)
          } else {
            setComments(res.data)
          }
        })
      console.log('넘어가요~comments')
    } catch (error) {
      setError('실패하였습니다.')
      console.error(error)
    }
  }

  return (
    <div className={styles.inComments_print}>
      <details>
        <summary onClick={() => inget(id)}>더보기</summary>
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comments_print}>
              <div className={styles.comments_print_user}>
                cname = {comment.user.name}
              </div>
              <div className={styles.comments_print_date}>
                {comment.createdAt}
              </div>
              <div className={styles.comments_print_content}>
                {comment.content}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.comments_input}>
          <input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
          <br />
          <textarea
            className={styles.comment_area}
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
