import { Button } from '@/presentation/pages/checkout/components'
import './summary-styles.scss'

const Summary: React.FC = () => {
  return (
    <div className='summary'>
      <div className='summary__values'>
        <h2>Summary</h2>
        <div className="summary__subtotal">
          <div className="subtotal__header">
            <h5>Subtotal</h5>
            <span>{'R$999'}</span>
          </div>
          <div className="subtotal__items">
            <span className="subtotal__item">
              <h6 className='item__title'>{'Products'}</h6>
              <span className='item__value'>{'R$999'}</span>
            </span>
            <span className="subtotal__item">
              <h6 className='item__title'>{'Delivery'}</h6>
              <span className='item__value'>{'R$10'}</span>
            </span>
          </div>
        </div>
        <div className="summary__total">
          <h3>Total</h3>
          <h4>{'R$999'}</h4>
        </div>
      </div>
      <Button />
    </div>
  )
}

export default Summary