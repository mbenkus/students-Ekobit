import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
      {
        path: 'admin',
        loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule)
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {
}
