import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { ListaServicioComponent } from './lista-servicio/lista-servicio.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'holaMundo',
    component:HolaMundoComponent
  },
  {
    path:'formulario',
    component:FormularioComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'formulario2',
    component: Formulario2Component
  },
  {
    path: 'lista2',
    component: ListaServicioComponent,
  },
  {
    path: 'lista2/agregar',
    component: AddTodoComponent
  },
  {
    path:'lista2/editar/:id',
    component:EditTodoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesModuleRoutingModule { }
