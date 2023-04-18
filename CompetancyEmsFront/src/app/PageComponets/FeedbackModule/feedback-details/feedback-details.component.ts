import { EmployeeFeedback } from 'src/app/model/employee-feedback';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { EmployeeFeedbackService } from 'src/app/Services/employee-feedback.service';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {

  employeeId !: number;
  employeeFeedbacks !: EmployeeFeedback[]

  constructor(private service: EmployeeFeedbackService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];

    this.feedbackDetails();
  }

  feedbackDetails() {
    this.service.getEmployeeFedbacksByEmployeeId(this.employeeId).subscribe((data: EmployeeFeedback[]) => {
      this.employeeFeedbacks = data;

      if (this.employeeFeedbacks.length == 0) {
        this.router.navigate(['/feedback-list'])
      }
    });
  }

  deleteEmployeeFeedback(id: number) {
    alert(`Are you sure you want to delete this record ?`)
    this.service.deleteEmployeeFeedback(id).subscribe((data: any) => {
      this.feedbackDetails();
    })
  }
} 