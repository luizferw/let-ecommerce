import { State } from "@/data/models"
import { Nav } from "@/presentation/components"
import { TableHeader, Summary, ProductCheckout, Button } from "@/presentation/pages/checkout/components"
import { cartActionCreator, productActionCreator } from "@/state/actions"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import './checkout-styles.scss'


const Checkout: React.FC = () => {
  const { products } = useSelector((state: State) => state.cart)
  const dispatch = useDispatch()
  const { removeFromCart } = bindActionCreators(cartActionCreator, dispatch)
  const { updateProduct } = bindActionCreators(productActionCreator, dispatch)
  const [loading, setLoading] = useState(false)
  const [discountInput, setDiscountInput] = useState('')

  const handleDeleteAllProducts = () => {
    products.forEach(product => {
      removeFromCart(product)
      updateProduct({...product, inventory:(product.inventory + product.amount), amount: 0})
    })
  }

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
          <div className='table-container__table'>
            <TableHeader />
            <div className='table__items'>
                { products.map((product, index) => (
                  <ProductCheckout key={index} product={product} loading={[loading, setLoading]} />) 
                )}
            </div>
            <span className='table__footer'>
              <div className='footer__cupom-input-container'>
                <input className='footer__cupom-input' 
                  value={discountInput}
                  onChange={e => setDiscountInput(e.target.value)}
                  placeholder='Cupom Code: GET50'
                 type='text'></input>
                <div>
                  <button><span className="material-symbols-outlined">add</span></button>
                </div>
              </div>
              <span onClick={() => handleDeleteAllProducts()}>
                <Button text='Remove All From Cart' /> 
              </span>
            </span>
          </div>
          <Summary products={products} cupom={discountInput} />
        </div>
      </div>
    </>
  )
}

export default Checkout