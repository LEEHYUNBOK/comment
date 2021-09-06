import styles from './Home.module.css'
import React, { useState, useEffect } from 'react'
import SunEditor from './SunEditor'
// import sunstyles from './suneditor.module.css'

const CommentAdd = (props: any) => {
  const [commentAddName, setCommentAddName] = useState('')
  const [commentAddPassword, setCommentAddPassword] = useState('')
  const [commentAddContent, setCommentAddContent] = useState('')

  // 댓글이 제대로 등록 될때 실행(사실 props.error의 내용이 변한때마다 실행)
  useEffect(() => {
    if (props.error === '등록') {
      setCommentAddContent('')
      setCommentAddName('')
      setCommentAddPassword('')
    }
  }, [props.error]) //원격 test

  return (
    <div className={styles.comments_input}>
      <div>
        <input
          onChange={(e) => setCommentAddName(e.target.value)}
          placeholder="Name"
          type="text"
          value={commentAddName}
        />
        <input
          onChange={(e) => setCommentAddPassword(e.target.value)}
          placeholder="password"
          type="password"
          value={commentAddPassword}
        />
        <br />
        {/* <textarea
          className={styles.comment_input_area}
          id="textarea"
          onChange={(e) => setCommentAddContent(e.target.value)}
          placeholder="content"
          value={commentAddContent}
        /> */}
        <SunEditor
          setCommentAddContent={setCommentAddContent}
          commentAddContent={commentAddContent}
        ></SunEditor>

        <button
          // className={styles.comment_button}
          disabled={
            !commentAddContent || !commentAddPassword || !commentAddName
          }
          name="commenting"
          value="댓글 작성"
          onClick={() => {
            props.commentAdd({
              commentAddName,
              commentAddContent,
              commentAddPassword,
            })
          }}
        >
          댓글 작성
        </button>
        <span>{props.error}</span>
      </div>
    </div>
  )
}

export default CommentAdd
