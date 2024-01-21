import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { deleteStudent } from "../service/studentDataService";

const StudentDetails = ({ searchData }) => {
  const [openModal, setOpenModal] = useState(false);

  // Delete Student Data
  const DeleteStData = async () => {
    await deleteStudent(searchData.st_id);
    setOpenModal(false);
  };

  return (
    <>
      <Button className="bg-blue-500" onClick={() => setOpenModal(true)}>
        Search
      </Button>
      {(searchData.name != "" && searchData.name != undefined) ||
      (searchData.nrc != "" && searchData.nrc != undefined) ? (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Student View</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <span className="me-7 font-medium text-lg">Name</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">{searchData.name}</span>
                </span>
              </div>
              <div>
                <span className="me-11 font-medium text-lg">Age</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">{searchData.age}</span>
                </span>
              </div>
              <div>
                <span className="me-10 font-medium text-lg">NRC</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">{searchData.nrc}</span>
                </span>
              </div>
              <div>
                <span className="me-6 font-medium text-lg">Phone</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">{searchData.phone}</span>
                </span>
              </div>
              <div>
                <span className="me-8 font-medium text-lg">Email</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">{searchData.email}</span>
                </span>
              </div>
              <div>
                <span className="me-3 font-medium text-lg">Address</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">{searchData.address}</span>
                </span>
              </div>
            </div>
          </Modal.Body>
          <hr />
          <div className="flex justify-around my-5">
            {searchData.name != "" || searchData.nrc != "" ? (
              <button
                className="px-3 rounded-lg text-white bg-red-600 hover:bg-red-500"
                onClick={() => DeleteStData()}
              >
                Delete
              </button>
            ) : (
              <button className="px-3 rounded-lg text-white bg-red-600 hover:bg-red-500">
                Delete
              </button>
            )}
            <div>
              <Button
                className="bg-slate-600"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Student View</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <span className="me-7 font-medium text-lg">Name</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">No Data</span>
                </span>
              </div>
              <div>
                <span className="me-11 font-medium text-lg">Age</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">NO Data</span>
                </span>
              </div>
              <div>
                <span className="me-10 font-medium text-lg">NRC</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">No Data</span>
                </span>
              </div>
              <div>
                <span className="me-6 font-medium text-lg">Phone</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">No Data</span>
                </span>
              </div>
              <div>
                <span className="me-8 font-medium text-lg">Email</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">No Data</span>
                </span>
              </div>
              <div>
                <span className="me-3 font-medium text-lg">Address</span>
                <span className="text-md">
                  &gt;&gt; <span className="ms-2">No Data</span>
                </span>
              </div>
            </div>
          </Modal.Body>
          <hr />
          <div className="flex justify-center my-5">
            <div>
              <Button
                className="bg-slate-600"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default StudentDetails;
