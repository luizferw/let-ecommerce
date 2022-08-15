import { ProductType } from '@/data/models'
import { Button } from '@/presentation/pages/checkout/components'
import { getProductsSum, getSum, getParsedCupom } from '@/utils'
import './summary-styles.scss'

type Props = {
  products: ProductType[]
  cupom: string
}

const Summary: React.FC<Props> = ({products, cupom}: Props) => {
  const fixedRates = [{ fee: 'Shipping', value: 10 }]
  const sumProductsPrice = getProductsSum(products)
  const sumFixedRates = getSum(fixedRates)

  const parsedCupom = getParsedCupom(cupom, sumProductsPrice)
  
  const discounts = [{ discount: 'Cupom', value: parsedCupom || '' }]
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
            { sumProductsPrice !== 0 && (
              <span className="subtotal__item add">
                <h6 className='item__title'>Products</h6>
                <span className='item__value'>${Number(sumProductsPrice).toFixed(2)}</span>
              </span>
            )}
            { sumProductsPrice !== 0 && fixedRates.map((rate, index) => (
            <span className="subtotal__item add" key={index}>
              <h6 className='item__title'>{rate.fee}</h6>
              <span className='item__value'>${rate.value}</span>
            </span>
              )
            )}
            { parsedCupom > 0 && discounts.map((discount, index) => (
            <span className="subtotal__item subtract" key={index}>
              <h6 className='item__title'>{discount.discount}</h6>
              <span className='item__value'>${discount.value}</span>
            </span>
              )
            )}
           
          </div>
        </div>
        <div className="summary__total">
          <h3>Total</h3>
          <h4>${sumProductsPrice !== 0 && Number(total).toFixed(2)}</h4>
        </div>
      </div>
      <Button text='Finalize Purchase'/>
    </div>
  )
}

export default Summary