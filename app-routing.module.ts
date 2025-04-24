import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

const routes: Routes =[
    {
      path: 'signup',
      component: SignupComponent,
      // canActivate: [AuthGuard]

    },
    {
      path: '',
      component: LoginComponent,

    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]

    },
    {
      path: 'table',
      component: TableComponent,
      canActivate: [AuthGuard]

    },
    {
      path: 'add',
      component: SignupComponent,
      canActivate: [AuthGuard]

    },
    {
      path: 'update/:id',
      component: SignupComponent,
      canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
