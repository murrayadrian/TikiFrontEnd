package com.example.demo.model;

public class RemoveProductRequest {
	
	private Long cartId;
	
	private Long productId;
	
	
	public RemoveProductRequest() {
	}

	public RemoveProductRequest(Long cartId, Long productId) {
		this.cartId = cartId;
		this.productId = productId;
	}

	public Long getCartId() {
		return cartId;
	}

	public Long getProductId() {
		return productId;
	}
}
