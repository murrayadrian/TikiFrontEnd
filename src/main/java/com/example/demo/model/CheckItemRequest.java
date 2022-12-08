package com.example.demo.model;

public class CheckItemRequest {
	private Long cartId;

	private Long productId;
	
	private String shopName;
	
	
	
	public CheckItemRequest() {}

	public CheckItemRequest(Long cartId, Long productId, String shopName) {
		this.cartId = cartId;
		this.productId = productId;
		this.shopName = shopName;
	}

	public Long getCartId() {
		return cartId;
	}

	public Long getProductId() {
		return productId;
	}

	public String getShopName() {
		return shopName;
	}
}
