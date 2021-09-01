import styles from './Home.module.css'
import React, { useState } from 'react'
import SunEditor from './SunEditor'

const CommentAdd = (props: any) => {
  const [commentAddName, setCommentAddName] = useState('')
  const [commentAddPassword, setCommentAddPassword] = useState('')
  const [commentAddContent, setCommentAddContent] = useState('')
  console.log('commentAddContent', commentAddContent)

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
        <SunEditor height="100px" setCommentAddContent={setCommentAddContent} />

        <button
          name="commenting"
          value="Signup"
          onClick={() => (
            props.commentAdd({
              commentAddName,
              commentAddContent,
              commentAddPassword,
            }),
            setCommentAddContent(''),
            setCommentAddName(''),
            setCommentAddPassword('')
          )}
        >
          Signup
        </button>
        <span>{props.error}</span>
      </div>
    </div>
  )
}

export default CommentAdd
