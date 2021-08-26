import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'
import Delete from './delete'
import Comment from './comment'

const Commenting = (props) => {
  const [incomments, setIncomments] = useState([])
  const [error, setError] = useState('')
  const [deleteError, setDeleteError] = useState('')
  const { id } = props

  // 대댓글 좋아요 기능
  const Like = async (e: any) => {
    try {
      const id = e

      await axios
        .put('http://localhost:3000/api/inCommentLike', JSON.stringify(id), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => setIncomments(res.data))
    } catch (error) {
      console.error(error)
    }
  }

  //대댓글 출력 기능
  const inget = async (props: any) => {
    const id = props
    const res = await axios
      .get('http://localhost:3000/api/inComment', {
        params: {
          id: id,
        },
      })
      .then((res) => setIncomments(res.data))
  }

  // 대댓글 추가 기능
  const submitData = async (e: any) => {
    try {
      const name = e.name
      const content = e.content
      const password = e.password
      const body = { name, content, id, password }

      await axios
        .post(
          `http://localhost:3000/api/inCommentInput`,
          JSON.stringify(body),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then((res) => {
          if (typeof res.data === 'string') {
            setError(res.data)
          } else {
            setError('')
            setIncomments(res.data)
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
      const commentId = props.id
      console.log('lllllll', commentId)

      const id = e.id
      const name = e.deleteName
      const password = e.deletePassword

      await axios
        .delete(`http://localhost:3000/api/inCommentDelete`, {
          data: {
            commentId,
            id,
            name,
            password,
          },
        })
        .then((res) => {
          if (typeof res.data === 'string') {
            setDeleteError(res.data)
          } else {
            setDeleteError('')
            setIncomments(res.data)
          }
        })
    } catch (error) {
      alert('흑흑...왜 안되지...?')
      console.error(error)
    }
  }

  return (
    <div className={styles.inComments_print}>
      <details>
        <summary onClick={() => inget(id)}>더보기</summary>
        <div>
          {incomments.map((incomment) => (
            <div key={incomment.id} className={styles.comments_print}>
              {/* 사용자 명 */}
              <div className={styles.comments_print_user}>
                cname = {incomment.Users.name}
              </div>
              {/* 작성 날짜 */}
              <div className={styles.comments_print_date}>
                {incomment.createdAt}
              </div>
              {/* 댓글 내용 */}
              <div className={styles.comments_print_content}>
                {incomment.content}
              </div>
              {/* 좋아요 버튼 */}
              <button
                name="Like"
                // onClick={Like(comment.id)}
                onClick={() => Like({ id: incomment.id })}
              >
                Like {incomment.like}
              </button>

              {/* 삭제 버튼 */}
              <details>
                <summary>삭제</summary>
                <Delete id={incomment.id} dataDelete={dataDelete} />
                <div>{deleteError}</div>
              </details>
            </div>
          ))}
        </div>

        {/* 작성 부분 */}
        <div className={styles.comments_input}>
          <Comment submitData={submitData} />
          <div>{error}</div>
        </div>
      </details>
    </div>
  )
}
export default Commenting
