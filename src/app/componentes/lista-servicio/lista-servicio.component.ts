import { Component, OnInit } from '@angular/core';
import { TareaServiceService, Tarea } from '../../services/tarea-service.service';

@Component({
  selector: 'app-lista-servicio',
  templateUrl: './lista-servicio.component.html',
  styleUrl: './lista-servicio.component.css'
})
export class ListaServicioComponent implements OnInit {

  public tareas: Tarea[] = [];


  constructor(private service: TareaServiceService){}

  ngOnInit(): void {
    this.service.getTareas().subscribe(
      (tareas) => {
        console.log('tareas: ', tareas);
        this.tareas = tareas;
      },
      (error) => {
        console.log('Error al obtener tareas: ', error);
      }
    );
  }


  
  delete(id_ : string){
    this.service.deleteTarea(id_);
  }

}
