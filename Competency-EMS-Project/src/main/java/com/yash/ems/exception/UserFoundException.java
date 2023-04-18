package com.yash.ems.exception;

public class UserFoundException  extends  Exception{

    public UserFoundException() {
        super("This User is Alredy Registered!!!");
    }

    public UserFoundException(String msg)
    {
        super(msg);
    }
}
