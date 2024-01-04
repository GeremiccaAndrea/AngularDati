import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{
  macchine: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.macchine = ['Opel', 'Fiat', 'Toyota', 'Audi', 'BMW', 'Lamborghini', 'Ferrari', 'McClaren', 'Porche', 'Alfa Romeo']; //Riempiamo il vettore
  }
  ngOnInit() {
  }

}
