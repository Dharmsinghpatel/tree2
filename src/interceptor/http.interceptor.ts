import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted request: ' + request.url);
        if (request.url) {
            // request = request.clone({});
            request = request.clone({
                headers: new HttpHeaders({
                    // 'Content-Type': 'text/plain',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Origin': 'http://localhost:4200'
                    // 'Access-Control-Allow-Credentials': 'true',
                    // 'Access-Control-Allow-Headers': 'Content-Type',
                    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                    // 'key': 'x-api-key',
                })
            });
        }
        return next.handle(request);

    }
}