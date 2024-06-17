import React from 'react';
import debounce from 'lodash.debounce';
import searchImg from '../svg/search.svg';
import deleteImg from '../svg/delete.svg';
import { setSearchValue } from '../redux/filter/slice';
import { useDispatch } from 'react-redux';

export default function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const refInput = React.useRef<HTMLInputElement>(null);

  const onClickClearAndFocus = () => {
    dispatch(setSearchValue(''));
    setValue('');
    refInput.current?.focus();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChangeDebounce(e.target.value);
  };



  const onChangeDebounce = React.useCallback(
    debounce((str: any) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  return (
    <div className='search'>
      <input ref={refInput} value={value} onChange={onChangeInput} placeholder='Поиск...' />
      <img className='search-img' src={searchImg} alt='search' />
      {value && (
        <img
          onClick={() => onClickClearAndFocus()}
          className='delete-img'
          src={deleteImg}
          alt='delete text'
        />
      )}
    </div>
  );
}
