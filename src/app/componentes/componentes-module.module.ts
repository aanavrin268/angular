import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesModuleRoutingModule } from './componentes-module-routing.module';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';


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
