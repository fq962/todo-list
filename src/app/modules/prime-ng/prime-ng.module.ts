import { NgModule } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  exports: [ListboxModule, InputTextModule, RatingModule, SkeletonModule],
})
export class PrimeNgModule {}
