export class Hero {
  id: number;
  name: string;
  emotion?: string;
}

export const heroes: Hero[] = [
  { id: 1, name: 'young leader',  emotion: 'happy'},
  { id: 2, name: 'experienced',     emotion: 'sad' },
  { id: 3, name: 'internal transfer', emotion: 'confused' },
 
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/