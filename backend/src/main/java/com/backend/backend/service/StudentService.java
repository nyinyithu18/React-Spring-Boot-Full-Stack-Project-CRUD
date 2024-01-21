package com.backend.backend.service;

import java.util.List; 

import com.backend.backend.model.StudentModel;

public interface StudentService {

	public int addStudent(StudentModel stModel);
	public int deleteStudent(int st_id);
	public List<StudentModel> studentList();
	public StudentModel studentById(String name);
	public StudentModel studentByNrc(String nrc);
	public int editStudent(StudentModel stModel);
}
