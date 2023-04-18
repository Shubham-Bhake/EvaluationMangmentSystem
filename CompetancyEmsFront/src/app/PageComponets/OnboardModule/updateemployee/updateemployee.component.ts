import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/Services/employee.service';



@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  employeeId!: number;
  employee!: Employee;
 
  constructor(private employeeService:EmployeeService,
    private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.employee = new Employee();
     this.employeeId = this.route.snapshot.params['emmployeeId'];
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data=>{
     this.employee = data; 
    }/* ,error => console.log(error) */);
  
    }
    onSubmit(){

      this.updateEmployee();
    
    }
    updateEmployee() {
      this.employeeService.updateEmployee(this.employeeId, this.employee)
        .subscribe(data => {
          console.log(data);
          this.employee = new Employee();
          this.gotoList();
        }/* , error => console.log(error) */);
    }
    gotoList() {
      this.router.navigate(['/employees']);
    }
     getToEmployeeList(){
      this.router.navigate(['/employees'])
    }
   
}
