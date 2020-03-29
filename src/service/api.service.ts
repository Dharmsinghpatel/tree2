import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _jsonURL = '../assets/dashboard.json';
  private r_jsonURL = '../assets/reading.json';
  private t_jsonURL = '../assets/topics.json';
  constructor(public http: HttpClient) {

  }

  public getDashboard(): Observable<any> {
    return this.http.get(this._jsonURL).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    )
  }

  public getReading(): Observable<any> {
    return this.http.get(this.r_jsonURL).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    )
  }

  public getTopic(): Observable<any> {
    return this.http.get(this.t_jsonURL).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    )
  }
}
