import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'
import Delete from './delete'
import Comment from './comment'
import Like from './like'
import CommentContent from './commentcontent'

const InComment = (props) => {
  const [incomments, setIncomments] = useState([])
  const [error, setError] = useState('')
  const [deleteError, setDeleteError] = useState('')
  const { id } = props

  // 대댓글 좋아요 기능
  const coommentlike = async (e: any) => {
    try {
      const commentLikeId = e
      await axios
        .put(
          'http://localhost:3000/api/incomment/inCommentLike',
          JSON.stringify(commentLikeId),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then((res) => setIncomments(res.data))
    } catch (error) {
      console.error(error)
    }
  }

  //대댓글 출력 기능
  const inCommentPrint = async (props: any) => {
    const id = props
    const res = await axios
      .get('http://localhost:3000/api/incomment/inCommentPrint', {
        params: {
          id: id,
        },
      })
      .then((res) => setIncomments(res.data))
  }

  // 대댓글 추가 기능
  const commentAdd = async (e: any) => {
    try {
      const addName = e.commentAddName
      const addContent = e.commentAddContent
      const addPassword = e.commentAddPassword
      const body = { addName, addContent, id, addPassword }

      await axios
        .post(
          `http://localhost:3000/api/incomment/inCommentInput`,
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
  const inCommentDelete = async (e: any) => {
    try {
      const commentId = props.id
      console.log('lllllll', e)

      const id = e.commentDeleteId
      const deleteName = e.commentDeleteName
      const deletePassword = e.commentDeletePassword

      await axios
        .delete(`http://localhost:3000/api/incomment/inCommentDelete`, {
          data: {
            commentId,
            id: id,
            name: deleteName,
            password: deletePassword,
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
        <summary onClick={() => inCommentPrint(id)}>더보기</summary>
        <div>
          {incomments.map((incomment) => (
            <div key={incomment.id} className={styles.comments_print}>
              {/* 댓글 내용 */}

              {/* 사용자 명 */}
              <div className={styles.comments_print_user}>
                cname = {incomment.commentUsers.name}
              </div>

              {/* 작성 날짜 */}
              <div className={styles.comments_print_date}>
                {incomment.createdAt}
              </div>

              {/* 댓글 내용 */}
              <div className={styles.comments_print_content}>
                {incomment.content}
              </div>
              {/* <CommentContent comment={incomment} /> */}

              {/* 좋아요 버튼 */}
              <Like
                coommentlike={coommentlike}
                commentId={incomment.id}
                commentLike={incomment.like}
              />

              {/* 삭제 버튼 */}
              <Delete
                commentDeleteId={incomment.id}
                commentDelete={inCommentDelete}
                deleteError={deleteError}
              />
            </div>
          ))}
        </div>

        {/* 작성 부분 */}
        <Comment commentAdd={commentAdd} error={error} />
      </details>
    </div>
  )
}
export default InComment
