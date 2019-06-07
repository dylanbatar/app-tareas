import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {

  lista: Lista;
  desc: string;

  constructor(private activateRouter: ActivatedRoute,
    private dashboard: DashboardService) {
    const idLista = this.activateRouter.snapshot.paramMap.get('idLista');
    this.lista = this.dashboard.getItemLista(idLista);
  }

  addItem() {
    if (this.desc != '') {
      let newItem = new ListaItem(this.desc);
      this.lista.item.push(newItem);
      this.desc = '';
      this.dashboard.guadarLocal();
    }
  }

  checks(item:ListaItem) {
    let pendiente =  this.lista.item.filter((itemData) => !itemData.completado).length;
    if (pendiente === 0 ) {
      this.lista.terminadaEn = new Date();
      this.lista.completado = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.completado = false;
    }
    this.dashboard.guadarLocal();
  }


  delete(i:number){
    this.lista.item.splice(i,1);
    this.dashboard.guadarLocal();
  }
  
}
