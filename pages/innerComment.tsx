import styles from './Home.module.css'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Delete from './delete'
import CommentAdd from './commentAdd'
import Like from './like'
import CommentContent from './commentcontent'

import Box from '@mui/material/Box'
import Portal from '@mui/material/Portal'

const InnerComment = (props: any) => {
  const [innerComments, setInnerComments] = useState([])
  const [error, setError] = useState('')
  const [deleteError, setDeleteError] = useState('')

  // dropdown 박스용
  const [innerCommentButton, setInnerCommentButton] = useState(false)
  const innerCommentContainer = useRef(null)

  const { commentId } = props

  const innerCommentURL = '/api/comments/innerComment/'

  const innerCommmentButtonClick = () => {
    setInnerCommentButton(!innerCommentButton)
  }

  //대댓글 출력 기능
  const innerCommentPrint = async () => {
    const res = await axios.get(innerCommentURL + 'innerCommentPrint', {
      params: {
        id: commentId,
      },
    })
    setInnerComments(res.data)
  }

  useEffect(() => {
    innerCommentPrint()
  }, [])

  // 대댓글 좋아요 기능
  const innerCommentlike = async (e: any) => {
    try {
      const { commentLikeId, checked } = e
      console.log('$$$', e)
      const body = { commentLikeId, checked }
      await axios
        .put(innerCommentURL + 'innerCommentLike', JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => innerCommentPrint())
    } catch (error) {
      console.error(error)
    }
  }

  // 대댓글 추가 기능
  const innerCommentAdd = async (e: any) => {
    try {
      const addName = e.commentAddName
      const addContent = e.commentAddContent
      const addPassword = e.commentAddPassword
      const userIp = e.userIp

      const body = { addName, addContent, commentId, addPassword, userIp }

      await axios
        .post(innerCommentURL + `innerCommentAdd`, JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          if (typeof res.data === 'string') {
            setError(res.data)
          } else {
            setError('등록')
            setError('')
            innerCommentPrint()
          }
        })
    } catch (error) {
      setError('실패하였습니다.')
      console.error(error)
    }
  }

  // 삭제 기능
  const innerCommentDelete = async (e: any) => {
    try {
      const commentId = props.id

      const id = e.commentDeleteId
      const deleteName = e.commentDeleteName
      const deletePassword = e.commentDeletePassword

      await axios
        .delete(innerCommentURL + `innerCommentDelete`, {
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
            innerCommentPrint()
          }
        })
    } catch (error) {
      alert('실패하였습니다.')
      console.error(error)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={innerCommmentButtonClick}
        className={styles.comment_button}
      >
        더보기
      </button>
      <Box ref={innerCommentContainer}>
        {innerCommentButton ? (
          <Portal container={innerCommentContainer.current}>
            <div className={styles.innerComments_print}>
              {innerComments.map((innerComment: any) => (
                <div key={innerComment.id} className={styles.comments_print}>
                  {/* 댓글 내용 */}
                  <CommentContent comment={innerComment} />

                  {/* 좋아요 버튼 */}
                  <Like
                    commentlike={innerCommentlike}
                    commentId={innerComment.id}
                    commentLike={innerComment.like}
                  />

                  {/* 삭제 버튼 */}
                  <Delete
                    commentDeleteId={innerComment.id}
                    commentDelete={innerCommentDelete}
                    deleteError={deleteError}
                  />
                </div>
              ))}
              {/* 작성 부분 */}
              <CommentAdd commentAdd={innerCommentAdd} error={error} />
            </div>
          </Portal>
        ) : null}
      </Box>
    </>
  )
}
export default InnerComment
