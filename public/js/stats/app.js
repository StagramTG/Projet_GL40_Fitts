var context = document.querySelector(".fitts_chart").getContext('2d');
var fittsChart;

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["0.1 s", "0.2 s", "0.3 s", "0.4 s", "0.5 s", "0.6 s", "0.7 s", "0.8 s", "0.9 s", "1.0 s"],
        datasets: [{
            label: 'Nombre de cibles',
            type: 'bar',
            data: [0, 10, 15, 13, 16, 11, 15],

            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderWidth: 1
        }]
    },

    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

/** Fonction pour attendre la fin du chargement de la page */
$(document).ready(function()
{
    /** Récupération des données par le biais d'AJAX */

    /** Création du DATASET pour Chart.js */

    /** Création des OPTIONS pour Chart.js */

    /** Création du graphe */
});