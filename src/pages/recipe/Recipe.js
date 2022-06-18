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
    <div>
      {isPending && <div>Loading</div>}
      {error & <div>{error}</div>}
      {recipe && (
        <div>
          {recipe.ingredients}
          {recipe.method}
          {recipe.cookingTime}
        </div>
      )}
    </div>
  );
}
