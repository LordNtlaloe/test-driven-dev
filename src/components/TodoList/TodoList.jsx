import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({todos}) {
  return (
    <div>{todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
    ))}</div>
  )
}
