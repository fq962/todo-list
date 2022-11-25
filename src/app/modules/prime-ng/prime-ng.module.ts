import { NgModule } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@NgModule({
  exports: [
    ListboxModule,
    InputTextModule,
    RatingModule,
    SkeletonModule,
    CardModule,
    DividerModule,
  ],
})
export class PrimeNgModule {}
