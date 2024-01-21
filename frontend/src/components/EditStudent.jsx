import React from "react";
import { Button, Modal, Label } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { editStudent, studentByNrc } from "../service/studentDataService";

const EditStudent = (stNrc) => {
  const [openModal, setOpenModal] = useState(false);
  const [stData, setStData] = useState({
    name: "",
    age: 0,
    nrc: "",
    phone: "",
    email: "",
    address: "",
  });

  // Student By NRC
  const StudentById = async () => {
    setOpenModal(true);
    const student = await studentByNrc(stNrc.stNrc);
    setStData(student.data);
    //console.log(student.data);
  };

  function handle(e) {
    const eStData = { ...stData };
    eStData[e.target.id] = e.target.value;
    setStData(eStData);
  }

  // Edit Student Data
  const EditStData = async () => {
    const stEdidData = {
      st_id: stData.st_id,
      name: stData.name,
      age: stData.age,
      nrc: stData.nrc,
      phone: stData.phone,
      email: stData.email,
      address: stData.address,
    };

    await editStudent(stEdidData);
    onCloseModal();
  };

  function onCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <Link to="/editStudent">
        <Button className="bg-blue-500" onClick={() => StudentById()}>
          Edit
        </Button>
      </Link>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <div className="flex justify-between mx-6">
          <span className="text-xl pt-2 font-medium text-gray-900 dark:text-white">
            Edit Student
          </span>
          <Link to="/">
            <Modal.Header className="w-12" />
          </Link>
        </div>
        <hr />
        <Modal.Body>
          <div className="space-y-3">
            <div className="mt-2 flex">
              <div className="border rounded-l-md ps-3 pe-5 pt-1 bg-slate-100">
                <Label htmlFor="name" value="Name" className="" />
              </div>
              <input
                id="name"
                value={stData.name}
                onChange={(e) => handle(e)}
                type="text"
                className="w-full border-slate-300 rounded-r-md"
                required
              />
            </div>

            <div className="mt-2 flex">
              <div className="border rounded-l-md ps-3 pe-8 pt-1 bg-slate-100">
                <Label htmlFor="Age" value="Age" className="" />
              </div>
              <input
                id="Age"
                value={stData.age}
                onChange={(e) => handle(e)}
                type="number"
                min="5"
                max="40"
                className="w-full border-slate-300 rounded-r-md"
                required
              />
            </div>

            <div className="mt-2 flex">
              <div className="border rounded-l-md ps-3 pe-7 pt-1 bg-slate-100">
                <Label htmlFor="nrc" value="NRC" className="" />
              </div>
              <input
                id="nrc"
                value={stData.nrc}
                onChange={(e) => handle(e)}
                type="text"
                className="w-full border-slate-300 rounded-r-md"
                required
              />
            </div>

            <div className="mt-2 flex">
              <div className="border rounded-l-md ps-3 pe-4 pt-1 bg-slate-100">
                <Label htmlFor="phone" value="Phone" className="" />
              </div>
              <input
                id="phone"
                value={stData.phone}
                onChange={(e) => handle(e)}
                type="text"
                className="w-full border-slate-300 rounded-r-md"
                required
              />
            </div>

            <div className="mt-2 flex">
              <div className="border rounded-l-md ps-3 pe-5 pt-1 bg-slate-100">
                <Label htmlFor="email" value="Email" className="" />
              </div>
              <input
                id="email"
                value={stData.email}
                onChange={(e) => handle(e)}
                type="text"
                className="w-full border-slate-300 rounded-r-md"
                required
              />
            </div>

            <div className="mt-2 flex">
              <div
                className="border rounded-l-md ps-2 pe-2 bg-slate-100"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Label htmlFor="address" value="Address" />
              </div>
              <textarea
                id="address"
                value={stData.address}
                onChange={(e) => handle(e)}
                type="text"
                className="w-full border-slate-300 rounded-r-md"
                required
              />
            </div>

            <Link to="/" className="w-full">
              <Button
                type="button"
                onClick={() => EditStData()}
                className="mt-3"
              >
                Update
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditStudent;
