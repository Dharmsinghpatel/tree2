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
                    'Authorization': 'ZWhnanhmLGtsLnhmZzU0NjU2NDU2MzQ1YDIxMz0wLSdbLy51aW9pZGZ0dHR5dQ==',
                })
            });
        }
        return next.handle(request);

    }
}