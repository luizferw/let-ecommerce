const SearchBar = () => {
  return (
    <section className='search-bar'>
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