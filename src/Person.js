
let Person = function() {
  this.firstname = '';
  this.lastname = '';

  this.getFullname = function() {
    return `${this.firstname} ${this.lastname}`;
  }
};

if(typeof(module) != "undefined")
  module.exports = Person;
