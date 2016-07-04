export class Person {
  constructor() {
    this.firstname = '';
    this.lastname = '';
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}