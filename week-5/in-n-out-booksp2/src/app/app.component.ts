/**
 * Title: app.component.ts
 * Author: Gunner Bradley
 * Date: February 6th 2022
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.3 - Data Tables';
  }
}
