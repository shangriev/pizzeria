import React from "react";

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

type CategoriesProps = {
  onClickCategory: (i: number) => void;
  value: number;
}

const Categories: React.FC<CategoriesProps> = React.memo(({ onClickCategory, value }) => {

  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Categories