import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { AppSettings } from '../app/config/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public API_BASE = AppSettings.API_ENDPOINT;
  constructor(public http: HttpClient) {

  }

  public getDashboard(data) {
    return this.apiCall('dashboard', data, 'post');
  }

  public analytic(data) {
    console.log(data)
    return this.apiCall('resources/video', data, 'post');
  }

  public getTopics(data) {
    return this.apiCall('documents/topics', data, 'post')
  }

  public getTopicDetail(data) {
    return this.apiCall('documents/topic', data, 'post');
  }

  public getVideoes(data) {
    return this.apiCall('resources/videoes', data, 'post');
  }

  public search(data) {
    return this.apiCall('documents/search', data, 'post');
  }

  public sendMessage(data) {
    return this.apiCall('auth/sendMessage', data, 'post');
  }

  public apiCall(url = '', data = {}, method = 'get'): Observable<any> {
    return this.http[method](this.API_BASE + url, data).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    )
  }

}
