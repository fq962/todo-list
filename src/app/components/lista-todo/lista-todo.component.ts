import { Component } from '@angular/core';
import { infoTarea } from 'src/app/interfaces/info-tarea.interface';

@Component({
  selector: 'app-lista-todo',
  templateUrl: './lista-todo.component.html',
  styleUrls: ['./lista-todo.component.scss'],
})
export class ListaTodoComponent {
  cities: City[];
  tareas: infoTarea[] = [];
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

  ngOnInit(): void {
    this.tareas = [
      {
        id: 1,
        descripcion: 'Ir al supermercado por carne',
        realizada: false,
      },
      {
        id: 2,
        descripcion: 'Hacer tarea de matematicas',
        realizada: false,
      },
      {
        id: 3,
        descripcion: 'Probando las tareas',
        realizada: false,
      },
      {
        id: 4,
        descripcion: 'Probando las tareas',
        realizada: false,
      },
    ];
  }
}

interface City {
  name: string;
  code: string;
}
