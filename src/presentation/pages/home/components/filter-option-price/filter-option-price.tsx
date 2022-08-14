import './filter-option-styles.scss'

type Props = {
  price: [
    filterPrice: {
      firstPrice: string;
      secondPrice: string;
    },
      setFilterPrice: React.Dispatch<React.SetStateAction<{
        firstPrice: string;
        secondPrice: string;
    }>>
  ]
}

const FilterOptionPrice: React.FC<Props> = ({ price }: Props) => {
  const [ filterPrice, setFilterPrice ] = price

  return (
    <div className='filter-option'>
        <div>
        <h4>Price</h4>
          <ul>
            <li>From</li>
            <input type='number' placeholder='0' max="9999999" value={filterPrice.firstPrice} onChange={e => setFilterPrice(prevState => ({...prevState, firstPrice: e.target.value}))}></input>
            <li>To</li>
            <input type='number' placeholder='0' max="9999999" value={filterPrice.secondPrice} onChange={e => setFilterPrice(prevState => ({...prevState, secondPrice: e.target.value}))}></input>
          </ul>
        </div>
    </div>
  )
}

export default FilterOptionPrice