import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// style
import './Search.css';

// components
import RecipeList from '../../components/RecipeList';

export default function Search() {
  // 쿼리 스트링은 다음과 같이 생겼다. ?q=pie
  // useLocation는 ojbect를 반환한다. search 프로퍼티를 꼭 작성해주어야 한다.
  const queryString = useLocation().search;
  console.log(queryString);
  // URLSearchParams는 바닐라 자바스크립트
  // query string을 바탕으로 새로운 URL search params object를 만든다.
  // get method를 사용할 수 있게 만든다.
  const queryParams = new URLSearchParams(queryString);
  console.log(queryParams);

  const query = queryParams.get('q');

  const url = 'http://localhost:3000/recipes?q=' + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className='page-title'>레시피 '{query}'</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
