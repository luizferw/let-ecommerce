import FilterAside from '../filter-aside/filter-aside'
import './filter-header-styles.scss'

const FilterBar: React.FC = () => {
  return (
    <div className='container'>
      <section className='filter-header'>
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
    </div>
  )
}

export default FilterBar