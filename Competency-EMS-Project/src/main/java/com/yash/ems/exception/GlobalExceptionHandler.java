package com.yash.ems.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(ResourceNotFoundException.class)
	public String resourceNotFoundExceptionHandler(ResourceNotFoundException ex) {
		String message = ex.getMessage();
		return message;
		}
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String,String>> handleMethodArgumentNotvalidException(MethodArgumentNotValidException ex) {
		Map<String,String>map=new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((errors)->{
			String field = ((FieldError)errors).getField();
			String message = errors.getDefaultMessage();
			map.put(field, message);
		});
		return new ResponseEntity<Map<String,String>>(map,HttpStatus.BAD_REQUEST);
		}
	
	
		/* Global exception handling for Singup 
		 * @author Shubham Bhake
		 * 
		 * @since 26-03-2023
		 */

	@ExceptionHandler(UserFoundException.class)
	public ResponseEntity<?> exceptionHandler(UserFoundException ex) {
		return ResponseEntity.ok(ex.getMessage());
	}

	/* Global exception handling for login 

	 * @author Shubham Bhake
	 * 
	 * @since 26-03-2023
	 */
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<?> exceptionHandler(UserNotFoundException ex) {
		return ResponseEntity.ok(ex.getMessage());
	}
}

