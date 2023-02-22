package com.example.demo.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.model.CategoryJsonList;
import com.example.demo.util.HttpBase;

@Component("CategoryService")
public class CategoryService {
	
	public List<CategoryJsonList> getLevel1Category() {
		String httpUrl = "http://localhost:8888/tiki/api/category/getLevel1Category";
		HttpBase<CategoryJsonList[], CategoryJsonList[]> httpBase = new HttpBase<CategoryJsonList[], CategoryJsonList[]>();
		CategoryJsonList[] categoryJsonList = httpBase.getFromAPI(httpUrl, CategoryJsonList[].class);
		List<CategoryJsonList> results = Arrays.asList(categoryJsonList);
		return results;
	}
	
	public List<CategoryJsonList> getSubCategory(Long parentId) {
		String httpUrl = String.format("http://localhost:8888/tiki/api/category/getSubCategory/%d", parentId);
		HttpBase<CategoryJsonList[], CategoryJsonList[]> httpBase = new HttpBase<CategoryJsonList[], CategoryJsonList[]>();
		CategoryJsonList[] categoryJsonList = httpBase.getFromAPI(httpUrl, CategoryJsonList[].class);
		List<CategoryJsonList> results = Arrays.asList(categoryJsonList);
		return results;
	}
}
