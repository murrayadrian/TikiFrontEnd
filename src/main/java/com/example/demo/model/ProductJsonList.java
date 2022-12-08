package com.example.demo.model;

import java.time.LocalDateTime;

public class ProductJsonList {

	private Long id;
	private String name;
	private String description;
	private double price;
	private String image;
	private String brand;
	private String madeIn;
	private LocalDateTime createdDate;
	private int availableQuantity;
	private Long categorySubId;
//	private CategoryJsonForProductList category;
	public Long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getDescription() {
		return description;
	}
	public double getPrice() {
		return price;
	}
	public String getImage() {
		return image;
	}
	public String getBrand() {
		return brand;
	}
	public String getMadeIn() {
		return madeIn;
	}
	public LocalDateTime getCreatedDate() {
		return createdDate;
	}
	public int getAvailableQuantity() {
		return availableQuantity;
	}
	public Long getCategorySubId() {
		return categorySubId;
	}
	@Override
	public String toString() {
		return "ProductJsonList [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price
				+ ", image=" + image + ", brand=" + brand + ", madeIn=" + madeIn + ", createdDate=" + createdDate
				+ ", availableQuantity=" + availableQuantity + ", categorySubId=" + categorySubId + "]";
	}
	
	

}
