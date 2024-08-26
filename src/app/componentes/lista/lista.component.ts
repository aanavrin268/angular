import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public list:any[] = [];

  constructor () {

    this.list=[{
      "nombre": "queso",
      "cantidad": "1",

    },
    {
      "nombre":"jamon",
      "cantidad": "2"
    },
    {
      "nombre": "leche",
      "cantidad": "4"
    }

  ];
  }

}
