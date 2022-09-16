import React from "react";
import { useState, useEffect } from "react";
import './App.css';


const API_URL = 'https://www.omdbapi.com/?apikey=381e33da';

const App = () => {
  // useState 훅 사용법
  // destructive 문법을 이용해 state 변수와, 그 변수의 setter 함수를 받는다.
  // useState() 내의 인자는 초기화 값을 의미한다.
  // const [counter, setCounter] = useState(0);

  // setter 함수에는 값을 넣을 수도 있고, 콜백함수를 넣을 수도 있따.
  // 콜백함수를 넣을 때 첫번째 인자는 기존 값이 된다. 실무에서는 prev변수이름 형식으로 만들어서 가독성있게 나타낸다.
  
  // useEffect를 이렇게 설정하면 해당 컴포넌트가 렌더링 될때마다 호출된다.
  // useEffect(() => {
  //   setCounter(100);
  // });
  // 이는 dependency array 를 설정함으로써 해결할 수 있다.
  // useEffect(() => {
  //   setCounter(100);
  // }, []);

  const searchMovies = async (title:string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  });


  return (
    <div className="app">
      <h1 className="title">Cool Movie App</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies!"
          onChange={() => {}}
        />
      </div>
    </div>
  );
}

export default App;