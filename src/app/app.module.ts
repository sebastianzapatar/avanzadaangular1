import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { SalirComponent } from './components/salir/salir.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';

const router:Routes=[
  {path:'',component:MainComponent},
  {path:'logout',component:SalirComponent},
  {path:'insertar',component:FormularioComponent},
  {path:'insertar/:id',component:FormularioComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    SalirComponent,
    FormularioComponent,
    Formulario2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
