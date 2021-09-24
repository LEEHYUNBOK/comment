import styles from './Home.module.css'
import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import axios from 'axios'

import Box from '@mui/material/Box'
import Portal from '@mui/material/Portal'

const Delete = forwardRef((props: any, ref) => {
  const [commentDeleteName, setCommentDeleteName] = useState('')
  const [commentDeletePassword, setCommentDeletePassword] = useState('')
  const [deleteError, setDeleteError] = useState('')

  useImperativeHandle(ref, () => ({
    errorMassage(dataErrorMassage) {
      setDeleteError(dataErrorMassage)
    },
  }))

  const [deleteButton, setDeleteButton] = useState(false)
  const deleteContainer = useRef(null)

  const { commentDeleteId } = props

  const deletButtonClick = () => {
    setDeleteButton(!deleteButton)
  }

  return (
    <>
      <button
        type="button"
        onClick={deletButtonClick}
        className={styles.comment_button}
      >
        삭제
      </button>
      <Box ref={deleteContainer}>
        {deleteButton ? (
          <Portal container={deleteContainer.current}>
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
              <div>{deleteError}</div>
            </div>
          </Portal>
        ) : null}
      </Box>
    </>
  )
})

export default Delete
