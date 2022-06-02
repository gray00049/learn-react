import classes from './Dialogs.module.css';
import userLogo from '../../img/user_logo.jpg';

let Dialogs = (props) => (
  <div classNmae={classes.dialogsWrapper}>
    <div className={classes.dialogs}>
      
      <div className={classes.dialog}>
        <img className={classes.userLogo} src={userLogo} alt="user logo" />
        <p className={classes.userName}>
          Rob Sobers
        </p>
      </div>
      <div className={classes.dialog}>
        <img className={classes.userLogo} src={userLogo} alt="user logo" />
        <p className={classes.userName}>
          Rob Sobers
        </p>
      </div>
      <div className={classes.dialog}>
        <img className={classes.userLogo} src={userLogo} alt="user logo" />
        <p className={classes.userName}>
          Rob Sobers
        </p>
      </div>
      <div className={classes.dialog}>
        <img className={classes.userLogo} src={userLogo} alt="user logo" />
        <p className={classes.userName}>
          Rob Sobers
        </p>
      </div>
      <div className={classes.dialog}>
        <img className={classes.userLogo} src={userLogo} alt="user logo" />
        <p className={classes.userName}>
          Rob Sobers
        </p>
      </div>

    </div>
    <div className={classes.messages}>
      
    </div>
  </div>
)


export default Dialogs