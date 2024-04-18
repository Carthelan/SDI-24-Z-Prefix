import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home'
import UserProfile from './UserProfile'
import Login from './Login'
import Inventory from './Inventory'
import Cookies from 'js-cookie'
import Header from './Header'

function App() {
  //const [cookies, setCookie] = useCookies('user', {username: {username}, loggedIn: ''})
  //
  //const logInHandler (username) => {
  //  setCookie
  //}

  return (
    <>
      <Router>
        <Header/>
          <div>
              <Routes>
                <Route path='/' element={<Home />}> </Route> 
                <Route path='/profile' element={<UserProfile />}> </Route> 
                <Route path='/login' element={<Login />}> </Route> 
                <Route path='/inventory' element={<Inventory />}> </Route> 
              </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
