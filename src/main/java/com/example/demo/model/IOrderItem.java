package com.example.demo.model;

public class IOrderItem {
	
	private Long orderId;
	
	private Long productId;
	
	private String productName;
	
	private int quantity;
	
	private double productPrice;
	
	private double totalPrice;
	
	private double totalWeight;

	
	
	public Long getOrderId() {
		return orderId;
	}

	public Long getProductId() {
		return productId;
	}

	public String getProductName() {
		return productName;
	}

	public int getQuantity() {
		return quantity;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public double getTotalWeight() {
		return totalWeight;
	}

}
