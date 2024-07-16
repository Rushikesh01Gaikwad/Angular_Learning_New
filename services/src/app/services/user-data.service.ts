import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  users(){
    return [
      {name:'rushi', sirname:'giaikwad'},
      {name:'pratham', sirname:'gaikwad'},
      {name:'lata', sirname:'apatil'},
    ]
  }
}
