import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import closeItem from '../svg/closeItem.svg';
import { addItem } from '../redux/cart/slice';
import { Link } from 'react-router-dom';
import { MyCartItem } from 'redux/cart/types';

const typeNames = ['тонкое', 'традиционное'];

type ModalWindowProps = {
  setActivePopup: Function;
  activePopup: boolean;
  dataPizza: Pizza;
}

interface Pizza {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
  sizes: number[];
  types: number[];
  ingredients: string[];
}

const ModalWindow: React.FC<ModalWindowProps> = ({ setActivePopup, activePopup, dataPizza }) => {
  const { id, title, imageUrl, price, description, sizes, types, ingredients } = dataPizza;
  const cartItem = useSelector((state: any) => state.cart.items.find((obj: any) => obj.id === id));
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const dispatch = useDispatch();

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAddItems = () => {
    const item: MyCartItem = {
      id,
      title,
      imageUrl,
      price,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0
    };
    dispatch(addItem(item));
  };

  const closePopup = () => {
    setActivePopup(false);
  };

  const allIngredients = Array.isArray(ingredients) ? ingredients.join(', ') : '';

  return (
    <div className={activePopup ? 'popup active' : 'popup'} onClick={() => setActivePopup(false)}>
      <div
        className={activePopup ? 'popup__block active' : 'popup__block'}
        onClick={(e) => e.stopPropagation()}>
        <img onClick={closePopup} className='popup__btn_close-item' src={closeItem} alt='close' />
        <div className='popup__block-content'>
          <div className='popup__block-img'>
            <img src={imageUrl} alt='pizza' />
          </div>
          <div className='popup__block-info'>
            <div className='popup__block-info-title'>{title}</div>
            <div className='popup__block-info-description'>{description}</div>
            {allIngredients && <span>Состав:</span>}
            <div className='popup__block-info-ingredients'>{allIngredients}</div>
            <div className='pizza-block__selector'>
              <ul>
                {types &&
                  types.map((type, i) => (
                    <li
                      key={i}
                      onClick={() => setActiveType(i)}
                      className={activeType === i ? 'active' : ''}>
                      {typeNames[type]}
                    </li>
                  ))}
              </ul>
              <ul>
                {sizes &&
                  sizes.map((size, i) => (
                    <li
                      key={i}
                      onClick={() => setActiveSize(i)}
                      className={activeSize === i ? 'active' : ''}>
                      {size} см.
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='popup__block-product'>
          <div className='popup__block-product-cart'>
            <Link
              to='/cart'
              className={
                addedCount > 0 ? 'button button--cart-window active' : 'button button--cart-window'
              }>
              <span>Перейти в корзину</span>
            </Link>
          </div>
          <div className='popup__block-product-addcart'>
            <button
              onClick={onClickAddItems}
              className={
                addedCount > 0
                  ? 'button button--outline button--add active'
                  : 'button button--outline button--add'
              }>
              <span>
                Добавить в корзину за {price} ₽ {addedCount > 0 ? `/ ${cartItem.count} шт.` : ''}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
