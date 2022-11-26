import { Component, Input } from '@angular/core';
import { infoTarea } from 'src/app/interfaces/info-tarea.interface';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.scss'],
})
export class CardTareaComponent {
  @Input() infoTarea: infoTarea;

  constructor() {}

  ngOnInit(): void {
    console.log(this.infoTarea);
  }

  tareaHecha() {
    console.log('Tarea hecha');
  }

  borrarTarea() {
    console.log('Borrar tarea');
  }
}
