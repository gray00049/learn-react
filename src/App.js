import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <Profile />
    </div>
  );
}

export default App;
