// Classes

/**
 * Représente les composantes RGB d'une couleur
 * @param {*taux de rouge} r 
 * @param {*taux de vert} g 
 * @param {*taux de bleu} b 
 * @param {*alpha} a 
 */
function Color(r, g, b, a)
{
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
}

/**
 * Classe de bouton dynamiques et animés    
 * @param {*position en X} x 
 * @param {*position en Y} y 
 * @param {*texte du bouton} text
 * @param {*couleur du texte} fg_color
 * @param {*couleur de fond} bg_color
 */
function button(x, y, text, fg_color, bg_color)
{
    this.x = x;
    this.y = y;
    this.text = text;
    this.fg_color = fg_color;
    this.bg_color = bg_color;

    /**
     * Détection des colisions
     */
    this.update = function()
    {

    }
}

// Variables globales
var canvas;

// Mise en place du canvas et autres
function setup()
{
    canvas = createCanvas(400, 100);
    canvas.parent('test_choice');
    canvas.background(236);
}

// Chaque frame
function draw()
{
    
}