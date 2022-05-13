import logo from '../img/logo.png';

let Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
    </header>
  )
}

export default Header