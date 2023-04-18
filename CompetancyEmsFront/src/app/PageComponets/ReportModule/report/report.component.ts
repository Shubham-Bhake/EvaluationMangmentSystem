
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportFeedback } from 'src/app/model/ReportFeedback';
import { MasterService } from 'src/app/Services/master.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  title = 'Evaluation Management System';
  displayedColumns: string[] = ['feedbackId', 'employeeId', 'employeeName','overallExperience',
  'projectExperience','comments','suggestion','createdBy', 'createdOn','action'];
  dataSource: any;
  feedbackData: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService) {

  }
  ngOnInit(): void {
    this.GetAll();
    this.service.RequiredRefresh.subscribe(r => {
      this.GetAll();
    });
  }

  GetAll() {
    this.service.GetAllFeedBack().subscribe(result => {
      this.feedbackData = result;
      this.dataSource = new MatTableDataSource<ReportFeedback>(this.feedbackData)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
  getrow(row: any) {
    console.log(row);
  }
}
