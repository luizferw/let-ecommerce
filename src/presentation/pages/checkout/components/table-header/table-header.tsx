import './table-header-styles.scss'

const TableHeader: React.FC = () => {
  return (
    <div className='table__header'>
      <h3>Product</h3>
      <h3>Amount</h3>
      <h3>Price</h3>
    </div>
  )
}

export default TableHeader