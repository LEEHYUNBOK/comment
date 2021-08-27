import styles from '../styles/Home.module.scss'

const CommentContent = (props) => {
  const comment = props.comment

  return (
    <div>
      <div className={styles.comments_print_user}>
        name = {comment.commentUsers.name} postId = {comment.postId}
      </div>
      {/* 작성 날짜 */}
      <div className={styles.comments_print_date}> {comment.createdAt} </div>
      {/* 댓글 내용 */}
      <div className={styles.comments_print_content}>{comment.content}</div>
    </div>
  )
}

export default CommentContent
