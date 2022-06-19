// style
import './Recipe.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export default function Recipe() {
  const { id } = useParams();

  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className='recipe'>
      {isPending && <p className='loading'>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {recipe && (
        <>
          <h2 className='page-title'> {recipe.title} </h2>
          <p>만드는 시간은 {recipe.cookingTime}입니다. </p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  );
}
