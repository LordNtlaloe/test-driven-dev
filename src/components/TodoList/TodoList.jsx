import React from 'react'

export default function TodoList({todos}) {
  return (
    <div>{todos.map((todo, index) => (
        <div key={index}>{todo.title}</div>
    ))}</div>
  )
}
