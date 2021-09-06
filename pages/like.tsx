import styles from './Home.module.css'

const Like = (props: any) => {
  const id = props.commentId
  const like = props.commentLike
  return (
    <div>
      <button
        name="Like"
        // onClick={Like(comment.id)}
        onClick={() => props.commentlike({ commentLikeId: id })}
      >
        Like {like}
      </button>
    </div>
  )
}

export default Like
