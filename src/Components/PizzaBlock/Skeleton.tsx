import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={1}
    width={270}
    height={464}
    viewBox='0 0 270 464'
    backgroundColor='#dedede'
    foregroundColor='#ecebeb'>
    <circle cx='137' cy='125' r='125' />
    <rect x='176' y='457' rx='0' ry='0' width='1' height='0' />
    <rect x='0' y='267' rx='10' ry='10' width='280' height='36' />
    <rect x='0' y='314' rx='10' ry='10' width='280' height='86' />
    <rect x='0' y='424' rx='10' ry='10' width='112' height='34' />
    <rect x='133' y='418' rx='20' ry='20' width='147' height='44' />
  </ContentLoader>
);

export default Skeleton;
