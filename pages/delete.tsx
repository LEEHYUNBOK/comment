import { useState } from 'react'
import axios from 'axios'

const Delete = (props) => {
  const [deleteName, setDeleteName] = useState('')
  const [deletePassword, setDeletePassword] = useState('')
  const { id } = props

  return (
    <div>
      <input
        onChange={(e) => setDeleteName(e.target.value)}
        placeholder="Name"
        type="text"
        value={deleteName}
      />
      <input
        onChange={(e) => setDeletePassword(e.target.value)}
        placeholder="password"
        type="text"
        value={deletePassword}
      />
      <button
        name="commenting"
        disabled={!deleteName || !deletePassword}
        value="Signup"
        onClick={() => (
          props.dataDelete({
            id,
            deleteName,
            deletePassword,
          }),
          setDeleteName(''),
          setDeletePassword('')
        )}
      >
        Signup
      </button>
    </div>
  )
}

export default Delete
