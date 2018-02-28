import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Form } from '../model/form';
import { FormsService } from './forms.service';

@Injectable()
export class FormsResolve implements Resolve<Form> {

  constructor(private pForm: FormsService) {}

  resolve(route: ActivatedRouteSnapshot) {

    return this.pForm.getFormsList();

  }

}
