package com.backend.backend.service.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.backend.model.StudentModel;
import com.backend.backend.repository.StudentRepository;
import com.backend.backend.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService{

	@Autowired
	private StudentRepository stRepository;
	
	@Override
	public int addStudent(StudentModel stModel) {
		return stRepository.addStudent(stModel);
	}

	@Override
	public int deleteStudent(int st_id) {
		return stRepository.deleteStudent(st_id);
	}

	@Override
	public List<StudentModel> studentList() {
		return stRepository.studentList();
	}

	@Override
	public StudentModel studentById(String name) {
		return stRepository.studentById(name);
	}
	
	@Override
	public StudentModel studentByNrc(String nrc) {
		return stRepository.studentByNrc(nrc);
	}

	@Override
	public int editStudent(StudentModel stModel) {
		return stRepository.editStudent(stModel);
	}

}
