var contextFitts = document.querySelector(".fitts_chart").getContext('2d');
var chartFitts;
var chartDatasFitts;
var chartOptionsFitts;

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
        data: json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(datas)
        {
            /** Création du DATASET pour Chart.js */
            chartDatasFitts = {

            };

            /** Création des OPTIONS pour Chart.js */
            chartOptionsFitts = {

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