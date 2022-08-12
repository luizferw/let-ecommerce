import { Nav } from "@/presentation/components"
import { ProductsTable } from "@/presentation/pages/checkout/components"
import './checkout-styles.scss'

const Checkout = () => {
  return (
    <>
      <Nav />
      <div className='container'>
        <header className='checkout'>
          <span className="material-symbols-outlined">shopping_cart</span>
          <h1>MY CART</h1>
        </header>
        <ProductsTable />
      </div>
    </>
  )
}

export default Checkout