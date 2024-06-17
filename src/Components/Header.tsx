import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const emptyСart = 'Корзина пустая';
  const { totalPrice, items } = useSelector((state: any) => state.cart);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;

  }, [items]);

  const location = useLocation();

  const allItems = items.reduce((sum: number, obj: any) => {
    return obj.count + sum;
  }, 0);

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img width='38' src='img/pizza-logo.svg' alt='Pizza logo' />
            <div>
              <h1>Pizza</h1>
              <p>самая вкусная пицца</p>
            </div>
          </div>
        </Link>
        <div className='header__cart'>
          {location.pathname !== '/cart' && (
            <Link to='/cart' className='button button--cart'>
              <span>{totalPrice ? `${totalPrice} ₽` : emptyСart}</span>
              <div className='button__delimiter'></div>
              <img width='18' src='img/cart.svg' alt='cart' />
              <span>{totalPrice ? allItems : ''}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
