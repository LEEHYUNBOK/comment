import { useState } from 'react'
import axios from 'axios'

const Delete = (props) => {
  const [delname, setDelname] = useState('')
  const [delemail, setDelemail] = useState('')
  const { commentId } = props

  return (
    <div>
      <input
        autoFocus
        onChange={(e) => setDelname(e.target.value)}
        placeholder="Name"
        type="text"
        value={delname}
      />
      <input
        autoFocus
        onChange={(e) => setDelemail(e.target.value)}
        placeholder="email"
        type="text"
        value={delemail}
      />
      <button
        name="commenting"
        disabled={!delname || !delemail}
        value="Signup"
        onClick={() => (
          props.dataDelete({
            id: commentId,
            delname,
            delemail,
          }),
          setDelemail(''),
          setDelname('')
        )}
      >
        Signup
      </button>
    </div>
  )
}

export default Delete
