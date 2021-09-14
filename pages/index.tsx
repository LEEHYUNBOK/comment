import styles from './Home.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Create from './create'
import InnerComment from './innerComment'
import Delete from './delete'
import CommentAdd from './commentAdd'
import Like from './like'
import CommentContent from './commentcontent'

const Comments = (props: any) => {
  const [comments, setComments] = useState([])
  const [error, setError] = useState('')
  const [deleteError, setDeleteError] = useState('')
  const postId = '1'
  const commentURL = '/api/comments/comment/'

  // 댓글 출력 기능
  const commentPrint = async () => {
    try {
      const res = await axios.get(commentURL + 'commentPrint', {
        params: {
          postId: postId,
        },
      })
      setComments(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    commentPrint()
  }, [])

  // 좋아요 기능
  const commentlike = async (e: any) => {
    try {
      const { commentLikeId, checked } = e
      console.log('RRRRRR', checked)

      const body = { commentLikeId, postId, checked }
      await axios
        .put(commentURL + 'commentLike', JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => commentPrint())
    } catch (error) {
      console.error(error)
    }
  }

  // 댓글 추가 기능
  const commentAdd = async (e: any) => {
    try {
      const addPassword = e.commentAddPassword
      const addName = e.commentAddName
      const addContent = e.commentAddContent

      const body = { addName, addContent, postId, addPassword }

      await axios
        .post(commentURL + `commentAdd`, JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          if (typeof res.data === 'string') {
            setError(res.data)
          } else {
            setError('등록')
            setError('')
            commentPrint()
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
        .delete(commentURL + `commentDelete`, {
          data: {
            deleteId,
            deleteName,
            deletePassword,
            postId,
          },
        })
        .then((res) => {
          if (typeof res.data === 'string') {
            setDeleteError(res.data)
          } else {
            setDeleteError('')
            commentPrint()
          }
        })
    } catch (error) {
      alert('실패하였습니다.')
      console.error(error)
    }
  }

  return (
    <div>
      <div className={styles.comments}>
        <h1>My Comment</h1>

        {/* 사용자 등록 */}
        <Create />
        <br />

        {/* 작성 부분 */}
        <CommentAdd commentAdd={commentAdd} error={error} />

        {/* comments 목록 부분 */}
        {comments.map((comment: any) => (
          <div key={comment.id} className={styles.comments_print}>
            {/* 댓글 내용 */}
            <CommentContent comment={comment} />

            {/* 좋아요 버튼 */}
            <Like
              commentlike={commentlike}
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
            <InnerComment commentId={comment.id} />
            <br />
          </div>
        ))}
      </div>
      {/* <SunEditor /> */}
    </div>
  )
}

export default Comments
