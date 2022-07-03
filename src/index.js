import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Context API 객체를 생성한 컴포넌트이다.
import { ThemeProvider } from './context/ThemeContext';

//

ReactDOM.render(
  <React.StrictMode>
    {/* Context API 컴포넌트를 root컴포넌트인 App을 전체로 감싸주었다. */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
