import { Link } from 'react-router-dom';
//? Context API를 사용하기 위해 useContext를 넣어줘야함.
import { useContext } from 'react';
//? 접근하고 싶은 Context를 가져옴.
import { ThemeContext } from '../context/ThemeContext';

// 컴포넌트
import Searchbar from './Searchbar';
// 스타일
import './Navbar.css';

export default function Navbar() {
  //? useContext에 내가 접근하고 싶은 context object 이름을 입력해주면 된다.
  //? 여기에서는 ThemeContext Object의 color 값을 디스트럭쳐링한다.
  //! 주의 : function명이 아니라 Object 명을 입력해야한다.
  const { color } = useContext(ThemeContext);

  return (
    // 인라인 스타일로 컬러를 넣어줌.
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
