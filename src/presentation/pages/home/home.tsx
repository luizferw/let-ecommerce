import { SearchBar, FilterAside, FilterHeader, Product } from '@/presentation/pages/home/components'
import { Nav } from "@/presentation/components"
import './home-styles.scss'
import { useSelector } from 'react-redux'
import { ProductType, State } from '@/data/models'
import { useEffect, useState } from 'react'

const Home: React.FC = () => {
  const { products } = useSelector((state: State) => state.products)
  const [filterSearch, setFilterSearch] = useState('')
  const [filterDate, setFilterDate] = useState({firstDate: '', secondDate: ''})
  const [filterPrice, setFilterPrice] = useState({firstPrice: '', secondPrice: ''})
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([])
  const [sortedProducts, setSortedProducts] = useState<ProductType[]>([])
  const [sortBy, setSortBy] = useState({lowest: false, highest: false, latest: false, older: false})

  useEffect(() => {
    let array: ProductType[] = []
    if (sortBy.lowest) { array = (filteredProducts.slice().sort((a, b) => a.price - b.price)) }
    if (sortBy.highest) { array = (filteredProducts.slice().sort((a, b) => b.price - a.price)) }
    if (sortBy.latest) { array = (filteredProducts.slice().sort((a, b) => b.post_date.getTime() - a.post_date.getTime())) }
    if (sortBy.older) { array = (filteredProducts.slice().sort((a, b) => a.post_date.getTime() - b.post_date.getTime() )) }

    setSortedProducts(array)
  }, [sortBy, filteredProducts])

  useEffect(() => {
    const array: ProductType[] = []

    for (let i = 0; i < products.length; i++) {
      const conditionSearch = products[i].title.toLowerCase().includes(filterSearch.toLowerCase())

      if (conditionSearch) {
        array.push(products[i])
      } 
    }
    setFilteredProducts(array)
  }, [filterSearch])

  useEffect(() => {
    if (filterDate.firstDate.length !== 0 && filterDate.secondDate.length !== 0) {
      const array: ProductType[] = []
      for (let i = 0; i < products.length; i++) {
        const conditionDate = products[i].post_date.getTime() >= new Date(filterDate.firstDate).getTime() && products[i].post_date.getTime() <= new Date(filterDate.secondDate).getTime()
  
        if (conditionDate) {
          array.push(products[i])
        } 
      }

      setFilteredProducts(array)
    } 
    return
  }, [filterDate])

  useEffect(() => {
    const array: ProductType[] = []

    for (let i = 0; i < products.length; i++) {
      const conditionPrice = products[i].price >= Number(filterPrice.firstPrice) && products[i].price <= Number(filterPrice.secondPrice)

      if (conditionPrice) {
        array.push(products[i])
      } 
    }
    setFilteredProducts(array)
  }, [filterPrice])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  return (
    <>
      <Nav />
      <SearchBar search={[filterSearch, setFilterSearch]}/>
      <FilterHeader sort={[sortBy, setSortBy]} />
      <section className='products-filter-container container'>
        <FilterAside filter={[filterDate, setFilterDate, filterPrice, setFilterPrice]}/>
        <div className='products-container'>
          <h3>
            Products
          </h3>
          <div className='grid-container'>
            { 
            sortedProducts.length ?
            sortedProducts.map((product, index) => (
              <Product key={index} product={product} />
            )) :
            filteredProducts.map((product, index) => (
              <Product key={index} product={product} />
            ))
            } 
          </div>
        </div>
      </section>
    </>
  )
}

export default Home