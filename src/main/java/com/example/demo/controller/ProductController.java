package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.ProductResponse;
import com.example.demo.service.ProductService;

@Controller
@RequestMapping(value = "/product")
public class ProductController {

	@Autowired
	private ProductService productService;
	
//	@GetMapping("")
//	public String getProductPage() {
//		return "index";
//	}
	
	

//	@RequestMapping(value = "/add", method = RequestMethod.GET)
//	public String addProduct() {
//		ProductJsonAdd product = new ProductJsonAdd();
//		product.setPrice(1000);
//		product.setName("AMD");
//		product.setDescription("Doi Co May Khi Vui");
//		product.setCategoryId(1L);
//		productService.addProduct(product);
//		return null;
//	}
}
