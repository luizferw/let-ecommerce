import './filter-option-styles.scss'

type Props = {
  date: [
    filterDate: {
      firstDate: string;
      secondDate: string;
  },
    setFilterDate: React.Dispatch<React.SetStateAction<{
      firstDate: string;
      secondDate: string;
  }>>
  ]
}


const FilterOptionInclusion: React.FC<Props> = ({ date } : Props) => {
  const [ filterDate, setFilterDate ] = date

  return (
    <div className='filter-option'>
        <div>
        <h4>Inclusion</h4>
          <ul>
            <li>From</li>
            <input type='datetime-local' value={filterDate.firstDate} onChange={e => setFilterDate(prevState => ({...prevState, firstDate: e.target.value}))}></input>
            <li>To</li>
            <input type='datetime-local' value={filterDate.secondDate} onChange={e => setFilterDate(prevState => ({...prevState, secondDate: e.target.value}))}></input>
          </ul>
        </div>
    </div>
  )
}

export default FilterOptionInclusion