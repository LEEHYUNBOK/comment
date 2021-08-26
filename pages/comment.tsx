import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'

const Comment = (props) => {
  const [commentAddName, setCommentAddName] = useState('')
  const [commentAddPassword, setCommentAddPassword] = useState('')
  const [commentAddContent, setCommentAddContent] = useState('')

  return (
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
      <textarea
        className={styles.comment_input_area}
        id="textarea"
        onChange={(e) => setCommentAddContent(e.target.value)}
        placeholder="content"
        value={commentAddContent}
      />

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
    </div>
  )
}

export default Comment
