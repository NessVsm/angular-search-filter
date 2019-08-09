import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './../models/company';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class CompaniesService {
  company: Company
  apiUrl = 'api/companies'
  dataSource = new BehaviorSubject(this.company)
  currentData = this.dataSource.asObservable()

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  perfop = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getOneCompany(id: number): Observable<Company> {
    return this.http.get<Company>(this.apiUrl + '/' + id).pipe(
      catchError(this.handleError)
    );
  }
} 
