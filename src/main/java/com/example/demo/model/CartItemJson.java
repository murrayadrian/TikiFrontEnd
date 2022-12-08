package com.example.demo.model;

import java.util.List;

public class CartItemJson {
	
	private int items;

	private ICart cartInfo;
	
	private IUserDetail userInfo;
	
	private List<ICartItemInfo> cartItemInfoList;

	
	
	public int getItems() {
		return items;
	}

	public ICart getCartInfo() {
		return cartInfo;
	}

	public IUserDetail getUserInfo() {
		return userInfo;
	}

	public List<ICartItemInfo> getCartItemInfoList() {
		return cartItemInfoList;
	}
}
