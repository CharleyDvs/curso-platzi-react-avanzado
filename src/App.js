import React, { useContext } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import Logo from './components/Logo'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/Navbar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Redirect, Router } from '@reach/router'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </>
  )
}
