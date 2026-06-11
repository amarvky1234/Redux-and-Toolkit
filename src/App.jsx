import React from "react"
import TodoList from "./features/todos/TodoList"
import RatingApp from "./features/ratingapp/RatingApp";
import Counter from "./features/counter/Counter";

function App() {
  return(
    <div>
      <TodoList></TodoList>
      <RatingApp></RatingApp>
      <Counter></Counter>
    </div>
  )
}

export default App;
