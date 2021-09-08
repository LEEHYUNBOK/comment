import styles from './Home.module.css'
import { useState } from 'react'
import axios from 'axios'

const Delete = (props: any) => {
  const [commentDeleteName, setCommentDeleteName] = useState('')
  const [commentDeletePassword, setCommentDeletePassword] = useState('')
  const { commentDeleteId } = props

  return (
    <details className={styles.comment_dropbar}>
      <summary className={styles.comment_dropbar_summary}>삭제</summary>
      <div>
        <input
          onChange={(e) => setCommentDeleteName(e.target.value)}
          placeholder="Name"
          type="text"
          value={commentDeleteName}
        />
        <input
          onChange={(e) => setCommentDeletePassword(e.target.value)}
          placeholder="password"
          type="password"
          value={commentDeletePassword}
        />
        <button
          name="commenting"
          disabled={!commentDeleteName || !commentDeletePassword}
          value="Signup"
          onClick={() => (
            props.commentDelete({
              commentDeleteId,
              commentDeleteName,
              commentDeletePassword,
            }),
            setCommentDeleteName(''),
            setCommentDeletePassword('')
          )}
        >
          Signup
        </button>
        {/* &emsp; */}
        <div>{props.deleteError}</div>
      </div>
    </details>
  )
}

export default Delete
