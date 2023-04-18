import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeFeedback } from 'src/app/model/employee-feedback';
import { EmployeeFeedbackService } from 'src/app/Services/employee-feedback.service';

@Component({
  selector: 'app-feedbacklistfromclient',
  templateUrl: './feedbacklistfromclient.component.html',
  styleUrls: ['./feedbacklistfromclient.component.css']
})
export class FeedbacklistfromclientComponent implements OnInit {

  employees !: Employee[];

  constructor(private myrouter: Router, private service: EmployeeFeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.allFeedbackEmployees();
  }

  async allFeedbackEmployees() {
    this.service.getFeedbackEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  employeeFeedackDetails(employeeId: number) {
    this.router.navigate(['employee-feedback-details', employeeId]);
  }
}
