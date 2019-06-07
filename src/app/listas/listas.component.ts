import { Component,Input } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { Lista } from '../models/lista.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent{
  @Input() terminada:boolean;
  constructor(private dashboard: DashboardService,private router: Router , private alertController: AlertController) {
    

  }
  selectLista(itemLista){
    if (this.terminada) {
      this.router.navigate(['/tabs/tab2/add',itemLista.id]);
    }else{
      this.router.navigate(['/tabs/tab1/add',itemLista.id]);
    }
   
  }

  delete(lista:Lista){
   this.dashboard.deleteLista(lista);
  }

  async edit(item:Lista){
    const alert = await this.alertController.create({
      header: 'Editar titulo',
      inputs:[{
        name:'titulo',
        placeholder:`${item.titulo}`
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            item.titulo = data.titulo;
          }
        }
      ]
    });

    await alert.present();
  }

}
