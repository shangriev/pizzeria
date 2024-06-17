import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, minusItem, plusItem } from '../redux/cart/slice';

import RemoveSvg from '../svg/removeSvg.svg';

type CartItemsProps = {
  id: number;
  title: string;
  price: number;
  size: number;
  count: number;
  type: string;
  imageUrl: string;
}

const CartItems: React.FC<CartItemsProps> = ({ id, title, price, size, count, type, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(plusItem(id));
  };

  const onClickMinus = () => {
    if (count > 1) {
      dispatch(minusItem(id));
    }
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className='cart-block'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      </div>
      <div className='cart__item'>
        <div className='cart__item_info'>
          <div className='cart__item_info-title'>
            <p>{title}</p>
            <p>
              ({type}, {size} см.)
            </p>
          </div>
        </div>
        <div className='cart__item_count'>
          <div className='cart__item_count-btns'>
            <div onClick={onClickMinus}>
              <button>-</button>
            </div>
            <b>{count}</b>
            <div onClick={onClickPlus}>
              <button>+</button>
            </div>
          </div>
        </div>
        <div onClick={onClickRemove} className='cart__item-remove'>
          <img src={RemoveSvg} alt='remove' className='cart__item-remove-btn' />
        </div>
        <div className='cart__item-price'>
          <b>{price * count} ₽</b>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
