function testParams(param1, param2) {
    if(param1 === undefined) {
        param1 = "";
    }
}

// Valeur par défaut --> Magie
function testParams(param1 = "", param2) {}
function testParams(param1, param2 = "") {}
function testParams(param1, param2 = param1) {}

function convertPrice(price,settings) {
    return price * settings.change;
}
// Devient
function convertPrice(price, {change}) {
    return price* change;
}
// Mixé avec les paramètres par defaut
function convertPrice(price, {change=1}) {
    return price* change;
}

// Mixé avec les templates strings
function buildUrl({protocol='http', host, port=80, context}) {
    return `${protocol}://${host}:${port}/${context}`;
}

// Avec les tableaux
function join(char, [first,...others]) {
    return first + others.reduce(function(joined,value) {
        return `${joined}${char}${value}`;
    },'');
}


// Fat Arrow functions
() => "hello world";

function fatFunction(){
    return "hello world";
}


// Maintien de context
MyClass.prototype.myMethod= function(array) {
    array.map(function(value) {
        console.log(this.value1); // undefined
    });
};

// Solution 1 : Créer une variable contenant le contexte -> Pas idéal
MyClass.prototype.myMethod= function(array) {
    var that= this;
    array.map(function(value) {
        console.log(that.value1); // "val1"
    });
};

// Solution 2 : bind()
MyClass.prototype.myMethod= function(array) {
    array.map(function(value) {
        console.log(this.value1); // "val1"
    }.bind(this));
};

// Solution 3 : Fat arrow functions maintiennent naturellement le contexte
MyClass.prototype.myMethod= function(array) {
    array.map(value => console.log(this.value1));
};