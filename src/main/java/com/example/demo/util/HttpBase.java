package com.example.demo.util;

import java.util.Arrays;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

public class HttpBase<T, K> {
	public K getFromAPI(String url, Class<K> responseType) {

		HttpEntity<T> requestEntity = new HttpEntity<T>(getHttpHeader());

		RestTemplate restTemplate = new RestTemplate();

		ResponseEntity<K> response = restTemplate.exchange(url, HttpMethod.GET, requestEntity, responseType);

		HttpStatus statusCode = response.getStatusCode();
		K results = null;
		if (statusCode == HttpStatus.OK) {
			results = response.getBody();
		}
		return results;
	}

	public K postToAPI(T requestObject, String url, Class<K> responseType) {
		return postOrPutToAPI(requestObject, url, responseType, HttpMethod.POST);
	}

	public K putToAPI(T requestObject, String url, Class<K> responseType) {
		return postOrPutToAPI(requestObject, url, responseType, HttpMethod.PUT);
	}
	
	public K deleteToAPI(T requestObject, String url, Class<K> responseType) {
		return postOrPutToAPI(requestObject, url, responseType, HttpMethod.DELETE);
	}
	
	private K postOrPutToAPI(T requestObject, String url, Class<K> responseType, HttpMethod httpMethod) {
		HttpEntity<T> requestEntity = new HttpEntity<T>(requestObject, getHttpHeader());

		RestTemplate restTemplate = new RestTemplate();

		ResponseEntity<K> response = null;
		try {
			response = restTemplate.exchange(url, httpMethod, requestEntity, responseType);
		} catch (HttpClientErrorException e) {
			return null;
		}

		HttpStatus statusCode = response.getStatusCode();
		System.out.println(statusCode);
		K results = null;
		if (statusCode == HttpStatus.OK) {
			results = response.getBody();
		}
		return results;
	}

	private HttpHeaders getHttpHeader() {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
		headers.setContentType(MediaType.APPLICATION_JSON);
		return headers;
	}
}
