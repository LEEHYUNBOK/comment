import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'
import Create from './create'
import Commenting from './commenting'
import { symbolName } from 'typescript'
import Delete from './delete'

const Blog = (props) => {
  const [comments, setComments] = useState(props.comments)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [delname, setDelname] = useState('')
  const [delemail, setDelemail] = useState('')
  const [delerror, setDelerror] = useState('')

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

  // 댓글 추가 기능
  const submitData = async (e: React.SyntheticEvent) => {
    try {
      setName('')
      setContent('')
      console.log('dadadaddaba', e)

      const body = { name, content }
      console.log('dadadaddaba', body)

      await axios
        .post(`http://localhost:3000/api/commenting`, JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          if (res.data === '사용자가 아닙니다.') {
            setError(res.data)
          } else {
            setError('')
            setComments(res.data)
          }
        })
      console.log('넘어가요~comments')
    } catch (error) {
      setError('실패하였습니다.')
      console.error(error)
    }
  }

  // 삭제 기능
  const dataDelete = async (e: any) => {
    try {
      setDelname('')
      setDelemail('')

      const id = e.id
      const name = e.delname
      const email = e.delemail

      await axios
        .delete(`http://localhost:3000/api/commentdelete`, {
          data: {
            id,
            name: name,
            email: email,
          },
        })
        .then((res) => {
          if (res.data === '사용자가 아닙니다.') {
            setDelerror(res.data)
          } else {
            setDelerror('')
            setComments(res.data)
          }
        })
      console.log('넘어가요~create')
    } catch (error) {
      alert('흑흑...왜 안되지...?')
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
            className={styles.comment_input_area}
            id="textarea"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Email address"
            value={content}
          ></textarea>

          <button name="commenting" value="Signup" onClick={submitData}>
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

              {/* 좋아요 버튼 */}
              <button
                name="Like"
                // onClick={Like(comment.id)}
                onClick={() => Like({ id: comment.id })}
              >
                Like {comment.like}
              </button>

              {/* 삭제 버튼 */}
              <div>
                <details>
                  <summary>삭제</summary>
                  <input
                    autoFocus
                    onChange={(e) => setDelname(e.target.value)}
                    placeholder="Name"
                    type="text"
                    value={delname}
                  />
                  <input
                    autoFocus
                    onChange={(e) => setDelemail(e.target.value)}
                    placeholder="email"
                    type="text"
                    value={delemail}
                  />
                  <button
                    name="commenting"
                    disabled={!delname || !delemail}
                    value="Signup"
                    onClick={() =>
                      dataDelete({
                        id: comment.id,
                        delname,
                        delemail,
                      })
                    }
                  >
                    Signup
                  </button>
                  <div>&emsp;{delerror}</div>
                </details>
              </div>
              {/* <Delete id={comment.id} /> */}

              {/* 대댓글 버튼 */}
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
