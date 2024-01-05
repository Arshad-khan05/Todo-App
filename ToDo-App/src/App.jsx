import './App.css';
import { useEffect, useState } from 'react';
import Header from "./My components/Header";
import Todos from "./My components/Todos";
import Footer from "./My components/Footer";
import Addtodo from './My components/Addtodo';
function App() {


  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addtodo = (title, desc) => {
    console.log("Hey, I am adding todo!!");
    console.log(title);
    console.log(desc);

    let slno;
    if (todos.length === 0) {
      slno = 1;
    } else {
      slno = todos[todos.length - 1].slno + 1;
    }

    const Mytodo = {
      slno: slno,
      title: title,
      description: desc,
    };

    console.log(Mytodo);
    setCount((prevTodos) => [...prevTodos, Mytodo]);
  };

  const Ondelete = (todo) => {
    console.log("Delete button clicked ", todo);

    setCount((prevTodos) => prevTodos.filter((e) => e !== todo));
  };

  const [todos, setCount] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="Todo List" />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} Ondelete={Ondelete} />
      <Footer />
    </>
  );
}

export default App;
