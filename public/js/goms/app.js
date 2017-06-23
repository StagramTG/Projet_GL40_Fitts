//Objet qui contient les valeurs et données du test
var gomsValue;

//Valeur du niveau auquel on se trouve
var activeLevel;

//Nombre de fichiers de chaque niveau
var nbFile = [];
//Position du fichier a cliquer de chaque niveau
var position = [];

var tableauFile = [];

var special;

var timeStart;
var timeEnd;

//Canvas
var p5Canvas;

const KEYSTROKE_M = 1.35;
const KEYSTROKE_K = 0.2;
const KEYSTROKE_P_NORMAL = 1.5;
const KEYSTROKE_P_PRO = 0.8;

/**
*   Classe gomsValue
*   Objet du test qui contient les données du test
*/
function gomsValue(x)
{
    this.nbLevel = x;
    this.isTestStarted = false;
    this.isTestEnded = false;

    this.normalPlayerTime = (KEYSTROKE_P_NORMAL+KEYSTROKE_K)*(x-1) +KEYSTROKE_M;
    this.proPlayerTime = (KEYSTROKE_P_PRO+KEYSTROKE_K)*(x-1) +KEYSTROKE_M;

    this.draw = function()
    {
        fill(255, 255, 255);
        textSize(32);
        let time = timeEnd - timeStart;
        let normalTime = this.normalPlayerTime;
        let proTime = this.proPlayerTime;
        text("Vous avez mis "+ time/1000 +" sec.\nUne personne normale aurait mis "+normalTime+" sec.\nUne personne habituée aurait mis "+proTime+" sec.", 50, 50);
    }

    this.start = function()
    {
        this.isTestStarted = true;
    }

    this.end = function()
    {
        this.isTestEnded = true;
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
        fill(255,255,255);
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

    this.onClick = function(func)
    {
        if((mouseX >= x) && (mouseX <= x+50) && (mouseY >= y) && (mouseY <= y+50))
        {
            if(mouseIsPressed)
                func();
        }
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
        nbFile[nb-i] = Math.floor(Math.random() * 50 + 1);
        position[nb-i] = Math.floor(Math.random() * nbFile[nb-i] + 1);
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
    clear();
    background(0);
    if(activeLevel > 0)
    {
        for( var i = 0; i < nbFile[activeLevel]; i++)
        {
            if(i+1 == position[activeLevel])
            {
                special = i;
                tableauFile[i] = new specialFile(((5+(60*(i % 16))) % width),(5 + 60*((i -(i % 16)) / 16)));
            }
            else
            {
                tableauFile[i] = new normalFile(((5+(60*(i % 16))) % width),(5 + 60*((i -(i % 16)) / 16)));
            }
            tableauFile[i].draw();
        }
    }
    else
    {
        if(gomsValue.isTestEnded == false)
        {
            timeEnd = new Date().getTime();
            gomsValue.end();
        }
        gomsValue.draw();
    }

    tableauFile[special].onClick(function()
    {
        activeLevel--;
        if(gomsValue.isTestStarted == false)
        {
            gomsValue.start();
            timeStart = new Date().getTime();
        }
    });
}

