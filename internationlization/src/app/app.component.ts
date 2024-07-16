import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 i18n="greeting">Hello, {{name}}!</h1>`,
})
export class AppComponent {
  name = 'Angular';
}
