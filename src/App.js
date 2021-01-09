import React from 'react'
import { GlobalStyle } from './styles/globalStyles'
import Logo from './components/Logo'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/Navbar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
