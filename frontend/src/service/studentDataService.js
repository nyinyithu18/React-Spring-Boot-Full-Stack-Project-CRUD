import { api } from "../api/urlResourses";

export const studentList = () => {
  return api.get("/studentList");
};

export const studentById = (name) => {
  //console.log(name);
  return api.get(`/studentById?name=${name}`);
};

export const studentByNrc = (nrc) => {
  //console.log(name);
  return api.get(`/studentByNrc?nrc=${nrc}`);
};

export const addStudent = (data) => {
  return api.post("/addStudent", data);
};

export const deleteStudent = (st_id) => {
  return api.delete(`/deleteStudent/${st_id}`);
};

export const editStudent = (data) => {
  //console.log(data);
  return api.put("/editStudent", data);
};
