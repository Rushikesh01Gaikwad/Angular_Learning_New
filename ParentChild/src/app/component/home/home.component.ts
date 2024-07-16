import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild("paraRef")marker!:ElementRef;
  @ViewChild('childview')child!:CounterComponent;
  @ViewChildren("childrenRef")bgand!:QueryList<any>;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    console.log(this.marker)
    this.marker.nativeElement.style.color="red"
    this.bgand.last.nativeElement.style.color="green";
  }

  inc(){
    this.child.increment();
  }
  
  dec(){
    this.child.decrement();
  }

  data='';
  username='';

  transferData(){
    this.data = this.username;
  }


}
