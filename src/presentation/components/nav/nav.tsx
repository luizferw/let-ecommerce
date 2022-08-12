import React from 'react';
import { Link } from 'react-router-dom';
import './nav-styles.scss';

const Nav: React.FC = () => {
  return (
    <header className='nav'>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>
            <Link to='/checkout'>
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav