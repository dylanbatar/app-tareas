import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrarListasPipe } from './filtrar-listas.pipe';

@NgModule({
  declarations: [FiltrarListasPipe],
  exports:[FiltrarListasPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
