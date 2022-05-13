import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
