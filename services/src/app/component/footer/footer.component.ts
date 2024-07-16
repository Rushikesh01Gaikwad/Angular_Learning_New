import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  data:any;
  constructor(private userdata: UserDataService){
    this.data = userdata.users();
  }

}
