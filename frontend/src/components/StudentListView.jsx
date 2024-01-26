import React, { useEffect, useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate } from "react-router";
import { api } from "../api/urlResourses";

const StudentListView = () => {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [name, setName] = useState([]);

  // Filter Student Data
  useEffect(() => {
          api.get("/studentList")
          .then((res) => {
            setName(res.data);
            setDataList(res.data); 
          })
          .catch((err) => console.log(err));
  }, [])

  return (
    <div className="w-screen h-full">
      <div className="m-3 md:mx-10 lg:mx-12 md: p-3 md:p-6 flex justify-center">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
          WELCOM TO STUDENT MANAGEMENT SYSTEM
        </h1>
      </div>
      <div className="flex justify-around">
      <Button
        onClick={() => navigate("/")}
        className="btn bg-blue-500 ms-4 md:ms-10"
      >
        Back
      </Button>
      <TextInput
        className="form-control"
        type="text"
        onChange={(e) =>
          setDataList(
            name.filter(
              (f) =>
                f.name.toLowerCase().includes(e.target.value) ||
                f.nrc.toLowerCase().includes(e.target.value)
            )
          )
        }
        placeholder="Name.... or NRC...."
      />
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
              </tr>
            </thead>
            <tbody>
              {dataList.length > 0 ? (
                dataList.map((datas, index) => (
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
    </div>
  );
};

export default StudentListView;
