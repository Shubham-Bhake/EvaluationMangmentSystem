import { Skill } from './../../../model/skill';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeFeedbackService } from 'src/app/Services/employee-feedback.service';
import { EmployeeFeedback } from 'src/app/model/employee-feedback';
import { EmployeeSkillsRating } from 'src/app/model/employee-skills-rating';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login-service.service';


@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  feedbackCreatedById = null;
  employeeFeedback !: EmployeeFeedback;
  skills !: Skill[];
  employees !: Employee[];
  feedbackForm !: FormGroup;
  ratingInput: any[] = [];
  commentInput: any[] = [];
  employeeSkillsRatings: any[] = [];

  constructor(private router: Router, private service: EmployeeFeedbackService,
    private formBuilder: FormBuilder, private login: LoginService) { }

  ngOnInit(): void {

    this.feedbackForm = this.formBuilder.group({
      id: [''],
      overallExperience: ['', Validators.required],
      projectExperience: ['', Validators.required],
      employee: ['', Validators.required],
      comments: ['', Validators.required],
      suggestion: ['']
    });

    this.getSkills();
    this.getEmployees();

    this.feedbackCreatedById = this.login.getUser().id;
  }

  async getSkills() {
    this.service.getSkills().subscribe((data: Skill[]) => {
      this.skills = data;

      this.ratingInput.length = this.skills.length;
      this.commentInput.length = this.skills.length;
    });
  }

  async getEmployees() {
    this.service.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  ratingInputCount(index: any, event: any) {
    this.ratingInput[index] = event.target.value;
  }

  commentInputCount(index: any, event: any) {
    this.commentInput[index] = event.target.value;
  }

  async onSubmit() {

    if (this.feedbackForm.invalid) {
      alert("All fields are mandatory except suggestion.")
      return;
    }

    this.employeeSkillsRatings.slice(0, this.skills.length);

    if (this.skills != null) {
      for (let i = 0; i < this.skills.length; i++) {

        if ((this.ratingInput[i] != undefined && this.ratingInput[i].length > 0) ||
          (this.commentInput[i] != undefined && this.commentInput[i].length > 0)) {

          const employeeSkillsRating = new EmployeeSkillsRating();
          employeeSkillsRating.skill = this.skills[i];
          employeeSkillsRating.rating = this.ratingInput[i];
          employeeSkillsRating.remarks = this.commentInput[i];
          this.employeeSkillsRatings.push(employeeSkillsRating);
        }
      }
    }

    var empFeedbackObj = {
      'overallExperience': this.feedbackForm.get('overallExperience')?.value,
      'projectExperience': this.feedbackForm.get('projectExperience')?.value,
      'employee': { 'id': this.feedbackForm.get('employee')?.value },
      'comments': this.feedbackForm.get('comments')?.value,
      'suggestion': this.feedbackForm.get('suggestion')?.value,
      'createdBy': { 'id': this.feedbackCreatedById },
      'employeeSkillsRatings': this.employeeSkillsRatings
    }

    let response = await this.service.saveEmployeeFeedback(JSON.stringify(empFeedbackObj));
    this.employeeFeedback = response;

    if (this.employeeFeedback != null && this.employeeFeedback.id > 0) {
      this.router.navigate(['employee-feedback-details', this.feedbackForm.get('employee')?.value]);
    }
  }
}