/**
 * Fichier: app.js
 * 
 * Code pour les tests de la loi de fitts
 */

/** VARIABLES GLOBALES */
var p5Canvas;
var container;
var scoreBoard;

var launchTarget;
var targets = [];

var isTestStarted;

/** CONSTANTES */
const MAX_DIAMETER = 100;

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
        ellipse(this.x, this.y, this.diameter, this.diameter);
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
 * @param {*Le nombre de cible à toucher pour terminer le test} hits 
 */
function ScoreBoard(hits)
{
    this.elapsedTimes = [];
    this.targetToHit = 0;

    this.hitTarget = function()
    {
        if(this.targetToHit > 0)
        {
            /** Encore des cibles à toucher */
            this.targetToHit--;
            return true;
        }
        else
        {
            /** Plus de cibles à toucher */
            return false;
        }
    }
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

    /** On lance une partie avec 10 cibles à toucher */
    scoreBoard = new ScoreBoard(10);

    /** Création de la cible à cliquer de départ */
    launchTarget = new Target(100, 100, new Color(0, 128, 255));
    launchTarget.setDiameter(MAX_DIAMETER);

    /** Création des 10 cibles qui composent le test */
    for(var i = 0; i < 10; i++)
    {
        let x = Math.floor(Math.random() * (width - MAX_DIAMETER * 2)) + MAX_DIAMETER;
        let y = Math.floor(Math.random() * (height - MAX_DIAMETER * 2)) + MAX_DIAMETER;

        console.log(x);

        targets[i] = new Target(x, y, new Color(255, 128, 0));
    }

    /** On commence avec le test non lancé ! */
    isTestStarted = false;
}

/**
 * Fonction draw
 * 
 * Appelé toutes les frames par p5.js, ici on dessine les éléments
 * dans le canvas
 */
function draw()
{
    /** Ici on fait les Updates */
    launchTarget.update();

    /** On clear l'écran */
    clear();
    background(0);

    /** Ici on fait les rendus */
    for(var i = 0; i < 10; i++)
    {
        targets[i].draw();
    }
    launchTarget.draw();
}