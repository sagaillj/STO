import React from 'react';
import { Button } from '@/components/ui/Button';
import { dummyProjects, dummyUsers } from '@/lib/dummyData';
import { formatDate } from '@/lib/utils';
import { FaCheckCircle, FaCircle, FaClock } from 'react-icons/fa';
import { Task, User } from '@/types';
import { EditionBadge } from '@/components/EditionBadge';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'in_progress':
        return 'text-yellow-500';
      case 'not_started':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className={getStatusColor(status)} />;
      case 'in_progress':
        return <FaClock className={getStatusColor(status)} />;
      case 'not_started':
        return <FaCircle className={getStatusColor(status)} />;
      default:
        return <FaCircle className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        {getStatusIcon(task.status)}
      </div>
      <p className="text-gray-600 mb-3">{task.description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <img
            src={task.assignedTo.avatar || '/avatars/default.jpg'}
            alt={task.assignedTo.name}
            className="w-6 h-6 rounded-full mr-2"
          />
          <span>{task.assignedTo.name}</span>
        </div>
        {task.dueDate && <span>Due: {formatDate(task.dueDate)}</span>}
      </div>
    </div>
  );
};

const ProjectPage: React.FC = () => {
  const project = dummyProjects[0];
  const completedTasks = project.tasks.filter(task => task.status === 'completed').length;
  const totalTasks = project.tasks.length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <EditionBadge edition="Personal" />
        <p className="text-gray-600">{project.description}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Progress</h2>
        <div className="flex items-center justify-between mb-2">
          <span>
            {completedTasks} of {totalTasks} tasks completed
          </span>
          <span className="text-gray-500">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 rounded-full h-2"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <Button>Add New Task</Button>
      </div>

      <div className="grid gap-4">
        {project.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage; 