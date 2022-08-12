import './table-items-styles.scss'

const TableItems: React.FC = () => {
  return (
    <div className='table__items'>
      <div className='items__item'>
        <div className='item__description'>
          <img src='https://via.placeholder.com/150'></img>
          <h4>{'Product name'}</h4>
        </div>
        <div className='item__amount'>
          <button className='item__remove-button'>
          <span className="material-symbols-outlined">remove</span>
          </button>
          <h4>{'1'}</h4>
          <button className='item__add-button'>
          <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <h4>{'R$999'}</h4>
        <button className='item__delete-product'>
          <svg focusable="false" width="30px" height="30px" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TableItems