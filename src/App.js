import React from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import Logo from './components/Logo'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </>
)
