import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  username: string = '';
  password: string = '';
  loginForm: any;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'rushikesh' && this.password === 'rushi123') {
      this.router.navigate(['about']);
      return true
    } else {
      this.router.navigate([''])
      return false;
    }
  }
}
