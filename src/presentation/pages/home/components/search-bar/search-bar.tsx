import { useState } from 'react'
import './search-bar-styles.scss'

type Props = {
  search: [
    filterSearch: string,
    setFilterSearch: React.Dispatch<React.SetStateAction<string>>
  ]
}

const SearchBar: React.FC<Props> = ({ search } : Props) => {
  const [searchInput, setSearchInput] = useState('')
  const [filterSearch, setFilterSearch] = search

  return (
    <section className='search-bar container'>
      <div>
        <input type="text" placeholder='Search' value={searchInput} onChange={e => setSearchInput(e.target.value)} maxLength={100}></input>
        <span className="material-symbols-outlined" onClick={() => setFilterSearch(searchInput)}>
          search
        </span> 
      </div>
    </section>
  )
}

export default SearchBar