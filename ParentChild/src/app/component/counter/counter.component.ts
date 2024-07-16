import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:``,
  styles: []
})
export class CounterComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  counter:number=0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
