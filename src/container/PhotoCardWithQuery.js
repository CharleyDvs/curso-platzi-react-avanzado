import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotocardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {({ loading, error, data = { photo: {} } }) => {
      if (loading) {
        return <h1>Loading...</h1>
      }
      if (error) {
        return <h1>Something went wrong...</h1>
      }
      const { photo } = data
      return <PhotoCard {...photo} />
    }}
  </Query>
)
