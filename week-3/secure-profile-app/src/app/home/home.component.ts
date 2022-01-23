/**
 * Title: home.component.ts
 * Author: Gunner Bradley
 * Date: January 22 2022
 * Description: Home component (Home page)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  title = 'Secure Profile App';
  exerciseName = 'Exercise 3.3 - Passing Data to Routes, Part 2';

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(
      this.route.snapshot.queryParamMap.get('isLoggedIn')
    );
  }

  ngOnInit(): void {}
}
