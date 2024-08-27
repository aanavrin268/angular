import { Component, ViewChild, viewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrl: './comunicacion.component.css'
})
export class ComunicacionComponent {

  public fGroup: FormGroup;
  @ViewChild(HijoComponent) hijo!: HijoComponent; // Referencia al componente hijo

  public recibedMsg: any;

  constructor(public fbuilder: FormBuilder){
    this.fGroup = this.fbuilder.group({
        mensaje:['',[Validators.required]]

    });
  }


  sendData():void{

    const msg = this.fGroup.get('mensaje')?.value;

    if(this.hijo){
      this.hijo.mensaje = msg;
    }

  }

  recivedData(mensaje: any){
    this.recibedMsg = mensaje;
  }


}
