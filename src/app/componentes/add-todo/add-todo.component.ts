import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tarea, TareaServiceService } from '../../services/tarea-service.service';
import {v4 as uuidv4 } from 'uuid';




@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  public fGroup: FormGroup;

  constructor (
    public fbuilder: FormBuilder,
    private service: TareaServiceService
  ){
    this.fGroup = this.fbuilder.group({
      tarea: ['',[Validators.required]],
      estado: ['',[Validators.required]]
    });
  }



  sendData(){
    console.log('data: ', this.fGroup.value)

    const data = this.fGroup.value;
    const estado = data.estado === 'true';
    console.log('Tarea:', data.tarea);
    console.log('estado:', data.estado);


    const nTarea: Tarea = {
      id: uuidv4(),
      nombre: data.tarea,
      estado: data.estado === 'true'
    };


    console.log('new: ', nTarea);

    this.service.addTarea(nTarea);
    this.fGroup.reset();


  }

}
