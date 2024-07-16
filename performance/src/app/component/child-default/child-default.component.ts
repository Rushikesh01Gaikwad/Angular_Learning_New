import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child-default',
  templateUrl: './child-default.component.html',
  styleUrl: './child-default.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildDefaultComponent {

  constructor(private changeDetectRef: ChangeDetectorRef){}

  counter:number = 1;

  inc(){
    this.counter = this.counter + 1;
    this.changeDetectRef.detectChanges();
  }

}
