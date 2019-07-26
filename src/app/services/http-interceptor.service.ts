import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor , HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { SessionStorageService } from './session-storage.service';
import { AppService } from './app.service';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(public authService: AuthService, public sessionStorage: SessionStorageService, public appService: AppService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    request = request.clone({url: environment.baseURL + request.url});
    const currentUser: string = this.sessionStorage.getItem('Authorization');
    if (currentUser) {
        request = request.clone({
            setHeaders: {
                Authorization: `Token ${currentUser}`
            }
        });
    }
    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.appService.notification.next(event);
            }
            return event;
        }, catchError((error: HttpErrorResponse) => {
            this.appService.notification.next(error);
            return throwError(error);
        })));
}
}
