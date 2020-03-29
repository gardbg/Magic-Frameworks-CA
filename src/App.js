import React, { useState } from 'react';

import NavBar from './components/navbar';
import Login from './pages/Login';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

export default function App(props) {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const updateLogin = () => {
    setisLoggedIn(true);
  }

  const logOut = () => {
    localStorage.clear();
    setisLoggedIn(false);
  }

  return (localStorage.getItem('username') ==='gard' && localStorage.getItem('password') === '123456' && isLoggedIn) ?
   (
    <div className="container-fluid">
      <NavBar />
      <button type="button" className="btn btn-dark btn-logOut" onClick={logOut}>Log out</button>
      <div className="container">
        {props.children}
      </div>
      <Footer />
    </div>
  ):
  (
    <Login updateLoginStatus={updateLogin} />
  )
}