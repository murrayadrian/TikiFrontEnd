package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShopCheckRequest {
	@JsonProperty
	private Long cartId;
	
	@JsonProperty
	private String shopName;

	public Long getCartId() {
		return cartId;
	}

	public String getShopName() {
		return shopName;
	}
	

}
