import { Skills } from "./skills";

export class Employee {
    id !: number;
    employeeId!: number;
    employeeName!: string;
    email!: string;
    designation!: string;
    grade!: string;
    resourceType!: string;
    doj!: Date;
    totalExp!: DoubleRange;
    irm!: string;
    currentLocation!: string;
    currentAllocation!: string;
    project!: string;
    skills!: Skills[];

}
