import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fromDate:any;
  constructor(private datePipe: DatePipe) { 
    this.fromDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
  }
}
