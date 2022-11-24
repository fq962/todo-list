import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-todo',
  templateUrl: './lista-todo.component.html',
  styleUrls: ['./lista-todo.component.scss'],
})
export class ListaTodoComponent {
  cities: City[];

  SelectItem?: City;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}

interface City {
  name: string;
  code: string;
}
