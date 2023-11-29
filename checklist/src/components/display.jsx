import React, { useState } from 'react';
import TaskInputContainer from './taskinputcontainer';

const Display = ({ taskLists, onSelectList }) => {
  const [selectedListKey, setSelectedListKey] = useState('');

  const handleListChange = (e) => {
    const listKey = e.target.value;
    setSelectedListKey(listKey);
    onSelectList(listKey);
  };

  return (
    <div className='bg-white rounded-lg p-8 max-w-xl shadow-md'>
      <p className='text-gray-600 text-lg my-2'>Vous avez {taskLists.length} listes de tâches actives.</p>
      <div className='flex justify-center space-x-4'>
        <select value={selectedListKey} onChange={handleListChange} className='p-2 border rounded'>
          <option value=''>Sélectionnez une liste</option>
          {taskLists.map((taskList, index) => (
            <option key={index} value={index}>
              {taskList.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <TaskInputContainer taskKey={selectedListKey} taskLists={taskLists} />
      </div>
    </div>
  );
};

export default Display;
