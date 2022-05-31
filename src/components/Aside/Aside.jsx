import classes from './Aside.module.css';

let Aside = () => {
  return (
    <aside className={classes.aside}>
      <a href="/" className={classes.item}>
        <i class="fa-solid fa-desktop"></i>
      </a>
      <a href="/profile" className={classes.item}>
        <i class="fa-solid fa-user"></i>
      </a>
      <a href="/dialogs" className={classes.item}>
        <i class="fa-solid fa-comment"></i>
      </a>
      <a href="#" className={classes.item}>
        <i class="fa-solid fa-heart"></i>
      </a>
    </aside>
  )
}

export default Aside