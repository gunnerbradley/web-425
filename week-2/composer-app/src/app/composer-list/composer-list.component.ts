/**
 * Title: composer-list.component.ts
 * Author: Gunner Bradley
 * Date: January 22 2022
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('John Williams', 'Cinematic'),
      new Composer('Johann Sebastian Bach', 'Classical'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Johannes Brahms', 'Classical'),
      new Composer('Joseph Haydn', 'Classical'),
    ];
  }

  ngOnInit(): void {}
}
