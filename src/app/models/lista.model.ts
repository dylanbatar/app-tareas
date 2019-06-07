import { ListaItem } from './lista-item.model';


export class Lista {

    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    completado: boolean;
    item: ListaItem[];

    constructor(titulo) {
        this.id = new Date().getTime();
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.completado = false;
        this.item = [];
    }

}