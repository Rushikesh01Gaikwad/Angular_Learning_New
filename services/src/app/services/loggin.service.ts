import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { }

  logMessage(message:string){
    console.log(message)
  }

  logError(message:string){
    console.log(message)

  }
}
