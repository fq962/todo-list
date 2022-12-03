import { Component } from '@angular/core';
import { infoTarea } from 'src/app/interfaces/info-tarea.interface';
import { TareasService } from 'src/app/services/tareas.service';
import { Subscription } from 'rxjs';
import { ShareDataService } from 'src/app/services/shared_data/share-data.service';

@Component({
  selector: 'app-lista-todo',
  templateUrl: './lista-todo.component.html',
  styleUrls: ['./lista-todo.component.scss'],
})
export class ListaTodoComponent {
  tareas: infoTarea[] = [];
  nuevaTarea: string = '';
  subscripciones: { [key: string]: Subscription } = {};

  constructor(
    private shareData: ShareDataService,
    private tareasSecvice: TareasService
  ) {
    this.subscribirse();
  }

  ngOnInit(): void {
    this.getTareas();
    console.log(this.tareas.length);
  }

  subscribirse(): void {
    this.subscripciones['tareaBorrada$'] = this.shareData
      .getTareaBorrada()
      .subscribe((borrada) => {
        borrada ? this.getTareas() : false;
      });
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
