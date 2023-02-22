package com.example.demo.model;

public class ProductResponse {

	private Long id;

	private String name;

	private double price;

	private String image;

	private int qtySold;
	
	private int discountRate;

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public double getPrice() {
		return price;
	}

	public String getImage() {
		return image;
	}

	public int getQtySold() {
		return qtySold;
	}

	public int getDiscountRate() {
		return discountRate;
	}

	@Override
	public String toString() {
		return "ProductResponse [id=" + id + ", name=" + name + ", price=" + price + ", image=" + image + ", qtySold="
				+ qtySold + ", discountRate=" + discountRate + "]";
	}
}
