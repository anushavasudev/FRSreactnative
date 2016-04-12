var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
Highcharts.chart('container', { /*Highcharts options*/ });
<div id="container" style="width:100%; height:400px;"></div>
$(function () { 
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});