import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbacklistfromclientComponent } from './CommonComponets/feedbacklistfromclient/feedbacklistfromclient.component';
import { AddFeedbackComponent } from './PageComponets/FeedbackModule/add-feedback/add-feedback.component';
import { DashboardComponent } from './PageComponets/FeedbackModule/dashboard/dashboard.component';
import { FeedbackDetailsComponent } from './PageComponets/FeedbackModule/feedback-details/feedback-details.component';
import { FeedbackListComponent } from './PageComponets/FeedbackModule/feedback-list/feedback-list.component';
import { FeedbackComponent } from './PageComponets/FeedbackModule/feedback/feedback.component';
import { MenuComponentComponent } from './PageComponets/FeedbackModule/menu-component/menu-component.component';
import { UploadFeedbackComponent } from './PageComponets/FeedbackModule/upload-feedback/upload-feedback.component';
//import { FeedbackComponent } from './PageComponets/feedback/feedback.component';
import { HomeComponent } from './PageComponets/home/home.component';
import { LoginComponent } from './PageComponets/login/login.component';
import { CreateemployeeComponent } from './PageComponets/OnboardModule/createemployee/createemployee.component';
import { DeleteemployeeComponent } from './PageComponets/OnboardModule/deleteemployee/deleteemployee.component';
import { EmployeedetailsComponent } from './PageComponets/OnboardModule/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './PageComponets/OnboardModule/employeelist/employeelist.component';
import { FileuploadComponent } from './PageComponets/OnboardModule/fileupload/fileupload.component';
import { OnboardDashboardComponent } from './PageComponets/OnboardModule/onboard-dashboard/onboard-dashboard.component';
import { OnboardComponent } from './PageComponets/OnboardModule/onboard/onboard.component';
import { UpdateemployeeComponent } from './PageComponets/OnboardModule/updateemployee/updateemployee.component';
//import { OnboardComponent } from './PageComponets/onboard/onboard.component';
// import { ReportComponent } from './PageComponets/report/report.component';
import { BarChartComponent } from './PageComponets/ReportModule/bar-chart/bar-chart.component';
import { ReportComponent } from './PageComponets/ReportModule/report/report.component';
import { SignupComponent } from './PageComponets/signup/signup.component';
import { AddEmployeeGuard } from './Services/add-employee.guard';
import { FeebackGuard } from './Services/feeback.guard';
import { OnboardGuard } from './Services/onboard.guard';
import { ReportGuard } from './Services/report.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'Onboard',
    component: OnboardDashboardComponent,
    canActivate: [OnboardGuard],

    children: [
      {
        path: 'createemployee',
        component: CreateemployeeComponent,
        canActivate: [AddEmployeeGuard],

      },
      {
        path: 'employeelist',
        component: EmployeelistComponent,

      },
      {
        path: 'fileupload',
        component: FileuploadComponent,
        pathMatch: 'full',
      },
      {
        path: 'report',
        component: ReportComponent,
      },
      {
        path: 'FeedbacklistfromclientComponent',
        component: FeedbacklistfromclientComponent,
      },


      {
        path: 'report/feedback-chart',
        component: BarChartComponent
      },

      {
        path: 'report/feedback-chart/:feedbackId',
        component: BarChartComponent
      },

      // {
      //   path: 'AddFeeback',
      //   component: AddFeedbackComponent,
      // },


    ]

  },
  {
    path: 'createemployee',
    component: CreateemployeeComponent,
    pathMatch: 'full',
  },
  {
    path: 'employeelist',
    component: EmployeelistComponent,
    pathMatch: 'full',
  },

  {
    path: 'fileupload',
    component: FileuploadComponent,
    pathMatch: 'full',
  },

  {
    path: 'updateemployee/:employeeId',
    component: UpdateemployeeComponent,
    pathMatch: 'full',
  },
  {
    path: 'deleteemployee/:employeeId',
    component: DeleteemployeeComponent,
    pathMatch: 'full',
  },
  {
    path: 'employeedetails/:employeeId',
    component: EmployeedetailsComponent,
    pathMatch: 'full',
  },
  
  {
    path: 'user-dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [FeebackGuard],
  },


  {
    path: 'add-feedback',
    component: AddFeedbackComponent,
    pathMatch: 'full',
    canActivate: [FeebackGuard],
  },
  {
    path: 'feedback-list',
    component: FeedbackListComponent,
    canActivate: [FeebackGuard],
  },
  {
    path: 'upload-feedback',
    component: UploadFeedbackComponent,
    canActivate: [FeebackGuard],
  },





  //  {
  //   path: 'add-feedback',
  //   component: AddFeedbackComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'feedback-list',
  //   component: FeedbackListComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'upload-feedback',
  //   component: UploadFeedbackComponent,
  //   pathMatch: 'full',
  // },
  {
    path: 'employee-feedback-details/:employeeId', 
    component: FeedbackDetailsComponent,
    canActivate: [FeebackGuard],
  },
  {
    path: 'report',
    component: ReportComponent,
    pathMatch: 'full',
    canActivate: [ReportGuard],
  },
  {
    path: 'report/feedback-chart/:feedbackId',
    component: BarChartComponent
  },

  {
    path: 'report/feedback-chart',
    component: BarChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
