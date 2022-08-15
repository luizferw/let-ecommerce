import { filterActionCreator } from '@/state/actions'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import './search-bar-styles.scss'

const SearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const { filterBySearch } = bindActionCreators(filterActionCreator, dispatch)

  const [term, setTerm] = useState<string>('')

  useEffect(() => { 
    filterBySearch(term) 
  }, [term])


  return (
    <section className='search-bar container'>
      <div>
        <input type="text" placeholder='Search' value={term} onChange={e => setTerm(e.target.value)} maxLength={100}></input>
        <span className="material-symbols-outlined">
          search
        </span> 
      </div>
    </section>
  )
}

export default SearchBar