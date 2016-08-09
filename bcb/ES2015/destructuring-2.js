
function violenceSolver({protocole, host, port}){
    console.log(protocole + '://' + host + ':' + port);
}


function main(){
    let settings = {
        protocole : 'https',
        host : 'localhost',
        port : '8443'
    }

    violenceSolver(settings);
}