import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/Services/skills.service';


@Component({
  selector: 'app-skilllist',
  templateUrl: './skilllist.component.html',
  styleUrls: ['./skilllist.component.css']
})
export class SkilllistComponent  implements OnInit {

  skill!: Skills[];

  constructor(private skillsService: SkillsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getskills();
  }

  private getskills(){
    this.skillsService.getSkillList().subscribe(data => {
      this.skill = data;
    });
  }

  SkillDetails(skillId: number){
    this.router.navigate(['employee-details', skillId]);
  }

  updateSkill(skillId:number){
    this.router.navigate(['update-employee', skillId]);
  }

  deleteSkill(skillId: number){
    this.skillsService.deleteSkill(skillId).subscribe( data => {
      console.log(data);
      this.getskills();
    })
  }
}