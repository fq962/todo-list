import { Component } from '@angular/core';
import { infoTarea } from 'src/app/interfaces/info-tarea.interface';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-lista-todo',
  templateUrl: './lista-todo.component.html',
  styleUrls: ['./lista-todo.component.scss'],
})
export class ListaTodoComponent {
  tareas: infoTarea[] = [];
  nuevaTarea: string = '';

  constructor(private tareasSecvice: TareasService) {}

  ngOnInit(): void {
    this.getTareas();
    console.log(this.tareas.length);
  }

  getTareas() {
    this.tareasSecvice.getTareas().subscribe((res) => {
      this.tareas = res;
    });
  }

  agregarTarea(event: any) {
    if (event.keyCode === 13) {
      event.currentTarget.value = '';
      this.tareasSecvice.agregarTarea(this.nuevaTarea).subscribe((res) => {
        if (res) {
          this.getTareas();
        }
      });
    }
  }
}
