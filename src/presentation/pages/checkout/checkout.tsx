import { State } from "@/data/models"
import { Nav } from "@/presentation/components"
import { TableHeader, Summary, ProductCheckout } from "@/presentation/pages/checkout/components"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import './checkout-styles.scss'

const Checkout = () => {
  const { products } = useSelector((state: State) => state.cart)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [loading])

  return (
    <>
      <Nav />
      <div className='container'>
        <header className='checkout'>
          <span className="material-symbols-outlined">shopping_cart</span>
          <h1>MY CART</h1>
        </header>
        <div className='table-container'>
          <div className='table'>
            <TableHeader />
            <div className='table__items'>
              { products.map((product, index) => (
                <ProductCheckout key={index} product={product} loading={[loading, setLoading]} />) 
              )}
            </div>
            </div>
            <Summary products={products} loading={[loading]}/>
          </div>
      </div>
    </>
  )
}

export default Checkout