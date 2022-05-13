import classes from './Profile.module.css';
import Posts from './Posts/Posts';

let Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={ `${classes.mainInfo} block` }>
        Main info for user
      </div>
      <Posts />
    </div>
  )
}

export default Profile