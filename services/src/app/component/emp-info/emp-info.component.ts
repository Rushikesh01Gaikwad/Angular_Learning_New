import { Component } from '@angular/core';
import { RecordsService } from '../../services/records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrl: './emp-info.component.scss',
})
export class EmpInfoComponent {
  
  constructor(private rservice: RecordsService){}

  msgalert(){
    this.rservice.messageAlert();
  }
 
}
