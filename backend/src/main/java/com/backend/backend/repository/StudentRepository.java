package com.backend.backend.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.backend.backend.model.StudentModel;

@Mapper
public interface StudentRepository {

	public int addStudent(StudentModel stModel);
	public int deleteStudent(int st_id);
	public List<StudentModel> studentList();
	public StudentModel studentById(String name);
	public StudentModel studentByNrc(String nrc);
	public int editStudent(StudentModel stModel);
}
