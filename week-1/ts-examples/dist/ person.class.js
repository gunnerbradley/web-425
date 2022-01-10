"use strict";
/**
 * Title: person.interface.ts
 * Author: Gunner Bradley
 * Date: 09 January 2022
 * Description: Person class that implements a Person interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var myName = new Person("Gunner", "Bradley");
console.log("My name is ".concat(myName.firstName, " ").concat(myName.lastName));
