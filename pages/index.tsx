import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'
import Create from './create'
import Commenting from './commenting'
import { symbolName } from 'typescript'

const Blog = (props) => {
  const [comments, setComments] = useState(props.comments)
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  // 좋아요 기능
  const Like = async (e: any) => {
    try {
      const id = e

      await axios
        .post('http://localhost:3000/api/like', JSON.stringify(id), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => setComments(res.data))
    } catch (error) {
      console.error(error)
    }
  }
  // comments 추가 기능
  const submitData = async (e: React.SyntheticEvent) => {
    try {
      setName('')
      setContent('')
      const body = { name, content }

      await axios
        .post(`http://localhost:3000/api/commenting`, JSON.stringify(body), {
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
    <div className={styles.comments}>
      <div>
        <h1>My Blog</h1>
        <div>
          <Create />
        </div>

        <br />
        {/* 작성 부분 */}
        <div className={styles.comments_input}>
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
          <div>&emsp;{error}</div>
        </div>

        {/* comments 목록 부분 */}
        <main>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comments_print}>
              <div className={styles.comments_print_user}>
                name = {comment.user.name}
              </div>
              <div className={styles.comments_print_date}>
                {comment.createdAt}
              </div>
              <div className={styles.comments_print_content}>
                {comment.content}
              </div>
              <button
                name="Like"
                // onClick={Like(comment.id)}
                onClick={() => Like({ id: comment.id })}
              >
                Like {comment.like}
              </button>
              <Commenting id={comment.id} />
              <br />
              <br />
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/users')
  const comments = await res.data

  return {
    props: { comments },
  }
}

export default Blog
