import classes from './Post.module.css';
import SinglePost from './SinglePost'

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

        <div className={classes.postList}>
          <SinglePost message=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu" />
          <SinglePost message="Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu" />
        </div>
      </div>

    </div>
  )
}

export default Posts