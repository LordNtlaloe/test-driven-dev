import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [ todos, setTodos ] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => 
        response.json()
      )
      setTodos(result.slice(0, 5))
      setLoading(false)
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <h1 className='header'>The Ultimate To Do List</h1>
      {loading ? 'Loading' : <TodoList todos={todos} />}
    </div>
  );
}

export default App;
