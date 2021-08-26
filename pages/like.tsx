import styles from '../styles/Home.module.scss'

const Like = (props) => {
  const id = props.commentId
  const like = props.commentLike
  return (
    <div>
      <button
        name="Like"
        // onClick={Like(comment.id)}
        onClick={() => props.coommentlike({ commentLikeId: id })}
      >
        Like {like}
      </button>
    </div>
  )
}

export default Like
