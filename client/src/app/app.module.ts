import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingPageNavbarComponent } from './components/landing-page-navbar/landing-page-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuperAdminDashboardComponent } from './components/superAdmin/super-admin-dashboard/super-admin-dashboard.component';
import { OrganizationAdminDashboardComponent } from './components/organizationAdmin/organization-admin-dashboard/organization-admin-dashboard.component';
import { OrganizationSubordinateDashboardComponent } from './components/organizationSubordinate/organization-subordinate-dashboard/organization-subordinate-dashboard.component';
import { SidebarNavbarComponent } from './components/superAdmin/sidebar-navbar/sidebar-navbar.component';
import { AddOrganizationComponent } from './components/superAdmin/add-organization/add-organization.component';
import { AddOrganizationAdminComponent } from './components/superAdmin/add-organization-admin/add-organization-admin.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AllOrganizationsComponent } from './components/superAdmin/all-organizations/all-organizations.component';
import { ViewOrganizationComponent } from './components/view-organization/view-organization.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { OrgAdminSidebarComponent } from './components/organizationAdmin/org-admin-sidebar/org-admin-sidebar.component';
import { AddSubordinateComponent } from './components/organizationAdmin/add-subordinate/add-subordinate.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReportIncidentComponent } from './components/report-incident/report-incident.component';
import { ChangeIncidentStatusComponent } from './components/change-incident-status/change-incident-status.component';
import { UsersComponent } from './components/users/users.component';
import { AddIncidentTypeComponent } from './components/organizationAdmin/add-incident-type/add-incident-type.component';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { OrgSubordinateSidebarComponent } from './components/organizationSubordinate/org-subordinate-sidebar/org-subordinate-sidebar.component';
import { ViewIncidentDetailsComponent } from './view-incident-details/view-incident-details.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AdminHomeComponent } from './components/organizationAdmin/admin-home/admin-home.component';
import { SubordinatesComponent } from './components/subordinates/subordinates.component';
import { VerifyIncidentsComponent } from './components/organizationAdmin/verify-incidents/verify-incidents.component';
import { AdminNotificationsComponent } from './components/organizationAdmin/admin-notifications/admin-notifications.component';
import { SubordHomeComponent } from './components/organizationSubordinate/subord-home/subord-home.component';
import { NoPermissionsPageComponent } from './components/no-permissions-page/no-permissions-page.component';
import { SuperAdminNotificationsComponent } from './components/superAdmin/super-admin-notifications/super-admin-notifications.component';
import { SuperAdminHomeComponent } from './components/superAdmin/super-admin-home/super-admin-home.component';
import { SuperAdminAnalysisComponent } from './components/superAdmin/super-admin-analysis/super-admin-analysis.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalanderComponent } from './components/calander/calander.component';
import { OrganizationSummaryComponent } from './components/organization-summary/organization-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageNavbarComponent,
    FooterComponent,
    LoginComponent,
    SuperAdminDashboardComponent,
    OrganizationAdminDashboardComponent,
    OrganizationSubordinateDashboardComponent,
    SidebarNavbarComponent,
    AddOrganizationComponent,
    AddOrganizationAdminComponent,
    AllOrganizationsComponent,
    ViewOrganizationComponent,
    IncidentsComponent,
    OrgAdminSidebarComponent,
    AddSubordinateComponent,
    AddUserComponent,
    ReportIncidentComponent,
    ChangeIncidentStatusComponent,
    UsersComponent,
    AddIncidentTypeComponent,
    OrgSubordinateSidebarComponent,
    ViewIncidentDetailsComponent,
    AdminHomeComponent,
    SubordinatesComponent,
    VerifyIncidentsComponent,
    AdminNotificationsComponent,
    SubordHomeComponent,
    NoPermissionsPageComponent,
    SuperAdminNotificationsComponent,
    SuperAdminHomeComponent,
    SuperAdminAnalysisComponent,
    ProfileComponent,
    CalanderComponent,
    OrganizationSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule,
    AsyncPipe,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
