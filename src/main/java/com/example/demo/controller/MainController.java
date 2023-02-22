package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.CategoryJsonList;
import com.example.demo.model.ProductResponse;
import com.example.demo.service.CategoryService;
import com.example.demo.service.ProductService;

@Controller
@RequestMapping("")
public class MainController {
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("")
	public String getIndexPage() {
		return "index";
	}
	@GetMapping("/getLevel1Category")
	public @ResponseBody List<CategoryJsonList> getLevel1Category() {
		List<CategoryJsonList> categories = categoryService.getLevel1Category();
		
		return categories;
	}
	
	@GetMapping("/getAllProduct")
	public @ResponseBody List<ProductResponse> getProductList(@RequestParam int page, @RequestParam int limit) {
		List<ProductResponse> products = productService.getProductList(page, limit);
		for (ProductResponse product : products) {
			System.out.println(product);
		}
		return products;
	}
}
