import {NavLink} from 'react-router-dom';
import classes from './Aside.module.css';


let Aside = () => {
  let activeClassName = classes.active;
  return (
    <aside className={classes.aside}>
      <NavLink to="/" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>
        <i class="fa-solid fa-desktop"></i>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>
        <i class="fa-solid fa-user"></i>
      </NavLink>
      <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>
        <i class="fa-solid fa-comment"></i>
      </NavLink>
      <NavLink to="/likes" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>
        <i class="fa-solid fa-heart"></i>
      </NavLink>
    </aside>
  )
}

export default Aside