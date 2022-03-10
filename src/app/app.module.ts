import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCusComponent } from './customer/show-cus/show-cus.component';
import { AddEditCusComponent } from './customer/add-edit-cus/add-edit-cus.component';
import{ SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    CustomerComponent,
    ShowCusComponent,
    AddEditCusComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SharedService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
