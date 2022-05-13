import classes from './Post.module.css';
// import SinglePost from './SinglePost'

let Posts = () => {
  return (
    <div className={classes.postWrapper}>
      <div className={`${classes.postSidebar} block`}>
        Post`s sidebar
      </div>
      <div className={classes.postList}>
        <p className={classes.title}>
          Create New Post
        </p>
        <div className={`${classes.createPost} block`}>
          <textarea className={classes.textarea} placeholder="Write post here...">
          </textarea>
          <button className={classes.sendBtn}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Posts