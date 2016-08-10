// Ajout de fonction
var obj= {
    myFunction: function() {}
};

var obj= {
    myFunction() {}
};

// Proprétés homonymes
var obj= {
    attribute: attribute
};

// Ne fonctionne que si la propriété et la variable ont le même nom
var obj= {
    attribute
};




// Propriétés calculées
// Avant
var prop= "attribute";
var obj= {};
obj[prop] = "test";

// Maintenant
var prop= "attribute";
var obj= {
    [prop]: "test",
    [prop+ '1']: "test2"
};
obj.attribute; // "test"
obj.attribute1; // "test2"

// Pour les fonctions aussi
constobj= {
    ['h'+'ello']() {
        return 'hi';
    }
};
console.log(obj.hello()); // hi