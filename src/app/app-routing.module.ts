import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule) },
  { path: 'materias', loadChildren: () => import('./materias/materias.module').then(m => m.MateriasPageModule) },
  { path: 'calificaciones', loadChildren: () => import('./calificaciones/calificaciones.module').then(m => m.CalificacionesPageModule) },
  { path: 'tareas', loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasPageModule) },
  { path: 'notificaciones', loadChildren: () => import('./notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule) },
  { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
