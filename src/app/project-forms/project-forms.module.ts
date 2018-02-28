import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectFormsRoutingModule } from './project-forms-routing.module';

import { FormsService } from './services/forms.service';
import { FormsResolve } from './services/forms.resolver';
import { FormsListComponent } from './components/forms-list/forms-list.component';
import { FormsDetailComponent } from './components/forms-detail/forms-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectFormsRoutingModule
  ],
  declarations: [
    FormsListComponent,
    FormsDetailComponent
  ],
  providers: [
    FormsResolve,
    FormsService
  ],
  // exports: [FormsListComponent],
  // entryComponents: [FormsListComponent]
})
export class ProjectFormsModule { }
