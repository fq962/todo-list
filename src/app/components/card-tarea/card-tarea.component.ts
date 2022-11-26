import { Component } from '@angular/core';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.scss'],
})
export class CardTareaComponent {
  constructor() {}

  ngOnInit(): void {}

  tareaHecha() {
    console.log('Tarea hecha');
  }

  borrarTarea() {
    console.log('Borrar tarea');
  }
}
