let Person;
if(typeof(require) == "function")
  Person = require('./Person');

let User = function() {
  Person.call(this);

  this.badgeNumber = '';
  this.jobTitle = '';

  this.getJobCard = function() {
    return `${this.badgeNumber} : ${this.getFullname()}, ${this.jobTitle}`;
  }
};

User.prototype = Object.create(Person);
User.constructor = User;

if(typeof(module) != "undefined")
  module.exports = User;
