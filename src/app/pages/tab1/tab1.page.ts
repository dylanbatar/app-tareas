import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router } from '@angular/router';
import { async } from 'q';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private dashboard: DashboardService , 
              private router: Router,
              private alertController: AlertController) {
  }

  async agregar(){
    const alert = await this.alertController.create({

      header: 'Nueva Tarea', 
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la tarea'
        }
      ],
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelado');
          }
        },
        {
          text: 'Ok',
          handler: (data) =>{
            if (data.titulo != "") {
              let idLista = this.dashboard.addLista(data.titulo);
              this.router.navigate(['/tabs/tab1/add/',idLista])
            }else{
              return;
            }
          }
        }
       
      ]

    })

    // Disparador del prompt
    await alert.present();
  }
}
