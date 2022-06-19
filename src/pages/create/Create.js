// style
import './Create.css';

import React from 'react';
import { useState, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const { postData, data, error } = useFetch(
    'http://localhost:3000/recipes',
    'POST'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Json-server는 자동적으로 Id를 추가해주기 때문에 ID를 입력할 필요가 없다.
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' 분',
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      // setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  return (
    <div className='create'>
      <h2 className='page-title'>새로운 레시피 만들기</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>요리 제목</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>레시피 재료</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className='btn'>
              추가
            </button>
          </div>
        </label>
        <p>
          현재 재료:{' '}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>요리 방법</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          ></textarea>
        </label>

        <label>
          <span>요리시간:</span>
          <input
            type='text'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>제출</button>
      </form>
    </div>
  );
}
