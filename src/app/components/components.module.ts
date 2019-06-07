import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from '../listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ListasComponent],
  exports:[
      ListasComponent,
    ],
  imports: [
    IonicModule,
    CommonModule,
    PipesModule
  ]
})
export class ComponentsModule { }
