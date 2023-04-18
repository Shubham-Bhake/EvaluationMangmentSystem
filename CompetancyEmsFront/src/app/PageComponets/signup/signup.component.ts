import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpDesignations } from 'src/app/model/emp-designations';
import { UserService } from 'src/app/Services/user-service.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private builder: FormBuilder,private userService:UserService, private snack: MatSnackBar) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    empDesignation:'',
  };

  empDesignation!: EmpDesignations[];

  // registerform = this.builder.group({
  //   username: this.builder.control(''),
  //   password: this.builder.control(''),
  //   firstName: this.builder.control(''),
  //   lastName: this.builder.control(''),
  //   email: this.builder.control(''),
  //   empDesignation: this.builder.control(''),

  // });
  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    //validate

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log("---------"+data);
        console.log("ROLES ADDES"+data.roles);

        //alert('success');
        Swal.fire('Successfully done !!','success');
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open(error.error.text, '', {
          duration: 10000,
        });
      }
    );
  }

  //this.user
}

