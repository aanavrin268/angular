import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component {

  public fGroup: FormGroup;


  constructor(public builder: FormBuilder){
    this.fGroup= this.builder.group({
      nombre:['',[Validators.required]],
      correo:['',[Validators.required, Validators.email]],
      mensaje:['',[Validators.required]]
  });

  }


  showData(){
    console.log("los valores son: ", this.fGroup.value)
  }

  showErrorM(controlName: string):boolean{
    const control = this.fGroup.get(controlName);
    return control ? control?.valid || control?.pristine : false;
  }

}
