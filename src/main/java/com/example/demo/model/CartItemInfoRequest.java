package com.example.demo.model;

public class CartItemInfoRequest {
	private Long cartId;

	private Long productId;

	private int quantity;
	
	
	
	public CartItemInfoRequest() {
	}

	public CartItemInfoRequest(Long cartId, Long productId, int quantity) {
		this.cartId = cartId;
		this.productId = productId;
		this.quantity = quantity;
	}

	public Long getCartId() {
		return cartId;
	}

	public Long getProductId() {
		return productId;
	}

	public int getQuantity() {
		return quantity;
	}

}
