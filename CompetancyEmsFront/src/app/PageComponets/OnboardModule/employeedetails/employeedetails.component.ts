import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/Services/employee.service';


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit{
  employeeId!: number;
  employee!: Employee;
  
  constructor (private router:Router,private route:ActivatedRoute,private employeeService:EmployeeService){}
 
  ngOnInit(): void {
    this.employeeId =this.route.snapshot.params['employeeId'];
   this.employee=new Employee();
   this.employeeService.getEmployeeById(this.employeeId).subscribe(data=>{
   this.employee=data;
   });
   
  }
  list(){

   this.router.navigate(['employees']);
    
    }
}
