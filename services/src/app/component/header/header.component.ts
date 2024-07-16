import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  data:any;

  constructor(private userdata: UserDataService){
    this.data = userdata.users()
  }
}
