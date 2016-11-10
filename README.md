
# Sistemas y Tecnologías Web. Gitbook Start Heroku. Plugins

Este paquete es un plugin del paquete ```gitbook-start-alex-moi-nitesh```.
Ofrece la posibilidad de desplegar en **heroku** nuestra aplicación.

## Instalación

**Debemos tener** instalado el paquete principal en **global**. Con esto hecho no es necesario instalar el paquete plugin heroku puesto que al ejecutar la aplicación de la forma que se expone a continuación, ésta lo instala por nosotros.
Por tanto, ejecutamos desde el directorio de nuestro gitbook:
```shell
gitbook-start-alex-moi-nitesh -d heroku
```

Para más información sobre las opciones que permite el paquete principal, acuda a su documentación en [gitbook-start-alex-moi-nitesh](https://github.com/ULL-ESIT-SYTW-1617/nueva-funcionalidad-para-el-paquete-npm-plugins-alex-moi).

## Descripción del paquete

El paquete cuenta con dos métodos, **intialize()** y **deploy()**. El primero, al ser invocado por el paquete principal [gitbook-start-alex-moi-nitesh](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh) añadirá una tarea gulp al gulpfile.js de la aplicación. Esta tarea se llamará **deploy-heroku** e invocará el método **deploy()** que se encargará de desplegar la aplicación en **heroku**.


## Funcionamiento

Después de haber ejecutado el comando del paso de **Instalación**, se instalará el paquete gitbook-start-heroku-alex-moi automaticamente y ya podremos desplegar en heroku.


A continuación siga los siguientes pasos (Dentro del directorio del GitBook):
	
1. Autenticarse en heroku `heroku login`
2. `npm install`
3. `git init`
4. `gulp build`
5. `heroku create <nombre_app>`
6. `heroku git:remote -a <nombre_app>`
7. `gulp deploy-heroku`
8. Acuda a la url de la aplicación: `https://nombre_app.herokuapp.com/`


## Enlaces importantes

*  [Página en NPM gitbook-start-heroku-alex-moi Plugin](https://www.npmjs.com/package/gitbook-start-heroku-alex-moi)
*  [Página en NPM gitbook-start-alex-moi-nitesh](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh)
*  [Repositorio GitHub](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-alex-moi.git)
*  [Descripción de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin2.html)
*  [Campus Virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

## Autores

* Alexander Cole Mora | [Página Personal](http://alu0100767421.github.io/)
* Moisés Yanes Carballo | [Página Personal](http://alu0100782851.github.io/)
