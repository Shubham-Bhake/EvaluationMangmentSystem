import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/Services/skills.service';

@Component({
  selector: 'app-createskill',
  templateUrl: './createskill.component.html',
  styleUrls: ['./createskill.component.css']
})
export class CreateskillComponent implements OnInit {
   
  skill : Skills = new Skills();
  constructor(private skillsService:SkillsService,
    private router:Router){}

  ngOnInit(): void {
    
  }
  saveSkill(){
    this.skillsService.createSkill(this.skill).subscribe(data=>{
      console.log(data);
      window.location.reload();
    });/*,
    error => console.log(error)); */
  }
  goToEmployeeList(){
    this.router.navigate(['./employees']);

  }
  onSubmit(){
    console.log(this.skill);
    this.saveSkill();
  }
 
  
}
