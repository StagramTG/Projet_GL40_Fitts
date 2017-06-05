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
    let cw = container.offsetWidth;

    p5Canvas = createCanvas(cw, cw / (16/9));
    p5Canvas.background(0);
    p5Canvas.parent('canvas');

    window.addEventListener('resize', function()
    {
        let cw = container.offsetWidth;
        p5Canvas.setSize(cw, cw / (16/9));
    });
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