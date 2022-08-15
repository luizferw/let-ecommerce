import { ProductType } from '@/data/models'
import { cartActionCreator, productActionCreator } from '@/state/actions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import './product-checkout-styles.scss'

type Props = {
  product: ProductType
  loading: [
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ]
}

const ProductCheckout: React.FC<Props> = ({product, loading}: Props) => {
  const dispatch = useDispatch()
  const { decreaseAmount, increaseAmount } = bindActionCreators(productActionCreator, dispatch)
  const { removeFromCart } = bindActionCreators(cartActionCreator, dispatch)
  const [load, setLoading] = loading

  const handleDecreaseAmount = () => {
    setLoading(true)
    if (product.amount == 1) { return } 
    
    if(product.amount > 1) {
      decreaseAmount({...product, amount: product.amount -= 1 })
    }
  }

  const handleIncreaseAmount = () => {
    setLoading(true)
    increaseAmount({...product, amount: product.amount += 1 })
  }

  return (
    <div className='items__item'>
      <div className='item__description'>
        <img src={`images/${product.imageName}`}></img>
        <h4>{product.title}</h4>
      </div>
      <div className='item__amount'>
        <button className='item__remove-button' >
          <span className="material-symbols-outlined" onClick={() => handleDecreaseAmount()}>remove</span>
        </button>
        <h4>{product.amount}</h4>
        <button className='item__add-button'>
          <span className="material-symbols-outlined"  onClick={() => handleIncreaseAmount()}>add</span>
        </button>
      </div>
      <h4>R${product.price}</h4>
      <button className='item__delete-product' onClick={() => removeFromCart(product)}>
        <svg focusable="false" width="30px" height="30px" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </button>
    </div>
  )
}

export default ProductCheckout