import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
employees:Employee[] = [];
ModelTitle!:string;
ActivateAddEditEmpComp:Boolean = false;
employee:any;
constructor(private service: SharedService, private datePipe: DatePipe){}
  ngOnInit(): void {
    this.getEmpAll();
  }
  getEmpAll()
  {
    this.service.getEmpAll().subscribe((data:any)=>{
      this.employees = data as Employee[];
    });
  }
  addClick()
  {
    this.employee ={
      employee_ID:0,
      employee_Name:"",
      address:"",
      gender:true,
      telephone:"",
      dateOfBirth:this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    }
    this.ModelTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }
  closeClick()
  {
    this.ActivateAddEditEmpComp=false;
    this.getEmpAll();
  }
  editClick(item:any){
    this.employee=item;
    this.ModelTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }
  deleteClick(id:any)
  {
    if (confirm('Are you sure??')==true) {
      this.service.deleteEmployee(id).subscribe((data:any)=>{
        this.getEmpAll();
      });
    }
  }
}
