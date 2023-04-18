package com.yash.ems.exception;

public class UserNotFoundException extends Exception {

    public UserNotFoundException() {
        super("User with this username not Avaible kindly Singup !!");
    }

    public UserNotFoundException(String msg) {
        super(msg);
    }
}
