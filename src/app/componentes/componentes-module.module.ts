import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesModuleRoutingModule } from './componentes-module-routing.module';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceroComponent } from './tercero/tercero.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { HijoComponent } from './comunicacion/hijo/hijo.component';



@NgModule({
  declarations: [
  
  
  ],
  imports: [
    CommonModule,
    ComponentesModuleRoutingModule
  ],
  exports: [
    
  ]
})
export class ComponentesModuleModule { }
