import './App.css';
import Profile from './content/Profile';
import Header from './header/Header';
import Nav from './nav/Nav';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container row">
        <Nav />
        <Profile />
      </div>
    </div>
  );
}

export default App;
