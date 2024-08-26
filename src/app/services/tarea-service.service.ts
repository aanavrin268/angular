import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



export interface Tarea {
  id: string;
  nombre: string;
  estado: boolean;
}



@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {
  private tareas: Tarea[] = [];
  private tareasSubject: BehaviorSubject<Tarea[]>
  = new BehaviorSubject<Tarea[]>(this.tareas);

  constructor() { }


  getTareas(): Observable<Tarea[]> {
    return this.tareasSubject.asObservable();
  }

  addTarea(tarea: Tarea): void{
    this.tareas.push(tarea);
    this.tareasSubject.next(this.tareas);
  }

  getTareaByID(id: string): Tarea | undefined {
    return this.tareas.find(tarea =>
      tarea.id === id
    );
  }


  deleteTarea(id: string): void{
    this.tareas = this.tareas.filter(
      tarea => tarea.id !== id
    );
    this.tareasSubject.next(this.tareas);
  } 


  updateTarea(updateTarea: Tarea): void {
    const index = this.tareas.findIndex(
      tarea => tarea.id === updateTarea.id
    );

    if (index !== -1){
      this.tareas[index] = updateTarea;
      this.tareasSubject.next(this.tareas);
    }else{
      console.error('tarea no encotnrada para actualzair');
    }
  }

}
