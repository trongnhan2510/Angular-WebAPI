import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { formatPercent } from '@angular/common';
import { Customer } from 'src/app/Models/Customer';
import {HttpClientModule, HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-show-cus',
  templateUrl: './show-cus.component.html',
  styleUrls: ['./show-cus.component.css']
})
export class ShowCusComponent implements OnInit {
customers:Customer[] = [];
ModelTitle!:string;
ActivateAddEditCusComp:Boolean = false;
cus:any;
constructor(private service: SharedService){}
  ngOnInit(): void {
    this.getCusAll();
  }
  getCusAll()
  {
    this.service.getCusAll().subscribe((data:any)=>{
      this.customers = data as Customer[];
    });
  }
  addClick()
  {
    this.cus ={
      customer_ID:0,
      customer_Name:"",
      address:"",
      telephone:""
    }
    this.ModelTitle="Add Customer";
    this.ActivateAddEditCusComp=true;
  }
  closeClick()
  {
    this.ActivateAddEditCusComp=false;
    this.getCusAll();
  }
  editClick(item:any){
    this.cus=item;
    this.ModelTitle="Edit Customer";
    this.ActivateAddEditCusComp=true;
  }
  deleteClick(id:any)
  {
    if (confirm('Are you sure??')==true) {
      this.service.deleteCustomer(id).subscribe((data:any)=>{
        this.getCusAll();
      });
    }
  }
}
