package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
import com.example.demo.service.CartService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@RequestMapping(value = "/cart")
public class CartController {

	@Autowired
	private CartService cartService;

	@GetMapping("/checkout")
	public String getAllCartItem() {
		return "cart";
	}

	@GetMapping("/getdata")
	public @ResponseBody CartItemJson getData(HttpServletRequest request) {
		Long cartId = Long.parseLong(request.getParameter("cartId"));
		CartItemJson cartItem = cartService.getCartItemJson(cartId);
		
		return cartItem;
	}

	@PostMapping("/changeQuantity")
	public @ResponseBody ChangeQuantityResponse changeQuantity(HttpServletRequest request) throws IOException {
		StringBuilder buffer = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;
		while ((line = reader.readLine()) != null) {
			buffer.append(line);
			buffer.append(System.lineSeparator());
		}
		String data = buffer.toString().trim();
		String[] arrData = data.split("&");
		
		Long cartId = Long.parseLong(arrData[0].split("=")[1]);
		Long productId = Long.parseLong(arrData[1].split("=")[1]);
		int quantity = Integer.parseInt(arrData[2].split("=")[1]);
	
		CartItemInfoRequest info = new CartItemInfoRequest(cartId, productId, quantity);
		
		ChangeQuantityResponse response = cartService.changeQuantity(info);
		return response;
	}
	@DeleteMapping("/remove")
	public @ResponseBody FinalPriceResponse removeItem(HttpServletRequest request) throws IOException {
		StringBuilder buffer = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;
		while ((line = reader.readLine()) != null) {
			buffer.append(line);
			buffer.append(System.lineSeparator());
		}
		String data = buffer.toString().trim();
		String[] arrData = data.split("&");
		Long cartId = Long.parseLong(arrData[0].split("=")[1]);
		Long productId = Long.parseLong(arrData[1].split("=")[1]);
		
		RemoveProductRequest removeProductRequest = new RemoveProductRequest(cartId, productId);
		FinalPriceResponse response = cartService.removeItem(removeProductRequest);
		return response;
	}
	
	@PutMapping("/checkItem")
	public @ResponseBody FinalPriceResponse checkItem(HttpServletRequest request) throws IOException {
		StringBuilder buffer = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;
		while ((line = reader.readLine()) != null) {
			buffer.append(line);
			buffer.append(System.lineSeparator());
		}
		String data = buffer.toString().trim();
		System.out.println(data);
		String[] arrData = data.split("&");
		Long cartId = Long.parseLong(arrData[0].split("=")[1]);
		Long productId = Long.parseLong(arrData[1].split("=")[1]);
		String shopName = arrData[2].split("=")[1];
		CheckItemRequest checkItemRequest = new CheckItemRequest(cartId, productId, shopName);
		FinalPriceResponse response = cartService.checkItem(checkItemRequest);
		return response;
	}
	
	@PutMapping("/checkAllItemInShop")
	public @ResponseBody FinalPriceResponse checkAllItemInShop(HttpServletRequest request) throws IOException {
		StringBuilder buffer = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;
		while((line = reader.readLine()) != null) {
			buffer.append(line);
			buffer.append(System.lineSeparator());
		}
		String data = buffer.toString().trim();
		
		ObjectMapper mapper = new ObjectMapper();
		ShopCheckRequest shopCheckRequest = mapper.readValue(data, ShopCheckRequest.class);
		FinalPriceResponse response =  cartService.checkAllItemInShop(shopCheckRequest);
		return response;
	}
	
	@PutMapping("/checkAllItem")
	public @ResponseBody FinalPriceResponse checkAllItemInBucket(HttpServletRequest request) throws IOException {
		StringBuilder buffer = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;
		while ((line = reader.readLine()) != null) {
			buffer.append(line);
			buffer.append(System.lineSeparator());
		}
		String data = buffer.toString().trim();
		System.out.println(data);
		ObjectMapper mapper = new ObjectMapper();
		CartItemId cartIdObj = mapper.readValue(data, CartItemId.class);
	
		FinalPriceResponse response = cartService.checkAllItem(cartIdObj);
		return response;
	} 
	
	@GetMapping("/getAllCheckedItem")
	public @ResponseBody List<ICartItemList> getAllCheckedItem(HttpServletRequest request) {
		Long cartId = Long.parseLong(request.getParameter("cartId"));
		List<ICartItemList> response = cartService.getAllCheckedItem(cartId);
		
		return response;
	}
	
	@PostMapping("/order")
	public @ResponseBody List<IOrderItem> order(HttpServletRequest request) throws IOException {
		StringBuilder buffer = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;
		while ((line = reader.readLine()) != null) {
			buffer.append(line);
			buffer.append(System.lineSeparator());
		}
		String data = buffer.toString().trim();
		String[] arrData = data.split("&");
		
		Long cartId = Long.parseLong(arrData[0].split("=")[1]);

		OrderJsonRequest order = new OrderJsonRequest();
		order.setCartId(cartId);
		
		List<IOrderItem> response = cartService.order(order);
		return response;
	}
	
	@GetMapping("/payment")
	public String getOrderPage() {
		return "order";
	}
	
}
