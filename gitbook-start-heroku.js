
//var exec = require("ssh-exec");
var fs = require('fs');
var path = require('path');
var child = require("child_process");


function initialize(directorio) {
    console.log("\n============ INSTALANDO DEPENDENCIAS GITBOOK-START-HEROKU ============")
    console.log("\nEspere mientras el proceso termina ...")

    var contenido='\ngulp.task("deploy-heroku", function () {'+ 
        '\n\tvar heroku = require("gitbook-start-heroku-alex-moi");'+
        '\n\tvar url = paquete.repository.url;'+
        
        '\n\n\theroku.deploy();'+
        '\n});\n\n';
    
    
    //añadimos la tarea
    fs.writeFileSync(path.resolve(process.cwd(),'gulpfile.js'), contenido,  {'flag':'a'},  function(err) {
        if (err) {
            return console.error(err);
        }
    });
};

function deploy() {

    console.log("Comenzando el deploy en HEROKU");
   
    child.exec('git add . ; git commit -m "subiendo a heroku"; git push heroku master;', function(error, stdout, stderr){
        if(error)
          console.log(error)
        
        console.log(stderr);
        console.log(stdout);
      });

};

module.exports = {
  initialize,
  deploy
}