import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:CustomerComponent},
  {path:'customer',component:CustomerComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
