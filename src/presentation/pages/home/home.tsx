import React from "react"
import { SearchBar, FilterBar, Nav, Product } from '@/presentation/pages/home/components'
import './home-styles.scss'

const Home = () => {
  return (
    <>
      <Nav />
      <SearchBar />
      <FilterBar />
    </>
  )
}

export default Home