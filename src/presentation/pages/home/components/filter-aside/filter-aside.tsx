import FilterOption from '../filter-option/filter-option'
import './filter-aside-styles.scss'

const FilterAside: React.FC = () => {
  return (
    <aside className='filter-aside'>
      <h3>Filter</h3>
      <nav>
        <FilterOption options={[{title: 'name', options: ['option 1', 'option 2']}, {title: 'name', options: ['option 1', 'option 2']}]} />
      </nav>
    </aside>
  )
}

export default FilterAside