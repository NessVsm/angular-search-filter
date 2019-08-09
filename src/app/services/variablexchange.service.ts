import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { Company } from './../models/company';

@Injectable({
  providedIn: 'root'
})
export class VariablexchangeService {

  private _listners = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: Company) {
    this._listners.next(filterBy);
  }
}
