import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faPencilAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams, Link, useHistory } from 'react-router-dom';

const Taskinput = () => {
  const { listName } = useParams();
  

  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskIndex, setEditedTaskIndex] = useState(-1);
  const [editedTask, setEditedTask] = useState('');

  const handleCheckboxChange = (index) => {
    const updatedIsChecked = [...isChecked];
    updatedIsChecked[index] = !updatedIsChecked[index];
    setIsChecked(updatedIsChecked);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTaskList([...taskList, newTask]);
      setIsChecked([...isChecked, false]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    const updatedIsChecked = [...isChecked];
    updatedIsChecked.splice(index, 1);
    setTaskList(updatedTaskList);
    setIsChecked(updatedIsChecked);
  };

  const handleEditTask = (index) => {
    setEditedTaskIndex(index);
    setEditedTask(taskList[index]);
    setIsEditing(true);
  };

  const handleFinishEditing = () => {
    if (editedTask.trim() !== '') {
      const updatedTaskList = [...taskList];
      updatedTaskList[editedTaskIndex] = editedTask;
      setTaskList(updatedTaskList);
    }
    setEditedTask('');
    setIsEditing(false);
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#0a192f]'>
      <div className='bg-white rounded-lg p-8 max-w-lg shadow-md'>
       
        <h2>{listName}</h2>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add a task'
          className='text-3xl bg-gray-100 border-3 rounded p-2'
        />

        <button className='text-xl' onClick={handleAddTask}>
          <FontAwesomeIcon icon={faPlus} /> Ajouter
        </button>

        <ul className="max-h-40 overflow-y-auto">
          {taskList.map((task, index) => (
            <li key={index} className="flex items-center justify-start p-2 border-b">
              <input
                type='checkbox'
                checked={isChecked[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <div className="flex-grow">
                {isChecked[index] ? <s>{task}</s> : task}
              </div>
              <button className="text-blue-500" onClick={() => handleEditTask(index)}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>

              <button onClick={() => handleRemoveTask(index)} className="text-red-500">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>
          ))}
        </ul>

        {isEditing && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-md w-1/2">
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                className="border-2 rounded p-2 mb-2 w-full"
              />
              <button onClick={handleFinishEditing} className="bg-blue-500 text-white py-2 px-4 rounded">
                Terminer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Taskinput;
