import './App.css';
import { useEffect, useState } from 'react';
import Header from "./My components/Header";
import Todos from "./My components/Todos";
import Footer from "./My components/Footer";
import Addtodo from './My components/Addtodo';
import About from './My components/About';
import { Routes, Route } from 'react-router-dom';
function App() {


  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addtodo = (title, desc) => {


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

 
    setCount((prevTodos) => [...prevTodos, Mytodo]);
  };

  const Ondelete = (todo) => {

    setCount((prevTodos) => prevTodos.filter((e) => e !== todo));
  };

  const [todos, setCount] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="Todo List" />

      <Routes>

        <Route index element={
          <>
            <Addtodo addtodo={addtodo} />
            <Todos todos={todos} Ondelete={Ondelete} />
          </>}>
        </Route>

        <Route exact path="/about" element={<About />} />

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
