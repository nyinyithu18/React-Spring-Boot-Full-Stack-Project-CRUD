import React, { useEffect, useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import AddStudent from "./AddStudent";
import {
  studentById,
  studentByNrc,
  studentList,
} from "../service/studentDataService";
import StudentDetails from "./StudentDetails";

const Header = () => {
  const [name, setName] = useState("");
  const [vData, setVData] = useState({});
  const [dataList, setDataList] = useState([]);

  const getDataList = async () => {
    const res = await studentList();
    setDataList(res.data);
  };

  const Search = () => {
    dataList.map((data) => {
      name == data.name
        ? SearchByName()
        : name == data.nrc
        ? SearchByNrc()
        : Nodata();
    });
  };

  const Nodata = () => {
    setVData({});
    setName("");
  };

  const SearchByName = async () => {
    const searchByName = await studentById(name);
    setVData(searchByName.data);
    setName("");
  };

  const SearchByNrc = async () => {
    const searchByNrc = await studentByNrc(name);
    setVData(searchByNrc.data);
    setName("");
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div>
      <div className="m-3 md:mx-10 lg:mx-12 md: p-3 md:p-6 flex justify-center">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
          WELCOM TO STUDENT MANAGEMENT SYSTEM
        </h1>
      </div>
      <div className="flex justify-around mt-6">
        <AddStudent />

        <Link to="/studentListView">
          <Button type="button" className="btn bg-blue-500">
            ALL <span className="ms-1 hidden md:block">Student</span>
          </Button>
        </Link>

        <div className="flex">
          <TextInput
            type="search"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name.... or NRC...."
          />
          <span onClick={() => Search()} className="ms-2">
            <StudentDetails searchData={vData} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
