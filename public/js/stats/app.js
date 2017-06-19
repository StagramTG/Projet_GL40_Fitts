var contextFitts = document.querySelector(".fitts_chart").getContext('2d');
var chartFitts;
var chartDatasFitts;
var chartOptionsFitts;

function buildRelationalDataArray(results, datas)
{
    let relationalDatas = new Map();
    for(var i = 0; i < 20; i + 0.1)
    {
        
    }

    for(var i = 0; i < datas.length; i++)
    {
        let resultID = datas[i].results_id;
        let result;
        for(var i = 0; i < results.length; i++)
        {
            if(results[i].id === resultID)
            {
                result = results[i];
                break;
            }
        }


    }
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
            /** Création du DATASET pour Chart.js */
            chartDatasFitts = {
                labels: new Array(),
                datasets : [
                    /** Données pratiques */
                    {
                        labels: "Temps pratiques",
                        data: new Array(),
                        backgroundColor: new Array(),
                        borderColor: new Array()
                    },

                    /** Données théoriques */
                    {
                        labels: "Temps théoriques",
                        data: new Array(),
                        backgroundColor: new Array(),
                        borderColor: new Array()
                    }
                ]
            };

            /** Créer un nouveau tableau qui lie temps et rapport Distance/Largeur */
            let relationalDatasFitts = buildRelationalDataArray(datas[0], datas[1]);

            for(var i = 0; i < datas[0].length; i++)
            {
                // remplir les tableaux de temps
                chartDatasFitts.datasets[0].data.push(datas[0][i].pratical_result);
                chartDatasFitts.datasets[0].backgroundColor.push('rgba(0, 0, 255, 0.4)');
                chartDatasFitts.datasets[0].borderColor.push('rgba(0, 0, 255, 1)');

                chartDatasFitts.datasets[1].data.push(datas[0][i].theorical_result);
                chartDatasFitts.datasets[1].backgroundColor.push('rgba(255, 0, 0, 0.4)');
                chartDatasFitts.datasets[1].borderColor.push('rgba(255, 0, 0, 1)');

                chartDatasFitts.labels.push(i);
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
            chartFitts = new Chart(contextFitts, chartParamsFitts);
        },
        error: function (e) 
        {
            alert('Echec de la récupération des données du test de Fitts');
            document.querySelector('.ajax-result').innerHTML = e.responseText;
        }
    });
});