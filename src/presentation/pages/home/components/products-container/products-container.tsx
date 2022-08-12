import Product from '../product-home/product-home'
import './products-container-styles.scss'

const ProductsContainer = () => {
  return (
    <div className='products-container'>
      <h3>Products</h3>
      <div className='grid-container'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default ProductsContainer