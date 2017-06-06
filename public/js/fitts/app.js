/**
 * Fichier: app.js
 * 
 * Code pour les tests de la loi de fitts
 */

/** VARIABLES GLOBALES */
var p5Canvas;
var container;

var target;

/** CLASSES */

/**
 * Classe Color
 * Représente les composantes RGB d'une couleur
 * @param {*Composante rouge} r 
 * @param {*Composante verte} g 
 * @param {*Composante bleue} b
 */
function Color(r, g, b)
{
    this.r = r;
    this.g = g;
    this.b = b;

    this.fill = function()
    {
        fill(this.r, this.g, this.b);
    }
}

/**
 * Classe Target
 * Représente une cible
 * @param {*Position en X} x 
 * @param {*Position en Y} y 
 * @param {*Couleur de la cible} color 
 */
function Target(x, y, color)
{
    this.x = x;
    this.y = y;
    this.color = color;

    /** Représente le diamètre de la cible */
    this.diameter = 50;

    /** Fonction d'update de la cible */
    this.update = function()
    {

    }

    /** Fonction d'affichage de la cible dans le canvas */
    this.draw = function()
    {
        this.color.fill();
        ellipse(x, y, this.diameter, this.diameter);
    }

    /** Fonction permettant de changer le diamètre de la cible */
    this.setDiameter = function(d)
    {
        this.diameter = d;
    }
}

/**
 * Classe ScoreBoard
 * Représente le tableau des scores, retient donc les temps entre
 * chaque touche de cible ainsi que l'avancement du test
 */
function ScoreBoard()
{

}

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
    });

    target = new Target(100, 100, new Color(255, 0, 0));
    target.setDiameter(100);
}

/**
 * Fonction draw
 * 
 * Appelé toutes les frames par p5.js, ici on dessine les éléments
 * dans le canvas
 */
function draw()
{
    target.draw();
}