import React from 'react';
import {MoviesApi} from './api/moviesApi'
const App = () => {
  const obj = {
    name: `迪力巴巴奥特曼第${888}部`,
    types: ["浪"],
    time: 169,
    description: `迪力巴巴奥特曼奥特曼第${888}部最好看`,
    isComing: true,
    poster: 111,
    areas: ["中国大陆"]
   }
   MoviesApi.add(obj).then(data => {
    console.log(data); 
   })
  return (
    <div className="App">你是猪
    </div>
  );
}

export default App;
