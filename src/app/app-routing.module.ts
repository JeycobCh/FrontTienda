import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ProductoformsComponent } from './admin/productoforms/productoforms.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { InicioComponent } from './admin/inicio/inicio.component';

const routes: Routes = [
{ path: '', component: ProductosComponent },
{ path: 'formulario', component: ProductoformsComponent},
{ path: 'formulario/:id', component: ProductoformsComponent},
{ path: 'index', component: IndexComponent},
{ path: 'admin', component: InicioComponent}


];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
