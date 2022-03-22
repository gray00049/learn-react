import './Header.css';
import logo from '../../img/logo.png';

let Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
    </header>
  )
}

export default Header