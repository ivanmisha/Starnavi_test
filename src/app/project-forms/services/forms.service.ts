import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { map, retry, catchError } from 'rxjs/operators';

import { Form } from '../model/form';

@Injectable()
export class FormsService {
  public formsList: any;

  constructor(private http: HttpClient) { }

  getFormsList(): Observable<any>{
    return this.http.get('http://demo4452328.mockable.io/forms')
    .pipe(
      map((res: HttpResponse) => {
      this.formsList = res.data;
      return this.formsList;
    }),
      catchError(err=>{return []});
    )
  }

  getFormDetail(id: number): Observable<any>{
    return this.http.get('http://demo4452328.mockable.io/forms/'+id)
  }

}
