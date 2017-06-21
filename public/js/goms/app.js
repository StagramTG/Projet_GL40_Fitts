//Objet qui contient les valeurs et données du test
var gomsValue;

//Valeur du niveau auquel on se trouve
var activeLevel;

//Nombre de fichiers de chaque niveau
var nbFile = [];
//Position du fichier a cliquer de chaque niveau
var position = [];

//Canvas
var p5Canvas;

/**
*   Classe gomsValue
*   Objet du test qui contient les données du test
*/
function gomsValue(x)
{
    this.nbLevel = x;
    this.isTestEnded = false;
    this.isTestStarted = false;

    this.time;

    this.normalPlayerTime;
    this.proPlayerTime;

    this.draw = function()
    {
        fill(255, 255, 255);
        textSize(32);
        text("Vous avez mis "+
         "\nUne personne normale aurait mis "+
         "\nUne personne habituée aurait mis "
         , 50, 50);
    }
}

/**
*   Classe normalFile
*   Objet representant un fichier et n'ayant pas d'action possible avec,
*   Juste une représentation graphique de lui est faite sur le canvas
*/
function normalFile(x, y)
{
    this.x = x;
    this.y = y;

    this.draw = function()
    {
        fill(0,0,0);
        rect(this.x,this.y,50,50);
    }
}

/**
*   Classe specialFile
*   Objet representant un fichier sur lequel l'utilisateur doit cliquer,
*   Juste une représentation graphique de lui est faite sur le canvas
*/
function specialFile(x, y)
{
    this.x = x;
    this.y = y;

    this.onClick = function()
    {
        
    }

    this.draw = function()
    {
        fill(255,0,0);
        rect(this.x,this.y,50,50);
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

    var nb = Math.floor(Math.random()*10 + 1);

    for(var i = 0; i < nb; i++)
    {
        nbFile[nb-i-1] = Math.floor(Math.random() * 50 + 1);
        position[nb-i-1] = Math.floor(Math.random() * nbFile[i] + 1);
    }

    gomsValue = new gomsValue(nb);
    activeLevel = nb;
}

/**
 * Fonction draw
 * 
 * Appelé toutes les frames par p5.js, ici on dessine les éléments
 * dans le canvas
 */
function draw()
{
    if(activeLevel > 0)
    {
        newLevel();
    }
}

/**
*   Function newLevel
*   Fonction qui a pour but d'afficher le niveau suivant.
*/
function newLevel()
{
    p5Canvas.clean();
    tableauFile = Array();
    tableauFile[0] = new specialFile(5,5);
    for( var i = 1; i < nbFile[activeLevel]; i++)
    {
        tableauFile[i] = new normalFile(((55+(60*(i % 16))) % p5Canvas.offsetWidth),(5 + 60*((i -(i % 16)) / 16)))
    }
    for( var j = 0; j < nbFile[activeLevel]; j++)
    {
        tableauFile[j].draw();
    }
}