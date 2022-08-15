import { ProductType } from '@/data/models'
import { cartActionCreator } from '@/state/actions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import './product-home-styles.scss'

type Props = {
  product: ProductType
}

const Product: React.FC<Props> = ({product}: Props) => {
  const dispatch = useDispatch()
  const { addToCart } = bindActionCreators(cartActionCreator, dispatch)

  return (
    <article onClick={() => addToCart(product)}>
      <img src={`images/${product.imageName}`}></img>
      <div>
        <span>{ product.title }</span>
        <h5>R${ product.price }</h5>
      </div>
      <div className='add-product'>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>Click to add to cart</span>
      </div>
    </article>
  )
}

export default Product