import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() mensaje: any;

  @Output() msgSended = new EventEmitter<any>();


  enviarMensaje(){
    const msg = "soy el componente hijo";
    this.msgSended.emit(msg);
  }

}
