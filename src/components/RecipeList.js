import { Link } from 'react-router-dom';
import './RecipeList.css';

import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    // return이 되는 순간 코드는 멈춘다.
    return <div className='error'>검색 결과가 없습니다.</div>;
  }

  return (
    // Home.js에 'data &&'의 분기분이 있기 때문에 별도로 recipes &&를 사용할 필요가 없다.
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>만드는 시간 {recipe.cookingTime}</p>
          {/* substring은 새로운 String을 generate한다. */}
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>요리법 보기</Link>
        </div>
      ))}
    </div>
  );
}
