import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Customer } from './Models/Customer';
import {Routes} from '@angular/router';
import { Employee } from './Models/Employee';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
 
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = 'https://localhost:44348/api/';
  constructor(private http: HttpClient) { }
  //Customer
  getCusAll()
  {
    return this.http.get<any>(this.APIurl+'Customer').pipe();
  }
  addCustomer(val:any)
  {
    return this.http.post(this.APIurl+'Customer',val);
  }
  updateCustomer(id:any,val:any)
  {
    return this.http.put(this.APIurl+'Customer/'+id,val);
  }
  deleteCustomer(val:any)
  {
    return this.http.delete(this.APIurl+'Customer/'+val);
  }
  //Employee
  getEmpAll()
  {
    return this.http.get<any>(this.APIurl+'Employee');
  }
  addEmployee(val:any)
  {
    return this.http.post(this.APIurl+'Employee',val);
  }
  updateEmployee(id:any,val:any)
  {
    return this.http.put(this.APIurl+'Employee/'+id,val);
  }
  deleteEmployee(id:any)
  {
    return this.http.delete(this.APIurl+'Employee/'+id);
  }
}
