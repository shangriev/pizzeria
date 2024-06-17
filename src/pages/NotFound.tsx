import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AllBlock = styled.div`
  text-align: center;
  font-family: sans-serif;
  padding: 100px 0 200px 0;
`;
const Title = styled.h1`
  margin: 20px 0 20px 0;
`;
const Emodji = styled.span`
  font-size: 60px;
`;
const Description = styled.p`
  font-size: 20px;
`;
const GoToMainPage = styled.span`
  color: #1ea0eb;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-offset: 3px;
  text-decoration-color: rgb(30, 160, 235, 0.5);
`;

function NotFound() {
  return (
    <AllBlock>
      <Emodji>🤔</Emodji>
      <Title>Страница не найдена</Title>
      <Description>
        Страница на которую вы пытаетесь <br />
        попасть, не существует или была удалена. <br />
        Перейти на{' '}
        <Link to='/'>
          <GoToMainPage>Главную страницу</GoToMainPage>
        </Link>
      </Description>
    </AllBlock>
  );
}

export default NotFound;
