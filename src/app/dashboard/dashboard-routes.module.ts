import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Rutas hijas
import { DashboardComponent } from '../dashboard/dashboard.component';
import { dashboardRoutes } from '../dashboard/dashboard.routes';
//import { AuthGuard } from '../services/auth.guard';

const rutasHijas: Routes=[
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
    //canActivate: [ AuthGuard ]
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutasHijas)
  ],
  exports:[RouterModule]
})
export class DashboardRoutesModule { }
