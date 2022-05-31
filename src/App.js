import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="wrapper">
      <Header />
      <Aside />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Profile />}/>
          <Route path='/dialogs' element={<Dialogs />}/>
        </Routes>
      </div>
    </div>
  </Router>
);


export default App;
