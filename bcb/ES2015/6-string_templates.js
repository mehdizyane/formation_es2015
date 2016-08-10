function string_tempate(host, port, context){
    

    var url = 'http://' + host + ':' + port + '/' + context;
    
    // devient
    var url = `http://${host}:${port}/${context}`;

}