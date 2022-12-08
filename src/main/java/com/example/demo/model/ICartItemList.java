package com.example.demo.model;

public class ICartItemList {

	private Long cartId;

	private double totalPrice;

	private Long productId;

	private String productName;

	private String productImage;

	private double productPrice;

	private int quantity;

	private boolean check;
	

	public Long getCartId() {
		return cartId;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public Long getProductId() {
		return productId;
	}

	public String getProductName() {
		return productName;
	}

	public String getProductImage() {
		return productImage;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public int getQuantity() {
		return quantity;
	}

	public boolean isCheck() {
		return check;
	}
	
}
