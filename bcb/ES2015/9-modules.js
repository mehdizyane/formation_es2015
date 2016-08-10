// Solution 1 : namespaces
window.myNamespace = {};
myNamespace.myVar = "test";
myNamespace.myFunction = function() {};

// Solution 2 : fonction auto executées
(function() {
    var myVar = "test";
    var myFunction = function() {};
})();

// Solution 3 : CommonJs
var myImportedVar = require('module2');
var internalVar = "internal";
var externalVar = "external";
module.exports = externalVar;

// Solution native
export var test = "test";
export const test = "test";
export function test() { 
    return "test" 
}
export var test = /test/;
export class test {}

import {test} from'module';
import {test, otherVar} from 'module';
import * as namespace from'module';
import {test as anotherName} from'module';



// Chaque module peut contenir UN seul module par défaut :
export default "test";
export default function() {};
// Vous pourrez l’importer sans les accolades :
import test from'module';



//------lib.js ------
export let counter = 3;
export function incCounter() {counter++;}
//------main1.js ------
import { counter, incCounter} from'./lib';
// The importedvalue `counter` islive
console.log(counter); // 3
incCounter();
console.log(counter); // 4 // The importedvalue can’t bechanged 
counter++; // TypeError

// Dans le navigateur
<script type="module" src="module.js"></script>