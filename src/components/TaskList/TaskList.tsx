import { Todo } from '../@type/typeTodo.type';

type props = {
  title: string;
  todoList: Todo[];
  handleTaskList: (id: string, done: boolean) => void;
  handleRemove: (id: string) => void
  handleClickEdit: (name: string | undefined, id: string) => void,
}

export default function TaskList(props: props) {
  const { title, todoList, handleTaskList, handleRemove, handleClickEdit} = props;
  return (
    <div className="mt-4">
      <h1 className="font-bold text-xl">{title}</h1>
      {todoList.length > 0 &&
        todoList.map((item) => (
          <div
            className="content-wrapper flex gap-4 items-center m-1"
            key={item.id}
          >
            <div className="content-title flex flex-1 gap-2">
              <input
                className="w-[20px]"
                type="checkbox"
                name=""
                id=""
                checked={item.done}
                onChange={(e) => handleTaskList(item.id, e.target.checked)}
              />
              <span
                className={`flex-1 ${
                  item.done ? 'line-through text-red-500' : ''
                }`}
              >
                {item.name}
              </span>
            </div>
            <div className="content-feature flex gap-2">
              <button className="border-2 rounded-md border-gray-400 p-2" onClick={() => {handleClickEdit(item.name, item.id)}}>
                ✏
              </button>
              <button className="border-2 rounded-md border-gray-400 p-2" onClick={() => {handleRemove(item.id)}}>
                🚮
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
