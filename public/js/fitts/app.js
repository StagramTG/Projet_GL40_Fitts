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
var activeTargetIndex;
var targets = [];

/** variables pour mesurer le temps entre deux cliques de cibles */
var timeStart;
var timeEnd;

/** L'objet pour les données collectés */
var testDatas;

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
    this.onClick = function(func)
    {
        if(dist(x, y, mouseX, mouseY) <= this.diameter / 2)
        {
            if(mouseIsPressed)
                func();
        }
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
    this.targetToHit = hits;
    this.isTestEnded = false;
    this.isTestStarted = false;

    this.hitTarget = function()
    {
        if(this.targetToHit >= 0)
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

    this.update = function()
    {
        /** On vérifie si le nombre de cible n'est pas < ou = à 0 */
        if(this.targetToHit <= 1)
        {
            this.isTestEnded = true;
            this.isTestStarted = false;
        }
    }

    this.draw = function()
    {
        fill(255, 255, 255);
        textSize(32);
        text("Fin de la partie", 50, 50);
    }

    this.testStarted = function()
    {
        return this.isTestStarted;
    }
    
    this.testEnded = function()
    {
        return this.isTestEnded;
    }
}

/**
 * Classe TestDatas
 * Structure qui contient les différentes données relatives à un test de
 * la loi de fitts
 */
function TestDatas()
{
    /** 
     * Tableau de flottant qui représente les écarts de temps entre chaque
     * cibles cliquées
     * ex : 0.526
     */
    this.elapsedTimes = new Array();
    /**
     * Tableau de doublet qui représente les coordonnées de la souris lors du départ
     * du test et des différents cliques sur cibles
     * ex : [100, 155]
     */
    this.mouseStarts = new Array();

    this.addElapsedTime = function(time)
    {
        this.elapsedTimes.push(time);
    }

    this.addMouseStart = function(start)
    {
        this.mouseStarts.push(start);
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
    launchTarget = new Target(width / 2, height / 2, new Color(0, 128, 255));
    launchTarget.setDiameter(MAX_DIAMETER);

    /** Création des 10 cibles qui composent le test */
    for(var i = 0; i < 10; i++)
    {
        let x = Math.floor(Math.random() * (width - MAX_DIAMETER * 1.5)) + MAX_DIAMETER;
        let y = Math.floor(Math.random() * (height - MAX_DIAMETER * 1.5)) + MAX_DIAMETER;

        targets[i] = new Target(x, y, new Color(255, 128, 0));
    }
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
    if(!scoreBoard.testStarted())
    {
        launchTarget.onClick(function() 
        {
            scoreBoard.isTestStarted = true;
            activeTargetIndex = 9;

            testDatas = new TestDatas();
            testDatas.addElapsedTime(0);
            testDatas.addMouseStart([mouseX, mouseY]);

            timeStart = new Date().getTime();
        });
    }

    scoreBoard.update();

    if(scoreBoard.testStarted())
    {
        targets[activeTargetIndex].onClick(function()
        {
            /** Mesure du temps écoulé */
            timeEnd = new Date().getTime();
            let etime = timeEnd - timeStart;

            /** Ajout des données */
            testDatas.addElapsedTime(etime / 1000);
            testDatas.addMouseStart([mouseX, mouseY]);

            scoreBoard.hitTarget();
            activeTargetIndex--;

            timeStart = new Date().getTime();
        });
    }

    /** On clear l'écran */
    clear();
    background(0);

    /** Ici on fait les rendus */
    if(scoreBoard.testStarted() && activeTargetIndex > 0)
    {
        targets[activeTargetIndex].draw();
    }

    if(!scoreBoard.testStarted() && !scoreBoard.testEnded())
    {
        launchTarget.draw();
    }

    /** On vérifie si le test est terminé */
    if(scoreBoard.testEnded())
    {
        scoreBoard.draw();
    }
}