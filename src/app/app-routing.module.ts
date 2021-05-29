import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportPageComponent } from './pages/import-page/import-page.component';

const routes: Routes = [
  {
    path: 'import',
    component: ImportPageComponent
  },
  {
    path: '',
    redirectTo: 'import',
    pathMatch: 'full'
  },
  // Error
  {
    path: '**',
    redirectTo: 'import',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
