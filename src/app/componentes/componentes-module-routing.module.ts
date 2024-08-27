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
import { EnrutamientoComponent } from './enrutamiento/enrutamiento.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceroComponent } from './tercero/tercero.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { HijoComponent } from './comunicacion/hijo/hijo.component';


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
  },
  {
    path: 'rutas',
    component:EnrutamientoComponent,
    children: [
      {
        path:'primero',
        component: PrimeroComponent
      },
      {
        path:'segundo',
        component:SegundoComponent
      },
      {
        path:'tercero',
        component:TerceroComponent
      }
    ]
  },
  {
    path:'pipe',
    component:PipesComponent
  },
  {
    path:'comunicacion',
    component:ComunicacionComponent,
    children: [
      {
        path: 'hijo',
        component:HijoComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesModuleRoutingModule { }
