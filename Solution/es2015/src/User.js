import {Person} from './Person'

export class User extends Person {
  constructor() {
    super();
    this.badgeNumber = '';
    this.jobTitle = '';
  }

  getJobCard() {
    return `${this.badgeNumber} : ${this.getFullname()}, ${this.jobTitle}`;
  }
}