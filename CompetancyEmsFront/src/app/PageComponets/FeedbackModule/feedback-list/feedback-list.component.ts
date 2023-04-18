import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeFeedbackService } from 'src/app/Services/employee-feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

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
