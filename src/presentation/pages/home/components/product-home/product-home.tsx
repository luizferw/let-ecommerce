import { ProductType } from '@/data/models'
import { cartActionCreator, productActionCreator } from '@/state/actions'
import { getUrl } from '@/utils/getUrl'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import './product-home-styles.scss'

type Props = {
  product: ProductType
}

const Product: React.FC<Props> = ({product}: Props) => {
  const dispatch = useDispatch()
  const { addToCart } = bindActionCreators(cartActionCreator, dispatch)
  const { updateProduct } = bindActionCreators(productActionCreator, dispatch)
  const date = new Date(product.post_date).toISOString().split('T')[0].split('-')
  const parsedDate = (`${date[2]}/${date[1]}/${date[0]}`)


  const handleAddToCart = () => {
    if (product.inventory === 0) return
    updateProduct({...product, inventory: product.inventory - 1})
    addToCart({...product})

    if(product.inventory === 1 && product.amount >= product.inventory) {
    }
  }

  return (
    <article onClick={() => handleAddToCart()}>
      <img src={getUrl(product)}></img>
      <div>
        <span>{ product.title }</span>
        <h5>${ Number(product.price).toFixed(2) }</h5>
        <span>
          <span>Inventory: {' '}</span>
          <span>{ product.inventory > 0 ? `${product.inventory} units`  : 'out of stock' }</span>
        </span>
        <span>{parsedDate}</span>
      </div>
      <div className='add-product'>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>Click to add to cart</span>
      </div>
    </article>
  )
}

export default Product