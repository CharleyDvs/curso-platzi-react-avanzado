import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <Layout title="Tus favoritos" subtitle="Aquí puedes ver tus favoritos">
    <FavsWithQuery />
  </Layout>
)
