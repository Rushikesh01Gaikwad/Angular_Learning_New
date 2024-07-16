import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  @Input() parentData:string='';
  @Output() sendData = new EventEmitter<string>()

  name:string = 'from child'

  ngOnInit(): void {
    
  }

  callAlert(){
    this.sendData.emit(this.name)
  }

}
