import { useState } from 'react'
import styles from './Home.module.css'

const Like = (props: any) => {
  const [checked, setChecked] = useState(false)
  const id = props.commentId
  const like = props.commentLike

  return (
    <div>
      <input
        type="checkbox"
        name="Like"
        // onClick={Like(comment.id)}
        checked={checked}
        onChange={() => {
          if (checked !== true) {
            setChecked(true)
            props.commentlike({ commentLikeId: id, checked: true })
          } else {
            setChecked(false)
            props.commentlike({ commentLikeId: id, checked: false })
          }
        }}
      />
      Like {like}
    </div>
  )
}

export default Like
