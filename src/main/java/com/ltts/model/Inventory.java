package com.ltts.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="inventory")
public class Inventory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="name")
	private String name;
	@Column(name="serialNo")
	private String serialNo;
	@Column(name="description")
	private String description;
	
	
	public Inventory() {
		
	}
	public Inventory(String name, String serialNo, String description) {
		super();
		this.name = name;
		this.serialNo = serialNo;
		this.description = serialNo;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSerialNo() {
		return serialNo;
	}
	public void setSerialNo(String serialNo) {
		this.serialNo = serialNo;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Inventory [id=" + id + ", name=" + name + ", serialNo=" + serialNo + ", description=" + description
				+ "]";
	}
	
}
