package com.example.demo.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.CategoryJsonList;
import com.example.demo.service.CategoryService;

@Controller
@RequestMapping(value = "/admin")
public class AdminController {
	
	@Autowired
	private CategoryService categoryService;

	@GetMapping("")
	public String getDashboardPage() {
 		return "dashboard";
	}
	
	@GetMapping("/getSubCategory")
	public @ResponseBody List<CategoryJsonList> getSubCategory(HttpServletRequest request) {
		Long parentId = Long.parseLong(request.getParameter("parentId"));
		List<CategoryJsonList> categories = categoryService.getSubCategory(parentId);
		
		return categories;
	}
}
