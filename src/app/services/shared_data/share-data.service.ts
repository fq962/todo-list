import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private _borrarTarea = new BehaviorSubject<boolean>(false);

  // Metodos para obtener el valor del BehaviorSubject
  setTareBorrada(estaBorrada: boolean) {
    this._borrarTarea.next(estaBorrada);
  }

  // Metodos para obtener el valor
  getTareaBorrada(): Observable<boolean> {
    return this._borrarTarea.asObservable();
  }
}
