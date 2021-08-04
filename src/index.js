import React from 'react';
import ReactDOM from 'react-dom';

//app 컴포넌트를 임포트하여 사용함
//리액트는 <App />같은 표시를 컴포넌트로 인식 -> 반환 값을 화면에 그림
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

