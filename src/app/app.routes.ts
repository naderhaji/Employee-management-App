import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectEmployeesComponent } from './pages/project-employees/project-employees.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'employees',
        component: EmployeeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },

      {
        path: 'project',
        component: ProjectComponent,
      },
      {
        path: 'project-employees',
        component: ProjectEmployeesComponent,
      },
    ],
  },
];
