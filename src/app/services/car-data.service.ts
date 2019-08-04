import { Injectable } from '@angular/core';
import {  Car } from '../classes/car';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  constructor() { }


  cars:Car[] = [
    {ID: 1, model: "toyota", color: "yellou", date: "1/8/16"},
    {ID: 2, model: "BMW", color: "brown", date: "2/3/19"},
    {ID: 3, model: "mersedrs", color: "titanum", date: "8/10/95"},
    {ID: 4, model: "volvo", color: "gray", date: "21/6/83"},
    {ID: 5, model: "ford", color: "black", date: "17/5/89"},
    {ID: 6, model: "bently", color: "silver", date: "12/10/89"},
    {ID: 7, model: "folswagen", color: "gold", date: "4/12/89"},
    {ID: 8, model: "jaguar", color: "silver", date: "31/7/89"},
  ];

  carsToshow:Car[] = [];

  start:number = 0;
  end:number = 5;

  start_btn:boolean = true;
  end_btn:boolean = false;

  getHeader():Observable<string>{
    return of(this.retString()).pipe( delay (2000))
  }

  retString():string{
    return 'Cars Form';
  }

  getCars(n:number ,n2:number):Observable<Car[]>{
    return of(this._get_Cars(n, n2)).pipe( delay (1000))
  }

  _get_Cars(n:number, n2:number):Car[]{
    if(n <= 1){
      n = 0;
      n2 = 5;
      this.end_btn = false;
      this.start_btn = true;
    }

    if(n2 > this.cars.length){
      n2 = this.cars.length;
      this.start_btn = false;
      this.end_btn = true;
    }

    let a:Car[]= [];
    for (let index = n; index < n2; index++) {
      a.push(this.cars[index]);
    }    
    return a;
  }
}
