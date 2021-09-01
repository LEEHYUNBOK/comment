import styles from './Home.module.css'

const CommentContent = (props: any) => {
  const comment = props.comment
  return (
    <div>
      <div className={styles.comments_print_user}>
        name = {comment.commentUsers.name} postId = {comment.postId}
      </div>
      {/* 작성 날짜 */}
      <div className={styles.comments_print_date}>{comment.createdAt}</div>
      {/* 댓글 내용 */}
      <div
        dangerouslySetInnerHTML={{ __html: comment.content }}
        className={styles.comments_print_content}
      >
        {/* {comment.content} */}
      </div>
    </div>
  )
}

export default CommentContent
