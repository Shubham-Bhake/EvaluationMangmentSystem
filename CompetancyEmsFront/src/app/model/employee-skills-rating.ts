import { Skill } from './skill';
import { EmployeeFeedback } from "./employee-feedback";

export class EmployeeSkillsRating {
    id !: number;
    rating !: any;
    remarks !: any;
    skill !: Skill;
    employeeFeedback !: EmployeeFeedback;
}
