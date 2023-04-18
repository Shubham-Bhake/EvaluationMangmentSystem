package com.yash.ems.controller;

import org.apache.coyote.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.yash.ems.exception.UserFoundException;
import com.yash.ems.model.Role;
import com.yash.ems.model.User;
import com.yash.ems.model.UserRole;
import com.yash.ems.service.impl.UserServiceImpl;
import com.yash.ems.services.UserService;
import java.util.HashSet;
import java.util.Set;

/**
 * UserController interact with service layer to complete the work according to
 * web request.
 *
 * @author Shubham Bhake
 * @since 28-2-2023
 */
@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;
	
	@Autowired
	UserServiceImpl userServiceImpl;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	// creating user

	/**
	 * This controller method handles the HTTP Post request for insert/ register the
	 * user and their role, matching with the given URI. it is non idempotent 
	 * 
	 * @RequestBody user
	 */

	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {

		Role role = new Role();

		LOGGER.info("Data From UI" + user);

		if (user.getEmpDesignation().contains("Competency Member")) {

			role.setRoleId(44L);
			role.setRoleName("Competency Member");

			LOGGER.info("User Register for Role -Competency Member ");
			
		}
		
		else if (user.getEmpDesignation().contains("Training Lead")) {

			role.setRoleId(45L);
			role.setRoleName("Training Lead");

			LOGGER.info("User Register for Role Training Lead ");
			
		} else	if (user.getEmpDesignation().contains("Delivery Team/Client")) {

			role.setRoleId(46L);
			role.setRoleName("Delivery Team/Client");

			LOGGER.info("User Register for Role -Delivery Team/Client ");
			
		}
		else {
			role.setRoleId(47L);

			role.setRoleName("Not Allowed To Acess Appiliction");
			LOGGER.info("User Register for user which is Not Allowed To Acess appiliction ");
		}
		
		// encoding password with bcryptpasswordencoder
		
      user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
      
		Set<UserRole> roles = new HashSet<>();

		UserRole userRole = new UserRole();

		userRole.setUser(user);
		userRole.setRole(role);

		roles.add(userRole);

		LOGGER.info("Registration Sucessful");

		//return this.userService.createUser(user, roles);
		
		return this.userServiceImpl.createUser(user, roles);
	}

	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		return this.userService.getUser(username);
	}


}
