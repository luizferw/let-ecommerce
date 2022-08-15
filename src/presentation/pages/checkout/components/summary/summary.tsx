import { ProductType } from '@/data/models'
import { Button } from '@/presentation/pages/checkout/components'
import { getProductsSum, getSum } from '@/utils'
import './summary-styles.scss'

type Props = {
  products: ProductType[]
}

const Summary: React.FC<Props> = ({products}: Props) => {
  const fixedRates = [{ fee: 'Delivery', value: 10 }]
  const discounts = [{ discount: 'Cupom', value: 5 }]
  
  const sumProductsPrice = getProductsSum(products)
  const sumFixedRates = getSum(fixedRates)
  const sumDiscounts = getSum(discounts)
  const total = sumProductsPrice + sumFixedRates - sumDiscounts

  return (
    <div className='summary'>
      <div className='summary__values'>
        <h2>Summary</h2>
        <div className="summary__subtotal">
          <div className="subtotal__header">
            <h5>Subtotal</h5>
          </div>
          <div className="subtotal__items">
            {products.length !== 0 && (
              <span className="subtotal__item add">
                <h6 className='item__title'>Products</h6>
                <span className='item__value'>R${sumProductsPrice}</span>
              </span>
            )}
            { products.length !== 0 && fixedRates.map((rate, index) => (
            <span className="subtotal__item add" key={index}>
              <h6 className='item__title'>{rate.fee}</h6>
              <span className='item__value'>R${rate.value}</span>
            </span>
              )
            )}
            { products.length !== 0 && discounts.map((discount, index) => (
            <span className="subtotal__item subtract" key={index}>
              <h6 className='item__title'>{discount.discount}</h6>
              <span className='item__value'>R${discount.value}</span>
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