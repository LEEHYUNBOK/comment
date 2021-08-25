import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'

const Comment = (props) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [content, setContent] = useState('')

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        type="text"
        value={name}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="text"
        value={password}
      />
      <br />
      <textarea
        className={styles.comment_input_area}
        id="textarea"
        onChange={(e) => setContent(e.target.value)}
        placeholder="content"
        value={content}
      />

      <button
        name="commenting"
        value="Signup"
        onClick={() => (
          props.submitData({ name, content, password }),
          setContent(''),
          setName(''),
          setPassword('')
        )}
      >
        Signup
      </button>
    </div>
  )
}

export default Comment
