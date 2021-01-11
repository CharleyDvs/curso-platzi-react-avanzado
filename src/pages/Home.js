import React from 'react'
import { Layout } from '../components/Layout'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <Layout
      title="Tu app de mascotas"
      subtitle="Encuantra las mejores fotos de animales con Petgram"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
