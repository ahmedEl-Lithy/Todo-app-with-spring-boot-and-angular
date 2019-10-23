import { BasicAuthService } from '../basic-auth.service';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    const username = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        });
    }
    return next.handle(request);
  }


}
