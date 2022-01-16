import { Component, OnInit, Input, Injectable } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    '#TypeScript',
    `#${new Date().getFullYear()}`,
    '#CodingWithAngular',
    '#ngOmaha',
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    this.myProfile = new Person('Gunner Bradley', 'Tacos', 'Green');
  }

  ngOnInit(): void {}
}
