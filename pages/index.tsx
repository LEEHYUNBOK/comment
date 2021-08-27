import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'
import Create from './create'
import InComment from './inComment'
import { symbolName } from 'typescript'
import Delete from './delete'
import Comment from './comment'
import Like from './like'
import CommentContent from './commentcontent'
import CommentPrint from './api/comment/commentPrint'

const Comments = (props) => {
  const [comments, setComments] = useState(props.comments)
  const [error, setError] = useState('')
  const [deleteError, setDeleteError] = useState('')

  // 좋아요 기능
  const coommentlike = async (e: any) => {
    try {
      const commentLikeId = e
      await axios
        .put(
          'http://localhost:3000/api/comment/commentLike',
          JSON.stringify(commentLikeId),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then((res) => setComments(res.data))
    } catch (error) {
      console.error(error)
    }
  }

  // 댓글 추가 기능
  const commentAdd = async (e: any) => {
    try {
      const postId = 1
      const addPassword = e.commentAddPassword
      const addName = e.commentAddName
      const addContent = e.commentAddContent

      const body = { addName, addContent, postId, addPassword }

      await axios
        .post(
          `http://localhost:3000/api/comment/commentAdd`,
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
            setComments(res.data)
          }
        })
    } catch (error) {
      setError('실패하였습니다.')
      console.error(error)
    }
  }

  // 삭제 기능
  const commentDelete = async (e: any) => {
    try {
      const deleteId = e.commentDeleteId
      const deleteName = e.commentDeleteName
      const deletePassword = e.commentDeletePassword

      await axios
        .delete(`http://localhost:3000/api/comment/commentDelete`, {
          data: {
            deleteId,
            deleteName,
            deletePassword,
          },
        })
        .then((res) => {
          if (typeof res.data === 'string') {
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
      <h1>My Comment</h1>
      {/* 사용자 등록 */}
      <Create />

      <br />
      {/* 작성 부분 */}
      <Comment commentAdd={commentAdd} error={error} />

      {/* comments 목록 부분 */}
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comments_print}>
          {/* 댓글 내용 */}
          <CommentContent comment={comment} />

          {/* 좋아요 버튼 */}
          <Like
            coommentlike={coommentlike}
            commentId={comment.id}
            commentLike={comment.like}
          />

          {/* 삭제 버튼 */}
          <Delete
            commentDeleteId={comment.id}
            commentDelete={commentDelete}
            deleteError={deleteError}
          />

          {/* 대댓글 버튼 */}
          <InComment id={comment.id} />
          <br />
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/comment/commentPrint')
  const comments = await res.data

  return {
    props: { comments },
  }
}

export default Comments
