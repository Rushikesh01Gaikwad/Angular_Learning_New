import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor( private httpclient: HttpClient) { }

  url='http://localhost:3000/projectData'

  getdata(){
    return this.httpclient.get(this.url)
  }
}
