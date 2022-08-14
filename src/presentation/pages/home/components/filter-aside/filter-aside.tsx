import { FilterOptionPrice, FilterOptionInclusion } from '@/presentation/pages/home/components'
import './filter-aside-styles.scss'

type Props = {
  filter: [
    filterDate: {
      firstDate: string;
      secondDate: string;
  },
    setFilterDate: React.Dispatch<React.SetStateAction<{
      firstDate: string;
      secondDate: string;
  }>>,
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

const FilterAside: React.FC<Props> = ({ filter }: Props) => {
  const [filterDate, setFilterDate, filterPrice, setFilterPrice] = filter

  return (
    <aside className='filter-aside'>
      <h3>Filter</h3>
      <nav>
        <FilterOptionPrice price={[filterPrice, setFilterPrice]}/>
        <FilterOptionInclusion date={[filterDate, setFilterDate]} />
      </nav>
    </aside>
  )
}

export default FilterAside