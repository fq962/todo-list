import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BorrarTareaSingletonService {
  private _estaBorrada: boolean = false;
  constructor(
    @Optional() @SkipSelf() sharedService?: BorrarTareaSingletonService
  ) {
    if (sharedService) {
      throw new Error('Ya existe una instancia del singleton!');
    }

    console.log('Singleton service created');
  }

  getEstaBorrada(): boolean {
    return this._estaBorrada;
  }

  setEstaBorrada(estaBorrada: boolean): void {
    this._estaBorrada = estaBorrada;
  }
}
