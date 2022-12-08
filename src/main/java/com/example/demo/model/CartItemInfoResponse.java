package com.example.demo.model;

public class CartItemInfoResponse {
	
	private Long cartId;
	private Long productId;
	private String productName;
	private double productPrice;
	private int orderQuantity;
	private double totalPrice;
	private boolean isCheck;
	
	
	
	public Long getCartId() {
		return cartId;
	}
	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}
	public int getOrderQuantity() {
		return orderQuantity;
	}
	public void setOrderQuantity(int orderQuantity) {
		this.orderQuantity = orderQuantity;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public boolean isCheck() {
		return isCheck;
	}
	public void setCheck(boolean isCheck) {
		this.isCheck = isCheck;
	}
	@Override
	public String toString() {
		return "CartItemInfoResponse [cartId=" + cartId + ", productId=" + productId + ", productName=" + productName
				+ ", productPrice=" + productPrice + ", orderQuantity=" + orderQuantity + ", totalPrice=" + totalPrice
				+ ", isCheck=" + isCheck + "]";
	}
	
	
}
