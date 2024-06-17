import React from 'react';
import DescriptionBlock from '../DescriptionBlock';

type ContentProps = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types: number[];
  description: string;
  ingredients: string[];
  setDataPizza: any;
  setActivePopup: any;
}

const Content: React.FC<ContentProps> = ({ id, title, imageUrl, price, sizes, types, description, ingredients, setDataPizza, setActivePopup }) => {

  const openModalWindow = () => {
    setDataPizza({
      id,
      title,
      imageUrl,
      price,
      sizes,
      types,
      description,
      ingredients,
    });
    setActivePopup(true);
  };

  const allIngredients = Array.isArray(ingredients) ? ingredients.join(', ') : '';

  return (
    <div className='pizza-block'>
      <div className='pizza-block__pointer' onClick={() => openModalWindow()}>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
        <h4 className='pizza-block__title'>{title}</h4>
      </div>
      {allIngredients && (
        <div className='pizza-block__ingredients'>
          <DescriptionBlock text={allIngredients} limit={90} />
        </div>
      )}
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} ₽</div>
        <button onClick={() => openModalWindow()} className='button button--outline button--add'>
          <span>Выбрать</span>
        </button>
      </div>
    </div>
  );
}


export default Content;