import { ProductType, State } from '@/data/models'
import { cartActionCreator } from '@/state/action-creators'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import './product-home-styles.scss'

type Props = {
  product: ProductType
}

const Product = (props: Props) => {
  const dispatch = useDispatch()
  const { addToCart } = bindActionCreators(cartActionCreator, dispatch)

  return (
    <article onClick={() => addToCart(props.product)}>
      <img src='https://via.placeholder.com/350'></img>
      <div>
        <span>{ props.product.title }</span>
        <h5>R${ props.product.price }</h5>
      </div>
      <div className='add-product'>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>Click to add to cart</span>
      </div>
    </article>
  )
}

export default Product