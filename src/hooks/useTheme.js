//? Context API를 사용하기 위해 useContext를 넣어줘야함.
import { useContext } from 'react';
//? 접근하고 싶은 Context를 가져옴.
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  //? useContext에 내가 접근하고 싶은 context object 이름을 입력해주면 된다.
  //? 여기에서는 ThemeContext Object의 color 값을 디스트럭쳐링한다.
  //! 주의 : function명이 아니라 Object 명을 입력해야한다.
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme() must be used inside a ThemeProvider');
  }

  return context;
};
