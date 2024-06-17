import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortId } from '../redux/filter/slice';
import { mySortState } from 'redux/filter/types';


type clickPopup = MouseEvent & {
  path: Node[];
}

export const sortList: mySortState[] = [
  { name: 'Сначала популярные', sortProperty: 'rating' },
  { name: 'Сначала дорогие', sortProperty: 'price' },
  { name: 'Сначала не дорогие', sortProperty: '-price' },
  { name: 'По скидке %', sortProperty: 'discount' },
];

const Sort: React.FC = React.memo(() => {
  const [openSort, setOpenSort] = React.useState<boolean>(false);
  const sortId = useSelector((state: any) => state.filter.sort);
  const dispatch = useDispatch();
  const changeSortActive = (item: mySortState) => {
    dispatch(setSortId(item));
    setOpenSort(false);
  };
  const sortRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      const _event = event as clickPopup;
      if (!_event.composedPath().includes(sortRef.current as EventTarget)) {
        setOpenSort(false);
      }
    };
    document.body.addEventListener('click', handleClickOutSide);

    return () => {
      document.body.removeEventListener('click', handleClickOutSide);
    };
  });

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        <b>Сортировка:</b>
        <span onClick={() => setOpenSort(!openSort)}>{sortId.name}</span>
      </div>
      {openSort && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => changeSortActive(obj)}
                className={sortId.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
})


export default Sort;