import './product-home-styles.scss'

const Product: React.FC = () => {
  return (
    <article>
      <img src='https://via.placeholder.com/350'></img>
      <div>
        <span>{'Product name'}</span>
        <h5>{'R$ 212'}</h5>
      </div>
    </article>
  )
}

export default Product