package com.example.demo.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.model.ProductJsonAdd;
import com.example.demo.model.ProductJsonDetail;
import com.example.demo.model.ProductJsonList;
import com.example.demo.util.HttpBase;

@Component("ProductService")
public class ProductService {
	
	public List<ProductJsonList> getProductList() {
		String httpUrl = "http://localhost:8888/tiki/api/product/getAll";
		HttpBase<ProductJsonList[], ProductJsonList[]> httpBase = new HttpBase<ProductJsonList[], ProductJsonList[]>();
		ProductJsonList[] productJsonList = httpBase.getFromAPI(httpUrl, ProductJsonList[].class);
		List<ProductJsonList> results = Arrays.asList(productJsonList);
		return results;
	}

	public ProductJsonDetail addProduct(ProductJsonAdd productJsonAdd) {
		String httpUrl = "http://localhost:8888/tiki/api/product/add";
		HttpBase<ProductJsonAdd, ProductJsonDetail> httpBase = new HttpBase<ProductJsonAdd, ProductJsonDetail>();
		ProductJsonDetail result = httpBase.postToAPI(productJsonAdd, httpUrl, ProductJsonDetail.class);
		return result;
	}
}
