import React from "react";
import Header from "./Header";
import StudentsList from "./StudentsList";
import { useParams } from "react-router";

const Home = () => {
  const name = useParams();
  //console.log(name.name);
  return (
    <>
      <Header />
      <StudentsList />
    </>
  );
};

export default Home;
