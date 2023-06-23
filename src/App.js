import Card from './components/blog/cards/Card';
import LoginPage from './components/login/LoginPage';
import SignUp from './components/register/Register';
import Home from './components/home/Home';
import { useSelector } from 'react-redux';
import CustomHeader from './components/header/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


function App() {

  let isLoggedIn = useSelector((state)=> state.loggedIn);

  if(!isLoggedIn &&  window.location.pathname != '/login' &&  window.location.pathname != '/sign-up'){
    window.location.href = '/login';
  }else if(isLoggedIn &&  window.location.pathname != '/home') {
    window.location.href = '/home';
  }
  return (
     <Router>
      <CustomHeader>
      </CustomHeader>
      <Routes>
       <Route exact path='/login' element={<LoginPage/>} ></Route>
       <Route exact path='/home' element={ <Home />}>/</Route>
       <Route exact path='/sign-up' element={ <SignUp />}>/</Route>
      </Routes>
      <div className="Cards-Container">
      {/* <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card> */}
    </div>
     </Router>
   
  );
}

export default App;
