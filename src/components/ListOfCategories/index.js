import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData() {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setLoading(true)
    try {
      window
        .fetch('https://petgram-server-cjy-7z0oguq47.vercel.app/categories')
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .then(setLoading(false))
    } catch (err) {
      console.log(err)
    }
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  if (loading) {
    return 'Cargando...'
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
