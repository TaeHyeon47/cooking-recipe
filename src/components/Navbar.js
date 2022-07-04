import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// 컴포넌트
import Searchbar from './Searchbar';
// 스타일
import './Navbar.css';

export default function Navbar() {
  const { color } = useTheme();

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
