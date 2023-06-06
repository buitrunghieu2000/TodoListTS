import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Todo } from './components/@type/typeTodo.type';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleCheck = (id: string, done: boolean) => {
    setTodoList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, done };
        }
        return item;
      });
    });
  };

  const doneTodo = todoList.filter((item) => item.done);

  const notDoneTodo = todoList.filter((item) => !item.done);

  const handleAddTodoList = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString(),
    };

    setTodoList((prev) => [...prev, todo]);
  };

  console.log(todoList);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="wrapper w-[500px] h-[700px] bg-slate-300 p-[20px]">
        <div className="container h-full rounded-md bg-white p-[20px] shadow-md">
          <h1 className="font-bold text-xl">To do list type script</h1>
          <TaskInput todo={handleAddTodoList} />
          <TaskList
            title="Finished"
            todoList={notDoneTodo}
            handleTaskList={handleCheck}
          />
          <TaskList
            title="Not Finished"
            todoList={doneTodo}
            handleTaskList={handleCheck}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
