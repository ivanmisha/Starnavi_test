import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsListComponent } from './components/forms-list/forms-list.component';
import { FormsDetailComponent } from './components/forms-detail/forms-detail.component';
import { FormsResolve } from './services/forms.resolver';

const routes: Routes = [
  {path: '', redirectTo: '/forms', pathMatch: 'full' },
  {path: 'forms', component: FormsListComponent },
  {path: 'forms/:id', component: FormsDetailComponent, resolve: {forms: FormsResolve}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// export const routing = RouterModule.forChild(routes);
export class ProjectFormsRoutingModule { }
