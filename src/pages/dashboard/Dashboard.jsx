import React, { useEffect } from "react";
import { DataTable } from "../../components/dashboard/DataTable";
import { columns } from "../../components/dashboard/columns";
import taskList from "../../assets/data/taskList";
import { useDispatch, useSelector } from "react-redux";
import { getTaskList } from "../../redux/slices/taskSlice";

const Dashboard = () => {
  const tasks = useSelector((state) => state.task.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskList(taskList));
  }, [dispatch, tasks]);

  return (
    <main className="md:pl-56 h-full pt-[80px]">
      <div className="p-6">
        <DataTable columns={columns} data={tasks} />
      </div>
    </main>
  );
};

export default Dashboard;
