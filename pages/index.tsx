import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'
import Create from './create'
import Commenting from './commenting'
import { symbolName } from 'typescript'
import Delete from './delete'
import Comment from './comment'

const Blog = (props) => {
  const [comments, setComments] = useState(props.comments)
  const [error, setError] = useState('')
  const [deleteError, setDeleteError] = useState('')

  // 좋아요 기능
  const Like = async (e: any) => {
    try {
      const ty = 'like'
      const { id } = e
      const body = { id, ty }
      await axios
        .put('http://localhost:3000/api/commentLike', JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => setComments(res.data))
    } catch (error) {
      console.error(error)
    }
  }

  // 댓글 추가 기능
  const submitData = async (e: any) => {
    try {
      console.log('dadadaddaba', e)
      const postId = 1
      const password = e.password
      const name = e.name
      const content = e.content
      const body = { name, content, postId, password }
      console.log('dadadaddaba', body)

      await axios
        .post(`http://localhost:3000/api/commentAdd`, JSON.stringify(body), {
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
    } catch (error) {
      setError('실패하였습니다.')
      console.error(error)
    }
  }

  // 삭제 기능
  const dataDelete = async (e: any) => {
    try {
      console.log('gkgkkgkg', e)

      const id = e.id
      const name = e.deleteName
      const password = e.deletePassword

      await axios
        .delete(`http://localhost:3000/api/commentDelete`, {
          data: {
            id,
            name,
            password,
          },
        })
        .then((res) => {
          if (res.data === '사용자가 아닙니다.') {
            setDeleteError(res.data)
          } else {
            setDeleteError('')
            setComments(res.data)
          }
        })
    } catch (error) {
      alert('흑흑...왜 안되지...?')
      console.error(error)
    }
  }

  return (
    <div className={styles.comments}>
      <div>
        <h1>My Comment</h1>
        {/* 사용자 등록 */}
        <div>
          <Create />
        </div>

        <br />
        {/* 작성 부분 */}
        <div className={styles.comments_input}>
          <h1>comment</h1>
          <Comment submitData={submitData} />
          <div>&emsp;{error}</div>
        </div>

        {/* comments 목록 부분 */}
        <main>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comments_print}>
              {/* 사용자 명 */}
              <div className={styles.comments_print_user}>
                name = {comment.Users.name} postId = {comment.postId}
              </div>
              {/* 작성 날짜 */}
              <div className={styles.comments_print_date}>
                {comment.createdAt}
              </div>
              {/* 댓글 내용 */}
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
              <details>
                <summary>삭제</summary>
                <Delete id={comment.id} dataDelete={dataDelete} />
                <div>{deleteError}</div>
              </details>

              {/* 대댓글 버튼 */}
              <Commenting id={comment.id} />
              <br />
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/commentPrint')
  const comments = await res.data

  return {
    props: { comments },
  }
}

export default Blog
