import { Component, OnInit } from '@angular/core';

import { FormsService } from '../../services/forms.service';
import { Form } from '../../model/form';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {
  public formsList: Form[] = [];

  constructor(public pForm: FormsService) { }

  ngOnInit() {
    this.getForms();
  }

  deleteForm(index): void {
    this.formsList.splice(index, 1);
  }

  getForms(): void {
    this.pForm.getFormsList()
    .subscribe((forms) => {
       this.formsList = forms});
  }

  setForm(form): void {
    this.pForm.setForm(form);
  }

}
