import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child-push',
  templateUrl: './child-push.component.html',
  styleUrl: './child-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushComponent implements OnInit {

  constructor(private changeDetectRef: ChangeDetectorRef){}

  items:any[] = [];
  newItemName:string='';

  ngOnInit(): void {
    this.items = [{first:"Rushi"},
      {first:"Shreyas"},
      {first:"Sunil"},
      {first:"Suraj"}
    ]
  }

  addItem(newItem: string){

    this.items = [...this.items, {first: newItem}];

  }

}
