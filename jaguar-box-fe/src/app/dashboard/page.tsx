import React from "react";
import Sidebar from "../components/Sidebar";
import { Dashboard } from "../components/Dashboard";

const page = () => {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default page;
