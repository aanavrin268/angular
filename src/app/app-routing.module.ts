import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesModuleModule } from './componentes/componentes-module.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ComponentesModuleModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
