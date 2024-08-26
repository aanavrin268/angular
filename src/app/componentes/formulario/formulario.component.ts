import { Component } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  public form: FormGroup;
 
  constructor(public  fb: FormBuilder){
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [
        Validators.required, Validators.email
      ]],
      mensaje: ['', [Validators.required]]
    });
  }


  showData(){
      console.log(this.form.value);
  }

}
