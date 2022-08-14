import { useState } from 'react';
import './filter-header-styles.scss'

type Props = {
  sort: [
    sortBy: {
      lowest: boolean;
      highest: boolean;
      latest: boolean;
      older: boolean;
    }, 
    setSortBy: React.Dispatch<React.SetStateAction<{
      lowest: boolean;
      highest: boolean;
      latest: boolean;
      older: boolean;
    }>>
  ]
}

const FilterBar: React.FC<Props> = ({ sort } : Props) => {
  const [sortBy, setSortBy] = sort

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch(e.target.value) {
      case 'lowest': {setSortBy({lowest: true, highest: false, latest: false, older: false}); return}
      case 'highest': {setSortBy({lowest: false, highest: true, latest: false, older: false}); return}
      case 'latest': {setSortBy({lowest: false, highest: false, latest: true, older: false}); return}
      case 'older': {setSortBy({lowest: false, highest: false, latest: false, older: true}); return}
    }
  }

  return (
    <div className='container'>
      <section className='filter-header'>
        <h2>{'Search'}</h2>
        <div>
          <span>Sort by {' '}</span>
          <select onChange={(e) => handleChange(e)}>
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