import { HTMLInputTypeAttribute, useEffect, useState } from 'react'
import './filter-option-styles.scss'

type Props = {
  dispatch: (date: {
      firstValue: string;
      secondValue: string;
  }) => (dispatch: any) => void,
  title: string,
  type: HTMLInputTypeAttribute
  placeholder?: string
}

const FilterOption: React.FC<Props> = ({dispatch, title, type, placeholder}: Props) => {
  const [ filterValue, setFilterValue ] = useState({firstValue: '', secondValue: ''}) 

  useEffect(() => {
    dispatch(filterValue)
  }, [filterValue])

  return (
    <div className='filter-option'>
        <div>
        <h4>{title}</h4>
          <ul>
            <li>From</li>
            <input type={type} placeholder={placeholder} value={filterValue.firstValue} onChange={e => setFilterValue(prevState => ({...prevState, firstValue: e.target.value}))}></input>
            <li>To</li>
            <input type={type} placeholder={placeholder} value={filterValue.secondValue} onChange={e => setFilterValue(prevState => ({...prevState, secondValue: e.target.value}))}></input>
          </ul>
        </div>
    </div>
  )
}

export default FilterOption