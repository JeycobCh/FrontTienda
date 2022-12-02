import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { ProductoformsComponent } from './admin/productoforms/productoforms.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './usuario/index/index.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { FooterComponent } from './usuario/footer/footer.component';
import { LandingComponent } from './usuario/landing/landing.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,

    ProductosComponent,
    ProductoformsComponent,
    IndexComponent,
    InicioComponent,
    FooterComponent,
    LandingComponent,
    NavegadorComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
