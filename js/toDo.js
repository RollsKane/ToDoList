'use strict'
/******************************************************/
/*____    ______        _     _     _
|_   _|   |  _  \      | |   (_)   | |
  | | ___ | | | |___   | |    _ ___| |_
  | |/ _ \| | | / _ \  | |   | / __| __|
  | | (_) | |/ / (_) | | |___| \__ \ |_
  \_/\___/|___/ \___/  \_____/_|___/\__|By Rolls 2020*/

/******************************************************/

/* VERSIÓN 0.1 */

/* VARIABLES */

var toDoList = new Array();
var id = 1;
var tareas = document.getElementById('tareas'); // Aquí se hallan las tareas en el HTML
var icon = 'normal';

/* Ejemplo de Lista de Jsons
toDoList = [
    {
        'id': 1,
        'titulo': 'Estudiar Javascript',
        'prioridad': 'importante',
        'icono': 'fas fa-radiation-alt',
    },
    {
        'id': 2,
        'titulo': 'Jugar al DooM',
        'prioridad': 'urgente',
        'icono': 'fas fa-skull-crossbones',
    },
    {
        'id': 3,
        'titulo': 'ver Terminator',
        'prioridad': 'normal',
        'icono': 'fas fa-exclamation-triangle',
    }
];
*/



/******************************************************/
/* FUNCIÓN PARA CREAR POSITS */
/* TIENE UN CALLBACK A LA FUNCIÓN DE PINTAR POSITS */

function createPosit(pTitulo, pPrioridad = 'normal') { // si no se elige prioridad, se da por normal

    if (pPrioridad != 'normal' && pPrioridad != 'importante' && pPrioridad != 'urgente') {
        pPrioridad = 'normal'; // Si la prioridad es diferente de las tres, es normal
    }

    switch (pPrioridad) { // Dependiendo de la prioridad, cambia el icono
        case 'normal':
            icon = 'fas fa-exclamation-triangle';
            break;
        case 'importante':
            icon = 'fas fa-radiation-alt';
            break;
        case 'urgente':
            icon = 'fas fa-skull-crossbones'
    }


    let posit = {
        'id': id,
        'titulo': pTitulo,
        'prioridad': pPrioridad,
        'icono': icon
    }
    toDoList.push(posit);

    postPosit(id);


    return id += 1;
}




/******************************************************/
/* FUNCIÓN PARA PINTAR POSITS INDEPENDIENTES */

// console.log(document.getElementById('tareas')); // Sección donde se deben postear las tareas
// console.log(toDoList); // Array con posits


function postPosit(pId) {


    console.log(tareas[0]);

    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].id == pId) {
            console.log(toDoList[i]);
            tareas.innerHTML += '<article id="' + toDoList[i].id + '" class="' + toDoList[i].prioridad + '"><h2>' + toDoList[i].titulo + '</h2><i class="' + toDoList[i].icono + '"></i><a href="#" title="eliminar">Eliminar</a></article>';
        }
    }


    return toDoList;
}



/******************************************************/
/* FUNCIÓN PARA PINTAR TODOS LOS POSITS */

// console.log(document.getElementById('tareas')); // Sección donde se deben postear las tareas
// console.log(toDoList); // Array con posits


function postAllPosits() {


    for (let i = 0; i < toDoList.length; i++) {

        console.log(toDoList[i]);

        tareas.innerHTML = '<article id="' + toDoList[i].id + '" class="' + toDoList[i].prioridad + '"><h2>' + toDoList[i].titulo + '</h2><i class="' + toDoList[i].icono + '"></i><a href="#" title="eliminar">Eliminar</a></article>';
    }
}






/******************************************************/
/* FUNCIÓN PARA BORRAR POSITS DEL ARRAY Y DEL PINTADO */


function deletePosit(pId) {
    var insideTareas = tareas.innerHTML;

    //console.log(insideTareas)

    for (let i = 0; i < toDoList.length - 1; i++) {
        if (toDoList[i].id == pId) {
            var postBorrar = toDoList[i];
        }

    }

    toDoList.splice(postBorrar, 1);

    postAllPosits()

    return toDoList;
}






