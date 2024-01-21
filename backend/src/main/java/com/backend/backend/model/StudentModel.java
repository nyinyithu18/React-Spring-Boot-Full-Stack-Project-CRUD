package com.backend.backend.model;

import lombok.Getter;
import lombok.Setter;

public class StudentModel {

	@Getter
	@Setter
	private int st_id;
	
	@Getter
	@Setter
	private String name;
	
	@Getter
	@Setter
	private int age;
	
	@Getter
	@Setter
	private String nrc;
	
	@Getter
	@Setter
	private String phone;
	
	@Getter
	@Setter
	private String email;
	
	@Getter
	@Setter
	private String address;
}
