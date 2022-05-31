import classes from './Header.module.css';
import logo from '../../img/logo.png';

let Header = () => {
  return (
    <header className={classes.header}>
      <a href="/" className={classes.brand}>
        <img src={logo} alt="" />
        <p>VIKINGER</p>
      </a>
      <ul className={classes.navbar}>
        <li className={classes.navbarItem}>
          <a href="#">
            Home
          </a>
        </li>
        <li className={classes.navbarItem}>
          <a href="#">
            Features
          </a>
        </li>
        <li className={classes.navbarItem}>
          <a href="#">
            More info
          </a>
        </li>
      </ul>
      <a href="#" className={classes.logout}>Log out</a>
    </header>
  )
}

export default Header