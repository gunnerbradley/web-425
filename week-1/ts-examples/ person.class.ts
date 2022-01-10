/**
 * Title: person.interface.ts
 * Author: Gunner Bradley
 * Date: 09 January 2022
 * Description: Person class that implements a Person interface 
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Gunner", "Bradley");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);