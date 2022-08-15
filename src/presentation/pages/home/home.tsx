import { SearchBar, FilterHeader, Product, FilterOption } from '@/presentation/pages/home/components'
import { Nav } from "@/presentation/components"
import './home-styles.scss'
import { useSelector } from 'react-redux'
import { State } from '@/data/models'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterActionCreator } from '@/state/actions'

const Home: React.FC = () => {
  const { filteredProducts } = useSelector((state: State) => state.products)
  const dispatch = useDispatch()
  const { filterByDate, filterByPrice } = bindActionCreators(filterActionCreator, dispatch)

  return (
    <>
      <Nav />
      <SearchBar />
      <FilterHeader />
      <section className='products-filter-container container'>
        <aside className='filter-aside'>
          <h3>Filter</h3>
          <nav>
            <FilterOption dispatch={filterByPrice} placeholder='0' title='Price' type='number' />
            <FilterOption dispatch={filterByDate} title='Inclusion' type='datetime-local' />
          </nav>
        </aside>
        <div className='products-container'>
          <h3>
            Products
          </h3>
          <div className='grid-container'>
            {
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