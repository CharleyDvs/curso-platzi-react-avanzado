import React from 'react'
import { PhotocardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotocardWithQuery id={detailId} />
    </Layout>
  )
}
