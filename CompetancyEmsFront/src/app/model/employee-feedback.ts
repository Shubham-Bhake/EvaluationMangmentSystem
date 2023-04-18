import { User } from './user';
import { Employee } from "./employee";
import { EmployeeFeedbackFile } from "./employee-feedback-file";
import { EmployeeSkillsRating } from "./employee-skills-rating";

export class EmployeeFeedback {
    id !: number;
    overallExperience !: number;
    projectExperience !: number;
    comments !: string;
    suggestion !: string;
    createdOn !: Date;
    employeeFeedbackFile !: EmployeeFeedbackFile;
    employee !: Employee;
    createdBy !: User;
    employeeSkillsRatings !: EmployeeSkillsRating[];
}
