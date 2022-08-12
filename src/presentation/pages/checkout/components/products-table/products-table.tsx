import { TableHeader, Summary, TableItems } from '@/presentation/pages/checkout/components'
import './products-table-styles.scss'

const ProductsTable = () => {
  return (
    <>
      <div className='table-container'>
        <div className='table'>
          <TableHeader />
          <TableItems />
        </div>
        <Summary />
      </div>
    </>
  )
}

export default ProductsTable