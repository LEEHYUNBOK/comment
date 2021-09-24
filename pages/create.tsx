import { useState } from 'react'
import axios from 'axios'
import styles from './Home.module.css'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

const userCreateStyle = {
  position: 'absolute' as 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Create = () => {
  const [createUserName, setCreateUserName] = useState('')
  const [createUserPassword, setCreateUserPassword] = useState('')
  const [userError, setUserError] = useState('')

  const createUser = async (e: any) => {
    try {
      setCreateUserName('')
      setCreateUserPassword('')
      const createNewPassword = e.createUserPassword
      const createNewName = e.createUserName
      const body = { createNewName, createNewPassword }
      await axios
        .post(`/api/comments/users`, JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          alert(res.data), setUserError(res.data)
        })
    } catch (error) {
      setUserError('실패하였습니다.')
      alert('실패하였습니다.')
      console.error(error)
    }
  }

  const [open, setOpen] = useState(false)
  const userHandleOpen = () => setOpen(!open)

  return (
    <div>
      <button className={styles.comment_button} onClick={userHandleOpen}>
        회원가입
      </button>
      <Modal open={open} onClose={userHandleOpen}>
        <Box sx={userCreateStyle}>
          <input
            onChange={(e) => setCreateUserName(e.target.value)}
            placeholder="Name"
            type="text"
            value={createUserName}
          />
          <input
            onChange={(e) => setCreateUserPassword(e.target.value)}
            placeholder="password"
            type="password"
            value={createUserPassword}
          />

          <button
            disabled={!createUserName || !createUserPassword}
            name="commenting"
            value="Signup"
            onClick={() => createUser({ createUserName, createUserPassword })}
          >
            Signup
          </button>
        </Box>
      </Modal>
    </div>
  )
}

export default Create
