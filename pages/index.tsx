import { useState } from 'react'
import axios from 'axios'
import Create from './create'
import Commenting from './commenting'

const Blog = (props) => {
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
          {props.comments.map((comments) => (
            <div key={comments.id} className="post">
              <div>id = {comments.id}</div>
              <div>name = {comments.user.name}</div>
              <div className="content">comments = {comments.content}</div>
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
