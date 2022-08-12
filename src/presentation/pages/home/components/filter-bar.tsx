import { FilterOption, Product } from '@/presentation/pages/home/components'

const FilterBar = () => {
  return (
    <>
    <section className='filter-bar'>
      <h2>{'Search'}</h2>
      <div>
        <span>Sort by {' '}</span>
        <select>
          <option>Lowest price</option>
          <option>Highest price</option>
          <option>Latest</option>
          <option>Older</option>
        </select>
      </div>
    </section>

    <section>
      <div>
        <h3>Filter</h3>
        <nav>
          <FilterOption options={[{title: 'name', options: ['option 1', 'option 2']}, {title: 'name', options: ['option 1', 'option 2']}]} />
        </nav>
      </div>
      <div className='products-container'>
        <h3>Products</h3>
        <div className='grid-container'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
    </>
  )
}

export default FilterBar