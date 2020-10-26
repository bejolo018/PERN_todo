import { Fragment } from 'react'
import './App.css';
import InputTodo from './Components/InputTodo';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
