import React, { useEffect } from "react";
import { DataTable } from "../../components/dashboard/DataTable";
import { columns } from "../../components/dashboard/columns";
import taskList from "../../assets/data/taskList";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskList } from "../../redux/slices/taskSlice";

const Dashboard = () => {
  const tasks = useSelector((state) => state.task.value); // Get tasks from Redux state
  const dispatch = useDispatch();

  // useEffect hook to update the task list when the component mounts
  useEffect(() => {
    dispatch(updateTaskList(taskList)); // Dispatch action to update task list in Redux store
  }, [dispatch, tasks]);

  return (
    <main className="md:pl-56 h-full pt-[80px]">
       {/* Main content area with padding for top and left */}
       <div className="p-6">
        {/* Render DataTable component with columns and tasks data */}
        <DataTable columns={columns} data={tasks} />
      </div>
    </main>
  );
};

export default Dashboard;
