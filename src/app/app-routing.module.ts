import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'form', loadChildren: 'app/project-forms/project-forms.module#ProjectFormsModule'},
  {path: '', pathMatch: 'full', redirectTo: '/form' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

// export const routing = RouterModule.forRoot(routes);
export class AppRoutingModule { }
