import React, { useState } from 'react';
import Taskinput from './taskinput';
import Display from './display';
import TaskInputContainer from './taskinputcontainer';

const Home = () => {
  const [isCreatingList, setIsCreatingList] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [taskKey, setTaskKey] = useState(0);

  const createNewList = () => {
    setIsCreatingList(true);
  };

  const addList = () => {
    if (newListName.trim() !== '') {
      const newTaskInputInstance = {
        name: newListName,
        taskInput: (
          <Taskinput
          key={taskKey}
            listName={newListName} 
          />
        ),
      };
      setTaskKey(taskKey +1)
      setTaskList([...taskList, newTaskInputInstance]);
      setNewListName('');
      setIsCreatingList(false);
    }
  };
console.log(taskList)
  const handleListSelect = (taskKey) => {
    
    
  };

  return (
    <div className='bg-white rounded-lg p-8 max-w-xl shadow-md'>
      <h1 className='text-5xl text-center text-gray-800 mb-4'>To-Do List</h1>
      {isCreatingList ? (
        <div>
          <input
            type='text'
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder='Nom de la liste'
            className='text-3xl bg-gray-100 border rounded p-2 w-full mb-4'
          />
          <button onClick={addList} className='text-xl bg-blue-500 text-white p-2 rounded'>
            Créer la liste
          </button>
        </div>
      ) : (
        <div className='text-center'>
          <button
            onClick={createNewList}
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          >
            Créer une nouvelle liste
          </button>
        </div>
      )}

      <Display taskLists={taskList} onSelectList={handleListSelect} />
      
    </div>
  );
};

export default Home;
