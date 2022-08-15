import { State } from '@/data/models';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './nav-styles.scss';

const Nav: React.FC = () => {
  const { products} = useSelector((state: State) => state.cart)

  return (
    <header className='nav'>
      <nav className='container'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>
            <Link to='/checkout'>
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className='cart-length'>{ products.length }</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav