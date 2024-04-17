import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home'
import UserProfile from './UserProfile'
import Login from './Login'
import Inventory from './Inventory'
import {CookiesProvider, useCookies} from 'react-cookie'

function App() {
  return (
    <>
    <Router>
      <div>
          <Routes>
            <Route path='/' element={<Home />}> </Route> 
            {/* <Route path='/profile' element={<UserProfile />}> </Route>  */}
            {/* <Route path='/login' element={<Login />}> </Route>  */}
            <Route path='/inventory' element={<Inventory />}> </Route> 
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
