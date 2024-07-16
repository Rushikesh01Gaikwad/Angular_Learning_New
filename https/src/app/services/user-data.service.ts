import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements HttpInterceptor {

  constructor(private httpclient: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Auth Interceptor called")
    return next.handle(req)
  }

  url='http://localhost:3000/projectData'
  getData(){
    return this.httpclient.get(this.url)
  }

  addUser(product: any): Observable<any> {
    return this.httpclient.post(this.url, product);
  }

  deleteUser(productName: string): Observable<any> {
    const deleteUrl = 'http://localhost:3000/projectData'+productName;
    return this.httpclient.delete(deleteUrl);
  }

}
