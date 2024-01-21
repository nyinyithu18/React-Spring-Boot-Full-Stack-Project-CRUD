package com.backend.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.model.StudentModel;
import com.backend.backend.service.serviceimpl.StudentServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

	@Autowired
	private StudentServiceImpl stServiceImpl;
	
	@PostMapping(value = "addStudent", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int addStudent(@RequestBody StudentModel stModel){
		return stServiceImpl.addStudent(stModel);
	}
	
	@RequestMapping(value = "deleteStudent/{st_id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int deleteStudent(@PathVariable ("st_id") String st_id) {
		int stId = Integer.parseInt(st_id);
		return stServiceImpl.deleteStudent(stId);
	}
	
	@RequestMapping(value = "studentList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<StudentModel> studentList(){
		return stServiceImpl.studentList();
	}
	
	@RequestMapping(value = "studentById", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public StudentModel studentById(@RequestParam (name = "name")String name) {
		return stServiceImpl.studentById(name);
	}
	
	@RequestMapping(value = "studentByNrc", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public StudentModel studentByNrc(@RequestParam (name = "nrc")String nrc) {
		return stServiceImpl.studentByNrc(nrc);
	}
	
	@RequestMapping(value = "/editStudent", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int editStudent(@RequestBody StudentModel stModel) {
		return stServiceImpl.editStudent(stModel);
	}
}
