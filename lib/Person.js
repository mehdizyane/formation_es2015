'use strict';

var Person = function Person() {
  this.firstname = '';
  this.lastname = '';

  this.getFullname = function () {
    return this.firstname + " " + this.lastname;
  };
};

if (typeof module != "undefined") module.exports = Person;