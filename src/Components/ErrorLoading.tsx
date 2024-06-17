import React from 'react';
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

function ErrorLoading() {
  return (
    <AllBlock>
      <Emodji>😔</Emodji>
      <Title>Ошибка загрузки данных</Title>
      <Description>
        К сожалению, данные не удалось загрузить. <br />
        Повторите попытку позже. <br />
      </Description>
    </AllBlock>
  );
}

export default ErrorLoading;
