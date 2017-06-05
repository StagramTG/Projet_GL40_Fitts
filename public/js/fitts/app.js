/**
 * Fichier: app.js
 * 
 * Code pour les tests de la loi de fitts
 */

/** VARIABLES GLOBALES */
var p5Canvas;
var container;

/**
 * Fonction Setup
 * 
 * Mise en place de tous les éléments.
 * Cette fonction est appelé par p5.js lors du chargrement de la page
 */
function setup()
{
    container = document.getElementById('canvas');

    p5Canvas = createCanvas(960, 480);
    p5Canvas.background(0);
    p5Canvas.parent('canvas');
}

/**
 * Fonction draw
 * 
 * Appelé toutes les frames par p5.js, ici on dessine les éléments
 * dans le canvas
 */
function draw()
{

}