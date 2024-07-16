import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathModuleService {

  constructor() { }

  add(a:number, b:number){

    return a+b;
  }

  addCheck(a:any, b:any){
    if(a == 'number' || b == 'number')
    {
      throw new Error("Both arguments must be a number");
    }
    return a+b;
  }
}
