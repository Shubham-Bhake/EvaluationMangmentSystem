import { Skills } from "./skills";

export class Feedback {
    
    feedbackId!: string;
    employeeId!: string;
    employeeName!: string;
    overallExperience!: string;
    projectExperience!: string;
    comments!: string;
    suggestion!: string;
    createdOn!: Date;
    skillResponseList!: Array<Skills>;
}
