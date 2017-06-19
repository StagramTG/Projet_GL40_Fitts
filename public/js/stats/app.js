var contextFittsNb = document.querySelector(".fitts_chart_nb").getContext('2d');
var contextFitsSize = document.querySelector(".fitts_chart_size").getContext('2d');

var chartFitts;
var chartDatasFitts;
var chartOptionsFitts;

var chartFittsSize;
var chartDatasFittsSize;
var chartOptionsFittsSize;

function buildRelationalDataArray(results, datas)
{
    let relationalDatas = new Array();
    let theorical = new Map();
    let practical = new Map();

    for(let t = 0; t <= 2.1; )
    {
        theorical.set(t.toFixed(1), 0);
        practical.set(t.toFixed(1), 0);
        t = t + 0.1;
    }

    for(let i = 0; i < results.length; i++)
    {
        let roundTimeTheorical = (Math.round(results[i].theorical_result * 10) / 10).toFixed(1);
        let roundTimePractical = (Math.round(results[i].pratical_result * 10) / 10).toFixed(1);

        theorical.set(roundTimeTheorical, theorical.get(roundTimeTheorical) + 1);
        practical.set(roundTimePractical, practical.get(roundTimePractical) + 1);
    }

    relationalDatas.push(theorical);
    relationalDatas.push(practical);

    return [Array.from(relationalDatas[0]), Array.from(relationalDatas[1])];
}

function buildFittsNbChart(datas)
{
    /** Création du DATASET pour Chart.js */
    chartDatasFitts = {
        labels: new Array(),
        datasets : [
            /** Données pratiques */
            {
                label: "Temps pratiques",
                data: new Array(),
                backgroundColor: new Array(),
                borderColor: new Array()
            },

            /** Données théoriques */
            {
                label: "Temps théoriques",
                data: new Array(),
                backgroundColor: new Array(),
                borderColor: new Array()
            }
        ]
    };

    /** Créer un nouveau tableau qui lie temps et rapport Distance/Largeur */
    var relationalDatasFitts = buildRelationalDataArray(datas[0], datas[1]);

    for(var i = 0; i < relationalDatasFitts[0].length; i++)
    {
        // remplir les tableaux de temps
        chartDatasFitts.datasets[0].data.push(relationalDatasFitts[1][i][1]);
        chartDatasFitts.datasets[0].backgroundColor.push('rgba(0, 0, 255, 0.4)');
        chartDatasFitts.datasets[0].borderColor.push('rgba(0, 0, 255, 1)');

        chartDatasFitts.datasets[1].data.push(relationalDatasFitts[0][i][1]);
        chartDatasFitts.datasets[1].backgroundColor.push('rgba(255, 0, 0, 0.4)');
        chartDatasFitts.datasets[1].borderColor.push('rgba(255, 0, 0, 1)');

        chartDatasFitts.labels.push(relationalDatasFitts[1][i][0]);
    }

    /** Création des OPTIONS pour Chart.js */
    chartOptionsFitts = {
        scales: {
            xAxes: [{
                time: {
                    unit: 'second',
                    unitStepSize: 0.01,
                    round: true
                }
            }]
        }
    };

    /** Création de l'objet pour le graphe */
    let chartParamsFitts = {
        type: 'bar',
        data: chartDatasFitts,
        options: chartOptionsFitts
    };

    /** Création du graphe */
    chartFitts = new Chart(contextFittsNb, chartParamsFitts);
}

function buildRelationalDataArraySize(results, datas)
{
    
}

function buildFittsSizeChart(datas)
{
    
}

/** Fonction pour attendre la fin du chargement de la page */
$(document).ready(function()
{
    /** Récupération des données par le biais d'AJAX */

    /** 
     * Surtout ne pas oublier de renseigner le jeton 
     * sinon ça ne fonctionne pas...
     */
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': crsf_tocken
        }
    });

    $.ajax({
        method: 'GET',
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(datas)
        {
            buildFittsNbChart(datas);
            buildFittsSizeChart(datas);
        },
        error: function (e) 
        {
            alert('Echec de la récupération des données du test de Fitts');
            document.querySelector('.ajax-result').innerHTML = e.responseText;
        }
    });
});