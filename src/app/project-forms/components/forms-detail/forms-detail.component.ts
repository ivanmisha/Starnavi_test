import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { FormControl, FormBuilder, FormGroup  } from '@angular/forms';

import { FormsService } from '../../services/forms.service';
import { Form } from '../../model/form';

@Component({
  selector: 'app-forms-detail',
  templateUrl: './forms-detail.component.html',
  styleUrls: ['./forms-detail.component.scss']
})
export class FormsDetailComponent implements OnInit {
  private formInfo: Form;
  private formFields: any = [];

  constructor(
    public pForm: FormsService,
    private route: ActivatedRoute,
    private router: Router,
 ) {
   // pForm.selectedForm$.subscribe((form) => {console.log(form); this.formInfo = form});
 }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getFormDetail(id);
    this.formInfo = this.route.snapshot.data.forms.find(form => form.id == id);
    console.log(this.formInfo);
  }

  getFormDetail(id: number) {
    this.pForm.getFormDetail(id)
    .subscribe((form)=>{this.formFields = form.data});
  }

}
