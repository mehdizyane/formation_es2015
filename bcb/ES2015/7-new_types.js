function maps(){
    let map= new Map();
    map.set('key','value');
    map.get('key');
    map.delete('key');
    map.has('key');
    
    // init eeaaaasy
    const map = new Map()
        .set(1, 'one')
        .set(2, 'two')
        .set(3, 'three');
    
    // Methods    
    map.size();
    map.clear();
    map.keys();
    map.values();
    map.entries();
    
    // convertir map en tableau grâce au destructuring
    var myArray = [...map];
        
}

function sets(){
    let set = new Set();
    set.add('val1');
    set.has('val1');
    set.delete('val1');
    
    // inits rapides
    let set = new Set(['val1','val2']);
    let set = new Set().add('val1').add('val2');
    //Methods
    set.size();
    set.clear();
    
    var myArray= [...set];

}