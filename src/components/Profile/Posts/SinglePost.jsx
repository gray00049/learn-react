import classes from './Post.module.css';
import userLogo from '../../../img/user_logo.jpg';

let SinglePost = (props) => {
  return (
    <div className={ `${classes.post} block` }>
      <div className={classes.userInfo}>
        <img src={userLogo} alt="" className={classes.photo} />
        <p className={classes.name}>
          Rob Sobers
          <span className={classes.username}>
            @rsobers
          </span>
        </p>
      </div>
      <p className={classes.postText}>
        {props.message}
      </p>
    </div>
  )
}

export default SinglePost