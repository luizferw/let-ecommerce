import { SearchBar, FilterAside, ProductsContainer, FilterHeader } from '@/presentation/pages/home/components'
import { Nav } from "@/presentation/components"
import './home-styles.scss'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <SearchBar />
      <FilterHeader />
      <section className='products-filter-container container'>
        <FilterAside />
        <ProductsContainer />
      </section>

    </>
  )
}

export default Home