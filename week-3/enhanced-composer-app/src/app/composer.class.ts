/**
 * Title: composer-class.ts
 * Author: Gunner Bradley
 * Date: January 22 2022
 * Description: Composer list component; displays a list of composers
 */
import { IComposer } from './composer.interface';

export class Composer {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'John Williams',
        genre: 'Cinematic',
      },
      {
        composerId: 101,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Johannes Brahms',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Joseph Haydn',
        genre: 'Classical',
      },
    ];
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
