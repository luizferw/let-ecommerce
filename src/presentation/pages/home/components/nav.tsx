import React from 'react';

const Nav: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav