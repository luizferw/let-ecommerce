import { ProductType } from '@/data/models'
import { Button } from '@/presentation/pages/checkout/components'
import { useEffect, useState } from 'react'
import './summary-styles.scss'

type Props = {
  products: ProductType[]
  loading: [loading: boolean]
}

const Summary: React.FC<Props> = ({products, loading}: Props) => {
  const [total, setTotal] = useState<number>()
  const fixedRates = [{ Delivery: 10 }]
  const discounts = [{ Cupom: 5 }]
  const [sumProductsPrice, setSumProductsPrice] = useState(0)
  
  useEffect(() => {
    const toAdd = () => {
      let totalProductsPrice = 0
      let totalToAdd = 0
   
      products.forEach(product => totalProductsPrice += (product.price * product.amount))
      products.forEach(product => totalToAdd += (product.price * product.amount))
      fixedRates.forEach(rates => Object.values(rates).forEach( rate => totalToAdd += rate ))

      setSumProductsPrice(totalProductsPrice)
      return totalToAdd
    }
    
    const toSubtract = () => {
      let totalToSubtract = 0
      discounts.forEach(discounts => Object.values(discounts).forEach( discount => totalToSubtract += discount ))
      return totalToSubtract
    }
    setTotal(toAdd() - toSubtract())
  }, [products, loading])

  return (
    <div className='summary'>
      <div className='summary__values'>
        <h2>Summary</h2>
        <div className="summary__subtotal">
          <div className="subtotal__header">
            <h5>Subtotal</h5>
          </div>
          <div className="subtotal__items">
            <span className="subtotal__item add">
              <h6 className='item__title'>Products</h6>
              <span className='item__value'>R${products.length !== 0 && sumProductsPrice}</span>
            </span>
            { products.length !== 0 && fixedRates.map((rate, index) => (
            <span className="subtotal__item add" key={index}>
              <h6 className='item__title'>{Object.keys(rate)}</h6>
              <span className='item__value'>R${Object.values(rate)}</span>
            </span>
              )
            )}
            { products.length !== 0 && discounts.map((discount, index) => (
            <span className="subtotal__item subtract" key={index}>
              <h6 className='item__title'>{Object.keys(discount)}</h6>
              <span className='item__value'>R${Object.values(discount)}</span>
            </span>
              )
            )}
           
          </div>
        </div>
        <div className="summary__total">
          <h3>Total</h3>
          <h4>R${products.length !== 0 && total}</h4>
        </div>
      </div>
      <Button />
    </div>
  )
}

export default Summary