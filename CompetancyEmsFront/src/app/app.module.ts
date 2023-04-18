import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './PageComponets/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { authInterceptorProviders } from './Services/auth-interceptor';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { LoginComponent } from './PageComponets/login/login.component';
import { SignupComponent } from './PageComponets/signup/signup.component';
import { NavbarComponent } from './CommonComponets/navbar/navbar.component';
// import { FeedbackComponent } from './PageComponets/feedback/feedback.component';
//import { OnboardComponent } from './PageComponets/onboard/onboard.component';
//import { ReportComponent } from './PageComponets/report/report.component';
import { FeedbackComponent } from './PageComponets/FeedbackModule/feedback/feedback.component';
import { OnboardComponent } from './PageComponets/OnboardModule/onboard/onboard.component';
import { AddFeedbackComponent } from './PageComponets/FeedbackModule/add-feedback/add-feedback.component';
import { DashboardComponent } from './PageComponets/FeedbackModule/dashboard/dashboard.component';
import { FeedbackListComponent } from './PageComponets/FeedbackModule/feedback-list/feedback-list.component';
import { MenuComponentComponent } from './PageComponets/FeedbackModule/menu-component/menu-component.component';
import { UploadFeedbackComponent } from './PageComponets/FeedbackModule/upload-feedback/upload-feedback.component';
import { CreateemployeeComponent } from './PageComponets/OnboardModule/createemployee/createemployee.component';
import { DeleteemployeeComponent } from './PageComponets/OnboardModule/deleteemployee/deleteemployee.component';
import { EmployeedetailsComponent } from './PageComponets/OnboardModule/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './PageComponets/OnboardModule/employeelist/employeelist.component';
import { ExcelsheetComponent } from './PageComponets/OnboardModule/excelsheet/excelsheet.component';
import { FileuploadComponent } from './PageComponets/OnboardModule/fileupload/fileupload.component';
import { SearchComponent } from './PageComponets/OnboardModule/search/search.component';
import { UpdateemployeeComponent } from './PageComponets/OnboardModule/updateemployee/updateemployee.component';
import { CreateskillComponent } from './PageComponets/skill/createskill/createskill.component';
import { SkilllistComponent } from './PageComponets/skill/skilllist/skilllist.component';
import { UpdateskillComponent } from './PageComponets/skill/updateskill/updateskill.component';
import { ReportComponent } from './PageComponets/ReportModule/report/report.component';
import { BarChartComponent } from './PageComponets/ReportModule/bar-chart/bar-chart.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from 'src/material-module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { OnboardDashboardComponent } from './PageComponets/OnboardModule/onboard-dashboard/onboard-dashboard.component';
import { SidebarComponent } from './PageComponets/OnboardModule/sidebar/sidebar.component';
import { FeedbacklistfromclientComponent } from './CommonComponets/feedbacklistfromclient/feedbacklistfromclient.component';
import { AddFeebacFromkCompentcyComponent } from './CommonComponets/add-feebac-fromk-compentcy/add-feebac-fromk-compentcy.component';
import { FeedbackDetailsComponent } from './PageComponets/FeedbackModule/feedback-details/feedback-details.component';

//import {MatListModule} from '@angular/material/list'



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
   FeedbackComponent,
   OnboardComponent,
   ReportComponent,
   AddFeedbackComponent,
   DashboardComponent,
   FeedbackListComponent,
   MenuComponentComponent,
   UploadFeedbackComponent,
   CreateemployeeComponent,
   DeleteemployeeComponent,
   EmployeedetailsComponent,
   EmployeelistComponent,
   ExcelsheetComponent,
   FileuploadComponent,
   SearchComponent,
   UpdateemployeeComponent,
   CreateskillComponent,
   SkilllistComponent,
   UpdateskillComponent,
   BarChartComponent,
   OnboardDashboardComponent,
   SidebarComponent,
   FeedbacklistfromclientComponent,
   AddFeebacFromkCompentcyComponent,
   FeedbackDetailsComponent,
   





 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    // // CKEditorModule,
    MatPaginatorModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
     NgxUiLoaderHttpModule.forRoot({
    showForeground: true,
     }),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
