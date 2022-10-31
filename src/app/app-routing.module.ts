import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListaGaleriaComponent } from './components/lista-galeria/lista-galeria.component';
import { AddEditarGaleriaComponent } from './components/add-editar-galeria/add-editar-galeria.component';
import { VerGaleriaComponent } from './components/ver-galeria/ver-galeria.component';

const routes: Routes = [
     { path: '', redirectTo: 'listaGaleria', pathMatch: 'full' },
     { path : 'listaGaleria', component: ListaGaleriaComponent },
     { path : 'addGaleria', component: AddEditarGaleriaComponent },
     { path : 'verGaleria/:id', component: VerGaleriaComponent },
     { path : 'editarGaleria/:id', component: AddEditarGaleriaComponent },
/*      { path : '**', redirectTo: 'listaGaleria', pathMatch: 'full' }
 */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
