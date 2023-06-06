import React, { useState } from 'react';
import TaskList from '../TaskList';

type TaskInputProps = {
  todo: (name: string) => void;
};

export default function TaskInput(props: TaskInputProps) {
  const { todo } = props;
  const [name, setName] = useState<string>('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(name.trim() == '')) {
      const trimName = name.trim();
      todo(trimName);
      setName('');
    } else {
      alert('nhap task vao');
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div className="mt-2">
      <form className="flex gap-2 mt-2" onSubmit={handleSubmit}>
        <input
          className="flex-1 border-2 rounded-md border-gray-400 p-1 px-4"
          type="text"
          name=""
          id=""
          placeholder="type todo"
          value={name}
          onChange={(e) => handleOnChange(e)}
        />
        <button className="border-2 border-black p-2 rounded-md text-purple">
          ➕
        </button>
      </form>
    </div>
  );
}
