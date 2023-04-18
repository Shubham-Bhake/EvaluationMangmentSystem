import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user = null;
  user1=null;
  user2=null;
  userRole3:any;

  constructor(public login: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
      this.user1 = this.login.getUser().username;
      this.user2=this.login.getUser().empDesignation;
      this.userRole3 = this.login.getUserRole();
      console.log("find user name for nav bar"+this.login.getUser().username)
      console.log("find user name for nav bar"+this.user1)
      console.log("find user role for nav bar"+this.user2)
      console.log("user role for onboard login "+this.userRole3)
    

    // 
     

    });
  

  }

  public logout() {
    this.login.logout();
    //window.location.reload();
    this.router.navigate(['']);

   //if not got soultion then use this.
    window.location.href = '';
    
    // this.login.loginStatusSubject.next(false);
  }

  public Report(){
   
      this.router.navigate(['report']);
  }
  public FeedbackModule(){
    this.router.navigate(['feedback-list']);

  }
}
