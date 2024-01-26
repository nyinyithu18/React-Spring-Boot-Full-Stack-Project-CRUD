import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import EditStudent from "./EditStudent";
import { deleteStudent } from "../service/studentDataService";
import AddStudent from "./AddStudent";
import { Link } from "react-router-dom";
import { api } from "../api/urlResourses";

const StudentsList = () => {
  const [data, setData] = useState([]);

  // Fetch Student Data List
  useEffect(() => {
      api.get("http://localhost:8080/studentList")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  // Delete Student Data
  const deleteStData = async (st_id) => {
    await deleteStudent(st_id);
  };

  if (data) {
    return (
      <>
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
          </div>
        </div>
        <div className="flex flex-col w-full h-full overflow-x-auto">
          <div className="mx-5 lg:mx-10 py-2 sm:px-6 lg:px-8">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-slate-200 font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    No.
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Age
                  </th>
                  <th scope="col" className="px-6 py-4">
                    NRC
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((datas, index) => (
                    <tr
                      key={datas.st_id}
                      className="border-b transition duration-100 ease-in-out border-neutral-300 bg-slate-100 hover:bg-slate-200"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 font-normal py-4">
                        {datas.name}
                      </td>
                      <td className="whitespace-nowrap px-6 font-normal py-4">
                        {datas.age}
                      </td>
                      <td className="whitespace-nowrap px-6 font-normal py-4">
                        {datas.nrc}
                      </td>
                      <td className="whitespace-nowrap px-6 font-normal py-4">
                        {datas.phone}
                      </td>
                      <td className="whitespace-nowrap px-6 font-normal py-4">
                        {datas.email}
                      </td>
                      <td className="whitespace-nowrap px-6 font-normal py-4">
                        {datas.address}
                      </td>
                      <td className="whitespace-nowrap px-6 font-normal py-4 flex">
                        <EditStudent stNrc={datas.nrc} />

                        <Button
                          type="button"
                          onClick={() => deleteStData(datas.st_id)}
                          className="ms-2 me-2 btn bg-red-500"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-b transition duration-100 ease-in-out border-neutral-300 bg-slate-100 hover:bg-slate-200">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      NO Data
                    </td>
                    <td className="whitespace-nowrap px-6 font-normal py-4">
                      NO Data
                    </td>
                    <td className="whitespace-nowrap px-6 font-normal py-4">
                      NO Data
                    </td>
                    <td className="whitespace-nowrap px-6 font-normal py-4">
                      NO Data
                    </td>
                    <td className="whitespace-nowrap px-6 font-normal py-4">
                      NO Data
                    </td>
                    <td className="whitespace-nowrap px-6 font-normal py-4">
                      NO Data
                    </td>
                    <td className="whitespace-nowrap px-6 font-normal py-4">
                      No Data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
};

export default StudentsList;
