import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {

  username= '';
  password= '';
  
  constructor(private router: Router){}

  onSubmit(Form:any) {
    if (Form.valid) {
      console.log('Form submitted:', this.username, this.password);
    } else {
      console.error('Form is invalid!');
    }
  }

  reactForm(){
    this.router.navigate(['reactive'])
  }
}
