import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/Services/skills.service';


@Component({
  selector: 'app-updateskill',
  templateUrl: './updateskill.component.html',
  styleUrls: ['./updateskill.component.css']
})
export class UpdateskillComponent implements OnInit {
  skillId!: number;
  skill: Skills = new Skills();
  constructor(private skillService: SkillsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.skillId = this.route.snapshot.params['skillId'];

    this.skillService.getSkillById(this.skillId).subscribe(data => {
      this.skill = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.skillService.updateSkill(this.skillId, this.skill).subscribe( data =>{
      this.goToSkillList();
    }
    /* , error => console.log(error) */);
  }
  
 

  goToSkillList(){
    this.router.navigate(['/skills']);
  }
}