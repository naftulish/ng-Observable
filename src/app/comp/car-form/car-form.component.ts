import { Component, OnInit} from '@angular/core';
import { CarDataService } from '../../services/car-data.service';
import {  Car } from '../../classes/car';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})

export class CarFormComponent implements OnInit {

  constructor(private data:CarDataService) { }

  carmodel;
  carcolor;
  cardate;

  ngOnInit() {
    this.carmodel = document.getElementById('car_model');
    this.carcolor = document.getElementById('car_color');
    this.cardate = document.getElementById('car_date');
  }
  
  car:Car = new Car();

  number:number = this.data.cars.length + 1;

  saveCarToTable(){
    this.car.ID = this.number;
    this.car.model = this.carmodel.value;
    this.car.color = this.carcolor.value;
    this.car.date = this.cardate.value;

    this.data.cars.push(this.car);
    this.car = new Car();
    this.number++;
    document.getElementById('newCar').reset();
    this.data.getCars(this.data.start ,this.data.end).subscribe(arr=> this.data.carsToshow = arr );
  }
}
