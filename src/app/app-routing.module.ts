import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './usuario/index/index.component';
import { ProductoformsComponent } from './admin/productoforms/productoforms.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { FooterComponent } from './usuario/footer/footer.component';
import { LandingComponent } from './usuario/landing/landing.component';

const routes: Routes = [
{ path: '', component: IndexComponent},
{ path: 'productos', component: ProductosComponent },
{ path: 'formulario', component: ProductoformsComponent},
{ path: 'formulario/:id', component: ProductoformsComponent},
{ path: 'index', component: IndexComponent},
{ path: 'admin', component: InicioComponent},
{ path: 'usuario', component: InicioComponent},
{ path: 'footer', component: FooterComponent},
{ path: 'landing', component: LandingComponent}


];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
