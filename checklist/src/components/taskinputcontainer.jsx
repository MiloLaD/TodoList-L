import React from 'react';
import TaskInput from './taskinput';

const TaskInputContainer = ({ taskKey, taskLists }) => {
  console.log('Selected Task Key:', taskKey);
  const selectedTaskList = taskLists[taskKey];

  return (
    <div className="mt-4 p-4 border rounded">
      {selectedTaskList ? (
        <div>
          <TaskInput key={taskKey} listName={selectedTaskList.name} />
        </div>
      ) : (
        <p className="text-gray-500">Sélectionnez une liste pour afficher les tâches.</p>
      )}
    </div>
  );
};

export default TaskInputContainer;
