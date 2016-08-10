// Héritage
var Parent = {
    attribute: "I'm the parent", hello: function() {
            return "Hello " + this.attribute;
        }
};
var Child = function() {
      this.attribute= "I'mthe child";
};

Child.prototype = Object.create(Parent);
Child.constructor = Child;
var boy = new Child();
boy.hello(); // "Hello I'mthe child"



// En ES2015
class Parent1 {
    constructor() {
        this.attribute= "I'ma parent";
    }
    hello() {
        return `Hello ${this.attribute}`;
    }
}

class Child1 extends Parent1 {
    constructor() {
        super();
        this.attribute= "I'ma child";
    }
}
let boy1 = new Child1();
boy1.hello(); // "Hello I'ma child"



// Définir des méthodes statiques
// Avant
var MyClass= function() {};
MyClass.myStaticMethod= function() {};
MyClass.myStaticMethod(); // Ok

var obj= new MyClass();
obj.myStaticMethod(); // KO


class MyClassPoo{
    static myStaticMethod() {}
}

