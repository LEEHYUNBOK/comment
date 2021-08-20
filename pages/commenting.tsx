import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'

const Commenting = (props) => {
  const [incomments, setIncomments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [delname, setDelname] = useState('')
  const [delemail, setDelemail] = useState('')
  const [delerror, setDelerror] = useState('')
  const { id } = props

  // 대댓글 좋아요 기능
  const Like = async (e: any) => {
    try {
      const id = e

      await axios
        .put('http://localhost:3000/api/inlike', JSON.stringify(id), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => setIncomments(res.data))
    } catch (error) {
      console.error(error)
    }
  }

  //대댓글 출력 기능
  const inget = async (props: any) => {
    const id = props
    const ty = 'in'
    const res = await axios
      .get('http://localhost:3000/api/incomment', {
        data: {
          ty: ty,
          id: id,
        },
      })
      .then((res) => setIncomments(res.data))
  }

  // 대댓글 추가 기능
  const submitData = async (e: React.SyntheticEvent) => {
    try {
      setName('')
      setContent('')
      const body = { name, content, id }

      await axios
        .post(`http://localhost:3000/api/incoinput`, JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          if (res.data === '사용자가 아닙니다.') {
            setError(res.data)
          } else {
            setIncomments(res.data)
          }
        })
      console.log('넘어가요~comments')
    } catch (error) {
      setError('실패하였습니다.')
      console.error(error)
    }
  }

  // 삭제 기능
  const dataDelete = async (e: any) => {
    try {
      setDelname('')
      setDelemail('')
      const id = e.id
      const name = e.delname
      const email = e.delemail

      await axios
        .delete(`http://localhost:3000/api/commentdelete`, {
          data: {
            id,
            name: name,
            email: email,
            ty: 'in',
          },
        })
        .then((res) => {
          if (res.data === '사용자가 아닙니다.') {
            setDelerror(res.data)
          } else {
            setDelerror('')
            setIncomments(res.data)
          }
        })
      console.log('넘어가요~create')
    } catch (error) {
      alert('흑흑...왜 안되지...?')
      console.error(error)
    }
  }

  return (
    <div className={styles.inComments_print}>
      <details>
        <summary onClick={() => inget(id)}>더보기</summary>
        <div>
          {incomments.map((incomment) => (
            <div key={incomment.id} className={styles.comments_print}>
              <div className={styles.comments_print_user}>
                cname = {incomment.user.name} {incomment.id}
              </div>
              <div className={styles.comments_print_date}>
                {incomment.createdAt}
              </div>
              <div className={styles.comments_print_content}>
                {incomment.content}
              </div>
              <button
                name="Like"
                // onClick={Like(comment.id)}
                onClick={() => Like({ id: incomment.id })}
              >
                Like {incomment.like}
              </button>

              {/* 삭제 버튼 */}
              <div>
                <details>
                  <summary>삭제</summary>
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
                    onClick={() =>
                      dataDelete({
                        id: incomment.id,
                        delname,
                        delemail,
                      })
                    }
                  >
                    Signup
                  </button>
                  <div>&emsp;{delerror}</div>
                </details>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.comments_input}>
          <input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
          <br />
          <textarea
            className={styles.comment_input_area}
            id="textarea"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Email address"
            value={content}
          ></textarea>
          <button
            name="commenting"
            disabled={!name || !content}
            value="Signup"
            onClick={submitData}
          >
            Signup
          </button>
          <div>{error}</div>
        </div>
      </details>
    </div>
  )
}
export default Commenting
