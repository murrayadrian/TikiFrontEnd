package com.example.demo.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.model.CartItemId;
import com.example.demo.model.CartItemInfoRequest;
import com.example.demo.model.CartItemJson;
import com.example.demo.model.ChangeQuantityResponse;
import com.example.demo.model.CheckItemRequest;
import com.example.demo.model.ICartItemList;
import com.example.demo.model.IOrderItem;
import com.example.demo.model.RemoveProductRequest;
import com.example.demo.model.OrderJsonRequest;
import com.example.demo.model.ShopCheckRequest;
import com.example.demo.model.FinalPriceResponse;
import com.example.demo.util.HttpBase;

@Component("CartService")
public class CartService {
	
	public CartItemJson getCartItemJson(Long cartId) {
		String httpUrl = String.format("http://localhost:8888/tiki/api/cart/getAllCartItem/%d", cartId);
		HttpBase<CartItemJson, CartItemJson> httpBase = new HttpBase<CartItemJson, CartItemJson>();
		CartItemJson cartItemJson = httpBase.getFromAPI(httpUrl, CartItemJson.class);
		return cartItemJson;
	}
	
	public ChangeQuantityResponse changeQuantity(CartItemInfoRequest cartItemInfoRequest) {
		String httpUrl = "http://localhost:8888/tiki/api/cart/changeQuantity";
		HttpBase<CartItemInfoRequest, ChangeQuantityResponse> httpBase = new HttpBase<CartItemInfoRequest, ChangeQuantityResponse>();
		ChangeQuantityResponse response = httpBase.postToAPI(cartItemInfoRequest,httpUrl, ChangeQuantityResponse.class);
		return response;
	}
	
	public FinalPriceResponse removeItem(RemoveProductRequest removeProductRequest) {
		String httpUrl = "http://localhost:8888/tiki/api/cart/removeProductFromCart";
		HttpBase<RemoveProductRequest, FinalPriceResponse> httpBase = new HttpBase<RemoveProductRequest, FinalPriceResponse>();
		FinalPriceResponse response = httpBase.deleteToAPI(removeProductRequest,httpUrl, FinalPriceResponse.class);
		return response;
	}
	public FinalPriceResponse checkItem(CheckItemRequest checkItemRequest) {
		String httpUrl = "http://localhost:8888/tiki/api/cart/checkItem";
		HttpBase<CheckItemRequest, FinalPriceResponse> httpBase = new HttpBase<CheckItemRequest, FinalPriceResponse>();
		FinalPriceResponse response = httpBase.putToAPI(checkItemRequest,httpUrl, FinalPriceResponse.class);
		return response;
	}
	
	public List<ICartItemList> getAllCheckedItem(Long cartId) {
		String httpUrl = String.format("http://localhost:8888/tiki/api/cart/getAllCheckedItem/%d", cartId);
		HttpBase<ICartItemList[], ICartItemList[]> httpBase = new HttpBase<ICartItemList[], ICartItemList[]>();
		ICartItemList[] iCartItemList = httpBase.getFromAPI(httpUrl, ICartItemList[].class);
		List<ICartItemList> response = Arrays.asList(iCartItemList);
		return response;
	}
	public List<IOrderItem> order(OrderJsonRequest orderJsonRequest) {
		String httpUrl = "http://localhost:8888/tiki/api/cart/order";
		HttpBase<OrderJsonRequest, IOrderItem[]> httpBase = new HttpBase<OrderJsonRequest, IOrderItem[]>();
		IOrderItem[] result = httpBase.postToAPI(orderJsonRequest,httpUrl, IOrderItem[].class);
		List<IOrderItem> response = Arrays.asList(result);
		return response;
	}
	
	public FinalPriceResponse checkAllItemInShop(ShopCheckRequest shopCheckRequest) {
		String httpUrl = "http://localhost:8888/tiki/api/cart/checkAllItemInShop";
		HttpBase<ShopCheckRequest,FinalPriceResponse> httpBase = new HttpBase<>();
		FinalPriceResponse response = httpBase.putToAPI(shopCheckRequest, httpUrl, FinalPriceResponse.class);
		return response;
	}
	public FinalPriceResponse checkAllItem(CartItemId cartIdObj) {
		String httpUrl = String.format("http://localhost:8888/tiki/api/cart/checkAllItem/%d", cartIdObj.getCartId());
		HttpBase<CartItemId,FinalPriceResponse> httpBase = new HttpBase<>();
		FinalPriceResponse response = httpBase.putToAPI(cartIdObj, httpUrl, FinalPriceResponse.class);
		return response;
	}
}
