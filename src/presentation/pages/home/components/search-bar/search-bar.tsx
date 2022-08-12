import './search-bar-styles.scss'

const SearchBar: React.FC = () => {
  return (
    <section className='search-bar container'>
      <div>
        <input type="text" maxLength={100}></input>
        <span className="material-symbols-outlined">
          search
        </span> 
      </div>
    </section>
  )
}

export default SearchBar