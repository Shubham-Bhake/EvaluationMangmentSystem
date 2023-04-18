import ReportFeedbackSkill from "./ReportFeedbackSkill";

export interface ReportFeedback{
    feedbackId:string;
    employeeId: string;
    employeeName: string;
    overallExperience: string,
    projectExperience: string,
    comments: string;
    suggestion: string;
    createdOn: Date;
    skillResponseList: Array<ReportFeedbackSkill>;
}