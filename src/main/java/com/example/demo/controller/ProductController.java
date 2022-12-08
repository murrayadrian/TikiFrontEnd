package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.model.ProductJsonAdd;
import com.example.demo.model.ProductJsonList;
import com.example.demo.service.ProductService;

@Controller
@RequestMapping(value = "/product")
public class ProductController {

	@Autowired
	private ProductService productService;

	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public String getProductList(Model model) {
		List<ProductJsonList> products = productService.getProductList();
		for (ProductJsonList product : products) {
			System.out.println(product);
		}
		return null;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String addProduct(Model model) {
		ProductJsonAdd product = new ProductJsonAdd();
		product.setPrice(1000);
		product.setName("AMD");
		product.setDescription("Doi Co May Khi Vui");
		product.setCategoryId(1L);
		productService.addProduct(product);
		return null;
	}
}
