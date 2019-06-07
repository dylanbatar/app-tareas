import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { ListaItem } from '../models/lista-item.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  lista: Lista[] = [];

  constructor() {
    this.cargarLocal();
  }

  addLista(titulo:string){
    let task = new Lista(titulo);
    this.lista.push(task);
    this.guadarLocal();
    return task.id;
  }

  getItemLista(id:string | number){
    id = Number(id);
    return this.lista.find((items) => items.id === id);
  }

  deleteLista( lista:Lista){
    this.lista = this.lista.filter((newList) => newList.id !== lista.id);
    this.guadarLocal();
  }

  //guardar valores en el localStorage
  guadarLocal(){
    localStorage.setItem('data',JSON.stringify(this.lista));
  }

  //cargar los valores del localStorage
  cargarLocal(){
    if (localStorage.getItem('data')) {
      this.lista = JSON.parse(localStorage.getItem('data'));
    }
  }
}
