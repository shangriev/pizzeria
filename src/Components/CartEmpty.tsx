import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AllBlock = styled.div`
  text-align: center;
  padding: 20px 0 50px 0;
`;

const Title = styled.h1`
  margin: 0;
`;

const Description = styled.p`
  font-size: 20px;
`;

const CartEmpty: React.FC = () => {
  return (
    <AllBlock>
      <div className='cart cart--empty'>
        <Title>Корзина пустая</Title>
        <Description>
          Корзина пуста, как душа философа во время распродажи!
          <br />
          Пришло время добавить туда что-то интересное. Вперёд, на главную страницу!
        </Description>
        <img src='/img/empty-cart.png' alt='Empty cart' />
        <Link to='/' className='button button--black'>
          <span>Вернуться назад</span>
        </Link>
      </div>
    </AllBlock>
  );
}

export default CartEmpty;
