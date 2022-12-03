import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { WEB_SERVICE } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor(private http: HttpClient) {}

  // getTareas() {
  //   return this.http.get(`${WEB_SERVICE}/tareas`).pipe(
  //     map((res) => {
  //       if (res) {
  //         return res;
  //       }
  //     }),
  //     catchError((err) => {
  //       console.log('SERVICE ERROR: ', err);
  //       return [err];
  //     })
  //   );
  // }

  //hacer getTareas con la ruta de la api
  getTareas() {
    return this.http.get(`${WEB_SERVICE}/tareas`).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return [];
      }),
      catchError((err) => {
        console.log('SERVICE ERROR: ', err);
        return [err];
      })
    );
  }

  // hacer service para agregar una tarea
  agregarTarea(tarea: string) {
    const body = new HttpParams().set('tarea', tarea);
    return this.http.post(`${WEB_SERVICE}/tareas`, body).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return false;
      }),
      catchError((err) => {
        console.log('SERVICE ERROR: ', err);
        return [err];
      })
    );
  }

  // actualiza el estado de la tarea
  actualizaTarea(tareaId: number, estaFinalizada: boolean) {
    const body = {
      finalizada: estaFinalizada,
    };
    return this.http.patch(`${WEB_SERVICE}/tareas/${tareaId}`, body).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return false;
      }),
      catchError((err) => {
        console.log('SERVICE ERROR: ', err);
        return [err];
      })
    );
  }
  // hacer service para eliminar una tarea
  eliminarTarea(tareaId: number) {
    let params = new HttpParams();
    params = params.append('tareaId', tareaId);
    return this.http.delete(`${WEB_SERVICE}/tareas`, { params }).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return false;
      }),
      catchError((err) => {
        console.log('SERVICE ERROR: ', err);
        return [err];
      })
    );
  }
}
