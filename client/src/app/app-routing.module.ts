import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SuperAdminDashboardComponent } from './components/superAdmin/super-admin-dashboard/super-admin-dashboard.component';
import { OrganizationAdminDashboardComponent } from './components/organizationAdmin/organization-admin-dashboard/organization-admin-dashboard.component';
import { OrganizationSubordinateDashboardComponent } from './components/organizationSubordinate/organization-subordinate-dashboard/organization-subordinate-dashboard.component';
import { AddOrganizationComponent } from './components/superAdmin/add-organization/add-organization.component';
import { AddOrganizationAdminComponent } from './components/superAdmin/add-organization-admin/add-organization-admin.component';
import { AllOrganizationsComponent } from './components/superAdmin/all-organizations/all-organizations.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { AddSubordinateComponent } from './components/organizationAdmin/add-subordinate/add-subordinate.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReportIncidentComponent } from './components/report-incident/report-incident.component';
import { ChangeIncidentStatusComponent } from './components/change-incident-status/change-incident-status.component';
import { UsersComponent } from './components/users/users.component';
import { AddIncidentTypeComponent } from './components/organizationAdmin/add-incident-type/add-incident-type.component';
import { ViewIncidentDetailsComponent } from './view-incident-details/view-incident-details.component';
import { AdminHomeComponent } from './components/organizationAdmin/admin-home/admin-home.component';
import { SubordinatesComponent } from './components/subordinates/subordinates.component';
import { VerifyIncidentsComponent } from './components/organizationAdmin/verify-incidents/verify-incidents.component';
import { AdminNotificationsComponent } from './components/organizationAdmin/admin-notifications/admin-notifications.component';
import { SubordHomeComponent } from './components/organizationSubordinate/subord-home/subord-home.component';
import { OrgAdminGaurdService } from './route-gaurds/org-admin-gaurd.service';
import { NoPermissionsPageComponent } from './components/no-permissions-page/no-permissions-page.component';
import { OrgSubOrgRouteGaurdService } from './route-gaurds/org-sub-org-route-gaurd.service';
import { SuperAdminRouteGaurdService } from './route-gaurds/super-admin-route-gaurd.service';
import { SuperAdminNotificationsComponent } from './components/superAdmin/super-admin-notifications/super-admin-notifications.component';
import { SuperAdminHomeComponent } from './components/superAdmin/super-admin-home/super-admin-home.component';
import { ProfileComponent } from './profile/profile.component';
import { OrganizationSummaryComponent } from './components/organization-summary/organization-summary.component';

const routes: Routes = [
  {
    path:"noPermissions",
    component:NoPermissionsPageComponent
  },
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "superAdminDashboard",
    component: SuperAdminDashboardComponent,
    canActivate:[SuperAdminRouteGaurdService],
    children: [
      {
        path:"viewOrganizationSummary",
        component:OrganizationSummaryComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path:"superAdminDashboard",
        component:SuperAdminHomeComponent
      },
      {
        path:"",
        component:SuperAdminHomeComponent
      },
      {
        path:"notifications",
        component:SuperAdminNotificationsComponent
      },
      {
      path: "addOrganization",
      component: AddOrganizationComponent
    },
    {
      path: "addOrganizationAdmin",
      component: AddOrganizationAdminComponent
    },
    {
      path: "incidents",
      component: IncidentsComponent
    },
    {
      path: "organizations",
      component: AllOrganizationsComponent
    }]
  },
  {
    path: "organizationAdminDashboard",
    component: OrganizationAdminDashboardComponent,
    canActivate:[OrgAdminGaurdService],
    children: [
      {
        path:"viewOrganizationSummary",
        component:OrganizationSummaryComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path: "notifications",
        component: AdminNotificationsComponent
      },
      {
        path: "verifyIncident",
        component: VerifyIncidentsComponent
      },
      {
        path: "users",
        component: UsersComponent
      }
      ,
      {
        path: "subordinates",
        component: SubordinatesComponent
      },
      {
        path: "organizationAdminDashboard",
        component: AdminHomeComponent
      },
      {
        path: "",
        component: AdminHomeComponent
      },
      {
        path: "addSubordinate",
        component: AddSubordinateComponent
      },
      {
        path: "addUser",
        component: AddUserComponent
      },

      {
        path: "changeIncidentStatus",
        component: ChangeIncidentStatusComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "addIncidentType",
        component: AddIncidentTypeComponent
      },
      {
        path: "incidents",
        component: IncidentsComponent
      },
      {
        path: "viewIncident",
        component: ViewIncidentDetailsComponent
      }
    ]
  },
  {
    path: "organizationSubOrdinateDashboard",
    component: OrganizationSubordinateDashboardComponent,
    canActivate:[OrgSubOrgRouteGaurdService],
    children: [
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path: "",
        component: SubordHomeComponent
      },
      {
        path: "organizationSubOrdinateDashboard",
        component: SubordHomeComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "addUser",
        component: AddUserComponent
      },
      {
        path: "reportIncident",
        component: ReportIncidentComponent
      },
      {
        path: "changeIncidentStatus",
        component: ChangeIncidentStatusComponent
      },
      {
        path: "viewAllIncidents",
        component: IncidentsComponent
      },
      {
        path: "viewIncidentDetails",
        component: ViewIncidentDetailsComponent
      },
      {
        path: "changeIncidentStatus",
        component: ChangeIncidentStatusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
