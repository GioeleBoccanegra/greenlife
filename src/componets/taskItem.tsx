import { useState } from 'react';

type TaskItemProps = {
  task: string;
  onCheckboxChange: (isChecked: boolean) => void; // Prop definita correttamente
};

export const TaskItem: React.FC<TaskItemProps> = ({ task, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prev => {
      const newCheckedState = !prev;
      onCheckboxChange(newCheckedState); // Notifica la selezione della checkbox
      return newCheckedState;
    });
  };

  return (
    <div className="task-item">
      <h2>{task}</h2>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
};
