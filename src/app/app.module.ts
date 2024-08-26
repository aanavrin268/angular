import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './componentes/hola-mundo/hola-mundo.component';
import { HomeComponent } from './componentes/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { Formulario2Component } from './componentes/formulario2/formulario2.component';
import { ListaComponent } from './componentes/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    HomeComponent,
    FormularioComponent,
    Formulario2Component,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
