import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../../services/car-data.service';
import {  Car } from '../../classes/car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  constructor( private data:CarDataService) {
    
  }

  ngOnInit() {
    this.data.getCars(this.data.start ,this.data.end).subscribe(arr=> this.data.carsToshow = arr );
  }

  next(){
    this.data.start += 5;
    this.data.end += 5;
    this.data.getCars(this.data.start ,this.data.end).subscribe(arr => this.data.carsToshow = arr );
  }

  prev(){
    this.data.start -= 5;
    this.data.end -= 5;
    this.data.getCars(this.data.start ,this.data.end).subscribe(arr=> this.data.carsToshow = arr );
  }
}
