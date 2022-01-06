/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 21 April 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = true;

  assignment: string = 'Exercise 2.3 - Data Binding';
}
