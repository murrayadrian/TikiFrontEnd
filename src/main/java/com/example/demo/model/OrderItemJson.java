package com.example.demo.model;

public class OrderItemJson {
	public Long orderId;
	
	public Long productId;
	
	public String productName;
	
	public int quantity;
	
	public double productPrice;
	
	public double totalPrice;
	
	public double totalWeight;

	
	
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

	public double getTotalPrice() {
		return totalPrice;
	}

	public double getTotalWeight() {
		return totalWeight;
	}

	public double getProductPrice() {
		return productPrice;
	}

	@Override
	public String toString() {
		return "OrderItemJson [orderId=" + orderId + ", productId=" + productId + ", productName=" + productName
				+ ", quantity=" + quantity + ", productPrice=" + productPrice + ", totalPrice=" + totalPrice
				+ ", totalWeight=" + totalWeight + "]";
	}
	
}
