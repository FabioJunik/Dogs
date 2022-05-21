import React, {  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { GlobalStyles } from './Styles/globalStyles';
import { UserStorage } from './UserContext';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <GlobalStyles/>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login/*" element={<Login/>}/>
          </Routes>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App