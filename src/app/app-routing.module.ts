import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'app1', loadChildren: () => import('./app1/app1.module').then(m => m.App1Module)},
  { path: 'app2', loadChildren: () => import('./app2/app2.module').then(m => m.App2Module)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
