import React from "react";
import { Button, Modal, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addStudent } from "../service/studentDataService";

const AddStudent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [nrc, setNrc] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const postStData = async () => {
    if (
      name != "" &&
      age > 4 &&
      age < 41 &&
      nrc != "" &&
      phone != "" &&
      email != "" &&
      address != ""
    ) {
      const stData = {
        name: name,
        age: age,
        nrc: nrc,
        phone: phone,
        email: email,
        address: address,
      };

      setName("");
      setAge('');
      setNrc("");
      setPhone("");
      setEmail("");
      setAddress("");
      // Create Student Data
      await addStudent(stData);
      onCloseModal();
    } else {
    }
  };

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Link to="/addStudent">
        <Button className="bg-blue-500" onClick={() => setOpenModal(true)}>
          Add <span className="ms-1 hidden md:block">Student</span>
        </Button>
      </Link>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <div className="flex justify-between mx-6">
          <span className="text-xl pt-2 font-medium text-gray-900 dark:text-white">
            Student Register
          </span>
          <Link to="/">
            <Modal.Header className="w-12" />
          </Link>
        </div>
        <hr />
        <Modal.Body>
          <div className="space-y-3">
            <div className="mt-2">
              <TextInput
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
            </div>

            <div className="mt-2">
              <TextInput
                placeholder="Age (5 - 40)"
                value={age || ''}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                required
              />
            </div>

            <div>
              <TextInput
                placeholder="NRC"
                value={nrc}
                onChange={(e) => setNrc(e.target.value)}
                type="text"
                required
              />
            </div>

            <div>
              <TextInput
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                required
              />
            </div>

            <div>
              <TextInput
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                required
              />
            </div>

            <div>
              <Textarea
                placeholder="Address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={2}
                type="textarea"
                required
              />
            </div>

            <Link to="/" className="w-full">
              <Button
                type="submit"
                onClick={() => postStData()}
                className="mt-3"
              >
                Create
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddStudent;
