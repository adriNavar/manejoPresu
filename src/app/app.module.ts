import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeberoComponent } from './cabebero/cabebero.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeberoComponent,
    EgresoComponent,
    IngresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoServicio,EgresoServicio], // Aca van los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
