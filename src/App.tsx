
import './App.css';
import { Component, ManPropsType } from './Component';

function App() {
  
let man: ManPropsType = {
  name: 'Lera',
  age: 24,
  lessons: [{ title: '1' }, { title: '2' }]
}




  return (
    <Component age={man.age} name={man.name} lessons={man.lessons}/>
  )
}

export default App;
