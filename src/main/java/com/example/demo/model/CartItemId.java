package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CartItemId {
	
	@JsonProperty
	private Long cartId;

	public Long getCartId() {
		return cartId;
	}
}
