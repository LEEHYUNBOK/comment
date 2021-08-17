import { useState } from 'react'
import axios from 'axios'
import Create from './create'
import Commenting from './commenting'

const Blog = (props) => {
  const Like = async (e: any) => {
    try {
      console.log('e', e)

      const id = e
      await axios
        .post('http://localhost:3000/api/like', JSON.stringify(id), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => console.log('res', res.data))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div className="page">
        <h1>My Blog</h1>
        <div>
          <Create />
        </div>

        <br />

        <div>
          <Commenting />
        </div>

        <main>
          {props.comments.map((comment) => (
            <div key={comment.id} className="post">
              <div>id = {comment.id}</div>
              <div>name = {comment.user.name}</div>
              <div className="content">comments = {comment.content}</div>
              <button
                name="Like"
                // onClick={Like(comment.id)}
                onClick={() => Like({ id: comment.id })}
              >
                Like {comment.like}
              </button>
              <br />
              <br />
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/users')
  const comments = await res.data
  console.log('왜 리셋임?')

  return {
    props: { comments },
  }
}

export default Blog
