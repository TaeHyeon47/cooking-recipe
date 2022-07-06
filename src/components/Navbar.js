import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// 컴포넌트
import Searchbar from './Searchbar';
// 스타일
import './Navbar.css';

export default function Navbar() {
  // changeColor 함수를 디스트럭쳐링.
  const { color, changeColor } = useTheme();

  return (
    // 인라인 스타일로 컬러를 넣어줌.
    <div className='navbar' style={{ background: color }}>
      {/* changeColor 함수에 pink parameter 전달 */}
      <nav onClick={() => changeColor('pink')}>
        <Link to='/' className='brand'>
          <h1>요리 레시피 모음</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>레시피 만들기</Link>
      </nav>
    </div>
  );
}
