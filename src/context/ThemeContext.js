// createContext function allows us to create a new context object.
// useReducer를 사용하려면 react로부터 아래와 같이 불러온다. useReducer는 reducer function을 사용할 수 있게 한다.
import { createContext, useReducer } from 'react';

// context object를 ThemeContext으로 export 한다.
export const ThemeContext = createContext();

// dispatch function에서 호출되는 함수.
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      // ...state의 color 값이 color: action.payload로 override 됨.
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

// children prop은 cildren 컴포넌트를 대표하는 것이다
// 이에 해당 컴포넌트는 다른 컴포넌트를 wrap 할 수 있게 되며,
// children prop을 컴포넌트 템플릿 내에서 랜더(render)할 수 있게 된다.
// 여기에서는 App.js의 전체 요소를 children 요소로 가져오는 것이다.
export function ThemeProvider({ children }) {
  //? reducer function 역할
  // reducer function which is going to be responsible for updating our state and keeping all of that update logic together in one place.
  // And it also lets us specify an initial state value as well.
  //? reducer function 사용법
  // 1. first argumen로 함수의 이름을 작성한다.
  // 2. second argument로 initial state를 입력한다.
  // useState와 같이 state는 초기값, dispatch는 값을 변경할 때 사용한다.
  const [state, dispatch] = useReducer(themeReducer, {
    color: 'blue',
  });

  const changeColor = (color) => {
    //? dispatch 사용법
    // dispatch function takes in an object that's an argument which is referred to as the dispatch action.
    // on the action object, we can specify two properties a type property and a payload property.
    // 1. The type property basically describes the type of state change we want to make.
    // 2. The payload is any data we want to base the state change on.
    //? dispatch 데이터가 전달되는 곳
    // When we use this dispatch function, React looks at the reducer function associated
    // with that dispatch, and he finds our 'themeReducer' function and then it fires that function to make the state change inside it.
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  // Context Api를 별도의 함수로 만드는 이유는 커스텀 로직을 추가할 수 있기 때문이다.
  return (
    // ThemeContext.Provider는 컴포넌트이다. 함수형 React에서 Provider를 붙여줘야한다.
    // 해당 컴포넌트는 context value를 제공하는 컴포넌트 tree를 warp할 수 있다.
    // index.js에서 ThemeProvider로 App.js warp하였기 때문에 전체 컴포넌트에서 color: 'blue'값을 사용할 수 있다.

    //? reducer에 대한 설명
    // Context의 State를 관리하기 위한 다양한 방법이 있다. 그중 하나가 reducer이다.
    // a reducer is just a function, and it's a way of working with state.
    // reduces makes it easier to work with multiple bits of related state that can be updated in several
    // a reducer function, which is a single function that encapsulates all the logic
    // We might need to update some state values so it keeps everything together in one place, makes it easy
    // to update, stay in multiple ways at once, and it's a much more reliable way of handling slightly more complex states.
    // 일반적으로 간단한 상태관리는 useState를 사용하며, 복잡한 상태관리에는 reducer를 사용한다.

    // ...state = color, changeColor / Navbar에서 디스트럭쳐링할 수 있다.
    // Navbar에서 pink 값이 전달된 이후에 ...state로 다시한번 값이 아래로 전달된다.
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
