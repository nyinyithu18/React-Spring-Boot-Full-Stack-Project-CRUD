import React from "react";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import StudentListView from "./components/StudentListView";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addStudent" element={<Home />} />
        <Route path="/editStudent" element={<Home />} />
        <Route path="/studentListView" element={<StudentListView />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
