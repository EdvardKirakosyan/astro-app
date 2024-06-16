import { Component } from '@angular/core';

@Component({
  selector: 'app-ang',
  standalone: true,
  template: `
    <div>
      <h1>{{ ccc }}</h1>
    </div>
  `,
})
export class AngComponent {
  ccc = "dddddddddddddddd"
}