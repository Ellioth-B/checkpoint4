import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AccesComponent } from './acces/acces.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { NumeroComponent } from './numero/numero.component';
import { ReserverComponent } from './reserver/reserver.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'acces',
    component: AccesComponent
  },
  {
    path: 'animaux',
    component: AnimauxComponent
  },
  {
    path: 'numero',
    component: NumeroComponent
  },
  {
    path: 'reserver',
    component: ReserverComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
