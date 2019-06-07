import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtrarListas',
  pure:false
})
export class FiltrarListasPipe implements PipeTransform {

  transform(lista: Lista[], completado:boolean = true): Lista[] {
    return lista.filter((filtrado) =>filtrado.completado === completado);
  }

}
