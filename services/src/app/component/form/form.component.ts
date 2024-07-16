import { Component } from '@angular/core';
import { LogginService } from '../../services/loggin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(private lgs: LogginService){}

  submitForm(){
    this.lgs.logMessage('This is the login massage successfully');

  }
}
