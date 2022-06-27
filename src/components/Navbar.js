import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Searchbar from './Searchbar';

import './Navbar.css';

export default function Navbar() {
  const { color } = useContext(ThemeContext);

  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to='/' className='brand'>
          <h1>요리 레시피 모음</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>레시피 만들기</Link>
      </nav>
    </div>
  );
}
