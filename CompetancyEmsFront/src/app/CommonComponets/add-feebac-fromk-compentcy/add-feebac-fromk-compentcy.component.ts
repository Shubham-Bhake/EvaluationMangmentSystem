import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeFeedback } from 'src/app/model/employee-feedback';
import { EmployeeSkillsRating } from 'src/app/model/employee-skills-rating';
import { Skill } from 'src/app/model/skill';
import { EmployeeFeedbackService } from 'src/app/Services/employee-feedback.service';
import { LoginService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-add-feebac-fromk-compentcy',
  templateUrl: './add-feebac-fromk-compentcy.component.html',
  styleUrls: ['./add-feebac-fromk-compentcy.component.css']
})
export class AddFeebacFromkCompentcyComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // feedbackCreatedById = null;
  // employeeFeedback !: EmployeeFeedback;
  // skills !: Skill[];
  // employees !: Employee[];
  // feedbackForm !: FormGroup;
  // ratingInput = new FormArray([]);
  // commentInput = new FormArray([]);
  // employeeSkillsRatings : any[] = [];
 
  // constructor(private router: Router, private service : EmployeeFeedbackService,
  //   private formBuilder: FormBuilder, private login : LoginService) { }

  // ngOnInit(): void {

  //   this.feedbackForm = this.formBuilder.group({
  //     id: [''],
  //     overallExperience : ['', Validators.required],
  //     projectExperience : ['', Validators.required],
  //     employee : ['', Validators.required],
  //     comments : ['', Validators.required],
  //     suggestion : ['']
  //   });

  //    this.getSkills();
  //   this.getEmployees();

  //   this.feedbackCreatedById = this.login.getUser().id;
  //  }

  // async getSkills() {
  //    this.service.getSkills().subscribe((data: Skill[]) => {
  //    this.skills = data;
  //   });
  // }

  // async getEmployees() {
  //    this.service.getEmployees().subscribe((data: Employee[]) => {
  //    this.employees = data;
  //   });
  // }

  // ratingInputCount(event: any) {
  //   this.ratingInput.push(event.target.value)
  // }

  // commentInputCount(event : any) {
  //   this.commentInput.push(event.target.value)
  // }

  //  async onSubmit() {

  //   if(this.feedbackForm.invalid) {
  //     alert("All fields are mandatory except suggestion.")
  //     return;
  //   }
  //   else {
  //     if(this.skills != null) {
  //       for(let i=0; i<this.skills.length; i++) {
  //         if(this.ratingInput.get([i]) == null || this.commentInput.get([i]) == null) {
  //           alert("Rating and Comment are mandatory for all skills.")
  //           return;
  //         }
  //       }  
  //     }
  //   }

  //   this.employeeSkillsRatings.slice(0, this.skills.length);

  //   if(this.skills != null) {
  //     for(let i=0; i<this.skills.length; i++) {
  //      const employeeSkillsRating = new EmployeeSkillsRating();
  //      employeeSkillsRating.skill = this.skills[i];
  //      employeeSkillsRating.rating = this.ratingInput.get([i]);
  //      employeeSkillsRating.remarks = this.commentInput.get([i]);
  //      this.employeeSkillsRatings.push(employeeSkillsRating);
  //     }
  //   }

  //   var empFeedbackObj = {
  //   'overallExperience' : this.feedbackForm.get('overallExperience')?.value,
  //   'projectExperience' : this.feedbackForm.get('projectExperience')?.value,
  //   'employee' : {'id' : this.feedbackForm.get('employee')?.value},
  //   'comments' : this.feedbackForm.get('comments')?.value,
  //   'suggestion' : this.feedbackForm.get('suggestion')?.value,
  //   'createdBy' : {'id' : this.feedbackCreatedById},
  //   'employeeSkillsRatings' : this.employeeSkillsRatings
  // }
 
  // let response = await this.service.saveEmployeeFeedback(JSON.stringify(empFeedbackObj));
  //   this.employeeFeedback = response;

  //    if(this.employeeFeedback != null && this.employeeFeedback.id > 0) {
  //     this.router.navigate(['/feedback-list'])
  //    }
  // } 

}
