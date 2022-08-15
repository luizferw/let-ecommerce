import { productActionCreator } from '@/state/actions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import './filter-header-styles.scss'


const FilterBar: React.FC = () => {
  const dispatch = useDispatch()
  const { sortProducts } = bindActionCreators(productActionCreator, dispatch)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch(e.target.value) {
      case 'lowest': { sortProducts({sortBy: 'LOWEST'}); return }
      case 'highest': { sortProducts({sortBy: 'HIGHEST'}); return }
      case 'latest': { sortProducts({sortBy: 'LATEST'}); return }
      case 'older': { sortProducts({sortBy: 'OLDER'}); return }
    }
  }

  return (
    <div className='container'>
      <section className='filter-header'>
        <h2>{'Search'}</h2>
        <div>
          <span>Sort by {' '}</span>
          <select defaultValue="default" onChange={(e) => handleChange(e)}>
            <option value="default"></option>
            <option value='lowest'>Lowest price</option>
            <option value='highest'>Highest price</option>
            <option value='latest'>Latest</option>
            <option value='older'>Older</option>
          </select>
        </div>
      </section>
    </div>
  )
}

export default FilterBar