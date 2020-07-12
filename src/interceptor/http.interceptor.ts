import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../app/sub-component/custom-loader/custom-loader.service';

@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, private loaderService: LoaderService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url) {
            request = request.clone({
                headers: new HttpHeaders({
                    'Authorization': 'ZWhnanhmLGtsLnhmZzU0NjU2NDU2MzQ1YDIxMz0wLSdbLy51aW9pZGZ0dHR5dQ==',
                })
            });
        }
        // return next.handle(request);
        this.loaderService.isLoading.next(true);
        return Observable.create(observer => {
            const subscription = next.handle(request)
                .subscribe(
                    event => {
                        if (event instanceof HttpResponse) {
                            this.loaderService.isLoading.next(false);
                            observer.next(event);
                        }
                    },
                    err => {
                        alert('error' + err);
                        this.loaderService.isLoading.next(false);
                        observer.error(err);
                    },
                    () => {
                        this.loaderService.isLoading.next(false);
                        observer.complete();
                    });
            // remove request from queue when cancelled
            return () => {
                this.loaderService.isLoading.next(false);
                subscription.unsubscribe();
            };
        });
    }
}