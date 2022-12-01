import { Component, Input } from '@angular/core';
import { infoTarea } from 'src/app/interfaces/info-tarea.interface';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.scss'],
})
export class CardTareaComponent {
  @Input() infoTarea: infoTarea;

  constructor(private tareasSecvice: TareasService) {}

  ngOnInit(): void {
    console.log(this.infoTarea);
  }

  tareaHecha() {
    console.log('Tarea hecha');
  }

  eliminarTarea(tareaId: number) {
    this.tareasSecvice.eliminarTarea(tareaId).subscribe((res) => {
      if (res) {
        this.tareasSecvice.getTareas();
      }
    });
  }
}
