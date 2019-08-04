import { Component } from '@angular/core';
import { CarDataService } from '../app/services/car-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private data:CarDataService) {
  }

  title = 'Observables';
  header:string = 'cars';

  ngOnInit() {
    this.data.getHeader().subscribe(str=> this.header = str );
  }

}
