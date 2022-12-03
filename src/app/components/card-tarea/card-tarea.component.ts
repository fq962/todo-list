import { Component, Input } from '@angular/core';
import { infoTarea } from 'src/app/interfaces/info-tarea.interface';
import { TareasService } from 'src/app/services/tareas.service';
import { BorrarTareaSingletonService } from 'src/app/singletons/borrar-tarea.singleton.service';
import { ShareDataService } from 'src/app/services/shared_data/share-data.service';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.scss'],
})
export class CardTareaComponent {
  @Input() infoTarea: infoTarea;
  estaCompletada: boolean = false;
  constructor(
    private shareData: ShareDataService,
    private tareasSecvice: TareasService,
    private _singletonBorrar: BorrarTareaSingletonService
  ) {}

  ngOnInit(): void {
    console.log(this.infoTarea);
  }

  tareaHecha(tareaId: number, estaFinalizada: boolean) {
    this.tareasSecvice
      .actualizaTarea(tareaId, estaFinalizada)
      .subscribe((res) => {
        if (res) {
          this.estaCompletada = estaFinalizada;
          this.shareData.setTareBorrada(res);
        }
      });
  }

  eliminarTarea(tareaId: number) {
    this.tareasSecvice.eliminarTarea(tareaId).subscribe((res) => {
      if (res) {
        this._singletonBorrar.setEstaBorrada(res);
        this.shareData.setTareBorrada(res);
      }
    });
  }
}
