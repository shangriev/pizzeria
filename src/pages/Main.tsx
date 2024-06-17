import React from 'react';
import { useSelector } from 'react-redux';
import { setCategoryId } from '../redux/filter/slice';
import { fetchPizzas } from '../redux/pizza/asyncActions';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import ErrorLoading from '../Components/ErrorLoading';
import Search from '../Components/Search';
import ModalWindow from '../Components/ModalWindow';
import { useAppDispatch } from '../redux/store';

type dataPizzaProps = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
  sizes: number[];
  types: number[];
  ingredients: string[];
}

const Main: React.FC = () => {
  const { status, items } = useSelector((state: any) => state.pizza);
  const { categoryId, sort, searchValue } = useSelector((state: any) => state.filter);
  const dispatch = useAppDispatch();

  const [activePopup, setActivePopup] = React.useState(false);
  const [dataPizza, setDataPizza] = React.useState<dataPizzaProps>({
    id: 0,
    title: '',
    imageUrl: '',
    price: 0,
    description: '',
    sizes: [],
    types: [],
    ingredients: [],
  });

  const onChangeCategoryId = React.useCallback((index: number) => {
    dispatch(setCategoryId(index));
  }, [])

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const search = searchValue ? `&q=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        category,
        order,
        sortBy,
        search,
      }),
    );
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue]);

  const showSkeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
  const showItems = items.map((obj: any) => (
    <PizzaBlock
      key={obj.id}
      {...obj}
      setDataPizza={setDataPizza}
      setActivePopup={setActivePopup}
    />
  ));

  return (
    <div className='container'>
      <div className='content__top'>
        <Search />
        <Categories value={categoryId} onClickCategory={onChangeCategoryId} />
      </div>
      <div className='content__sort'>
        <h2 className='content__title'>Все пиццы</h2>
        <Sort />
      </div>
      {status === 'error' ? (
        <ErrorLoading />
      ) : (
        <div className='content__items'>{status === 'loading' ? showSkeleton : showItems}</div>
      )}
      <ModalWindow
        activePopup={activePopup}
        setActivePopup={setActivePopup}
        dataPizza={dataPizza}
      />
    </div>
  );
}

export default Main;