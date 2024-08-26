import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarea, TareaServiceService } from '../../services/tarea-service.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent implements OnInit {
  public id: any;
  public fgroup: FormGroup;

  constructor (public fbuilder: FormBuilder, public route: ActivatedRoute, public service: TareaServiceService) {
    this.fgroup = fbuilder.group({
      tarea:['',[Validators.required]],
      estado: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('el id es: ', this.id)

    if(this.id){
      const tarea = this.service.getTareaByID(this.id);

      if(tarea){
        this.fgroup.patchValue({
          tarea: tarea.nombre,
          estado: tarea.estado ? 'true' : 'false'
        });
      } else{
        console.error('Tarea no encontrada');
      }

    }

  }


  sendData(){
    console.log('update: ', this.fgroup.value);

    const updateTarea: Tarea = {
      id: this.id!,
      nombre: this.fgroup.value.tarea,
      estado: this.fgroup.value.estado === 'true'
    };

    this.service.updateTarea(updateTarea);
    console.log('Tarea actualizada', updateTarea);

  }



}
