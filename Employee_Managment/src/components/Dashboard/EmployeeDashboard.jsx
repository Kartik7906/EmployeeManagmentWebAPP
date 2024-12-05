import React from 'react';
import Header from '../Others/Header';
import TaskNumberCompontn from '../Others/TaskNumberCompontn';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className="p-5 sm:p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={changeUser} data={data} />
      <TaskNumberCompontn data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
