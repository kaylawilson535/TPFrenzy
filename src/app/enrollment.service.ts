import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Merchant } from './merchant';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }

  enroll(merchant: Merchant){
    return this._http.post<any>(this._url, merchant);
  }
}
