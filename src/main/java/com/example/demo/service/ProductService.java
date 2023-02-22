package com.example.demo.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.model.ProductJsonAdd;
import com.example.demo.model.ProductJsonDetail;
import com.example.demo.model.ProductResponse;
import com.example.demo.util.HttpBase;

@Component("ProductService")
public class ProductService {
	
	public List<ProductResponse> getProductList(int page, int limit) {
		String httpUrl = String.format("http://localhost:8888/tiki/api/product/getAllProduct?page=%d&limit=%d",page, limit);
		HttpBase<ProductResponse[], ProductResponse[]> httpBase = new HttpBase<ProductResponse[], ProductResponse[]>();
		ProductResponse[] productJsonList = httpBase.getFromAPI(httpUrl, ProductResponse[].class);
		List<ProductResponse> results = Arrays.asList(productJsonList);
		return results;
	}

	public ProductJsonDetail addProduct(ProductJsonAdd productJsonAdd) {
		String httpUrl = "http://localhost:8888/tiki/api/product/add";
		HttpBase<ProductJsonAdd, ProductJsonDetail> httpBase = new HttpBase<ProductJsonAdd, ProductJsonDetail>();
		ProductJsonDetail result = httpBase.postToAPI(productJsonAdd, httpUrl, ProductJsonDetail.class);
		return result;
	}
}
