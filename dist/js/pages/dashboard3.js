const django_url = 'http://django-env.eba-cwpa3c9w.ap-southeast-1.elasticbeanstalk.com';
var json_output = "default";
var DATA_SET_LADKRABANG = [];
var DATA_SET_BANGKAPI = [];
var DATA_SET_LADPRAO = [];


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    // console.log("CHECK : " + xmlHttp.responseText);
    // xmlHttp.responseText;
    // console.log("CHECK : " + xmlHttp.responseText);
    return xmlHttp.responseText;
}

function calculate_avg_of_water_level(json, json_length, location, date, )
{
  var sum = average = length_mem = 0;

  for(var x=0; x<json_length; x++)
  {
    var json_only_date = json[x]['date_and_time'].toString().split(" ", 1);
    
    if(json[x]['location'] == location && json_only_date == date ) {
      // list.push(json[x]['water_level']);
      // console.log("WATER_LEVEL : " + json[x]['water_level']);
      length_mem += 1;
      sum += json[x]['water_level'];
    }
      
  }

  average = (sum)/(length_mem)
  return average.toFixed(3)
}

function create_the_water_list(avg_num_1, avg_num_2, data_set){
  for(var x=0; x<7; x++)
  {    
    if(x >= 0 && x < 5){
      data_set[x] == 0;
    } else {
      data_set[5] = avg_num_1;
      data_set[6] = avg_num_2;
    }

  }

  // console.log("DATA_SET : " + data_set);
  return data_set;
}

function add_date_label(){
  var list = [];
  var currentDate = new Date();
  var dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
  
  for(var i=6; i>=0; i--)
  {
    [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(currentDate);
    list.push(`${day}-${month}-${year }`);
    currentDate.setDate(currentDate.getDate()-1);
  }

  list.reverse();
  return list;
}

 $(function () {
  'use strict'

 
  json_output = JSON.parse(httpGet(django_url));
  // console.log(json_output[3]['date_and_time']);

  //-------------------------------------------  DATA-INITIAL ----------------------------------------
  var json_length = json_output.length;

  //--------------------------------------------  LADKRABANG -----------------------------------------
  // var avg_ladkrabang_29_05_2020 = calculate_avg_of_water_level(json_output, json_length, 'LADKRABANG', '29/05/2020');
  // var avg_ladkrabang_30_05_2020 = calculate_avg_of_water_level(json_output, 'LADKRABANG', '30/05/2020');
  // var WATER_LEVEL_DATA_LIST_LADKRABANG = create_the_water_list(avg_ladkrabang_29_05_2020,avg_ladkrabang_30_05_2020, DATA_SET_LADKRABANG);
  var WATER_LEVEL_DATA_LIST_LADKRABANG = 0;
  var WATER_LEVEL_DATA_LIST_BANGKAPI = 0;
  var WATER_LEVEL_DATA_LIST_LADPRAO = 0;

  //--------------------------------------------  BANGKAPI --------------------------------------------
  // var avg_bangkapi_29_05_2020 = calculate_avg_of_water_level(json_output, json_length, 'BANGKAPI', '29/05/2020');
  // console.log("AVG_BANG_29 : " + avg_bangkapi_29_05_2020);
  // var avg_bangkapi_30_05_2020 = calculate_avg_of_water_level(json_output, json_length, 'BANGKAPI', '30/05/2020');
  // var WATER_LEVEL_DATA_LIST_BANGKAPI = create_the_water_list(avg_bangkapi_29_05_2020, avg_bangkapi_30_05_2020, DATA_SET_BANGKAPI);
  
  //--------------------------------------------  LADPRAO --------------------------------------------
  // var avg_ladprao_29_05_2020 = calculate_avg_of_water_level(json_output, json_length, 'LADPRAO', '29/05/2020');
  // var avg_ladprao_30_05_2020 = calculate_avg_of_water_level(json_output, json_length, 'LADPRAO', '30/05/2020');
  // var WATER_LEVEL_DATA_LIST_LADPRAO = create_the_water_list(avg_ladprao_29_05_2020, avg_ladprao_30_05_2020, DATA_SET_LADPRAO);
  

  
  


  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var mode      = 'index'
  var intersect = true

  var $OnesensorBarChart = $('#Onesensor-Barchart')
  var OnesensorBarChart  = new Chart($OnesensorBarChart, {
    type   : 'bar',
    data   : {
      labels  : add_date_label(),
      datasets: [
        {
          backgroundColor: 'blue',
          borderColor    : 'blue',
          data           :  WATER_LEVEL_DATA_LIST_LADKRABANG
        },
        
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips           : {
        mode     : mode,
        intersect: intersect
      },
      hover              : {
        mode     : mode,
        intersect: intersect
      },
      legend             : {
        display: false
      },
      scales             : {
        yAxes: [{
          // display: false,
          gridLines: {
            display      : true,
            lineWidth    : '4px',
            color        : 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks    : $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              if (value >= 1000) {
               
              }
              return value + ' %'
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display  : true,
          gridLines: {
            display: false
          },
          ticks    : ticksStyle
        }]
      }
    }
  })

  var $AllsensorBarChart = $('#Allsensor-Barchart')
  console.log('ALL SENSOR MA YOUNG');
  var $AllsensorBarChart  = new Chart($AllsensorBarChart, {
    type   : 'bar',
    data   : {
      labels  : add_date_label(),
      datasets: [
        {
          backgroundColor: 'blue',
          borderColor    : 'blue',
          data           : WATER_LEVEL_DATA_LIST_LADKRABANG
        },
        {
          backgroundColor: 'red',
          borderColor    : 'red',
          data           : WATER_LEVEL_DATA_LIST_BANGKAPI
        },
        {
          backgroundColor: 'green',
          borderColor    : 'green',
          data           : WATER_LEVEL_DATA_LIST_LADPRAO
        },
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips           : {
        mode     : mode,
        intersect: intersect
      },
      hover              : {
        mode     : mode,
        intersect: intersect
      },
      legend             : {
        display: false
      },
      scales             : {
        yAxes: [{
          // display: false,
          gridLines: {
            display      : true,
            lineWidth    : '4px',
            color        : 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks    : $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              if (value >= 1000) {
               
              }
              return value + ' %'
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display  : true,
          gridLines: {
            display: false
          },
          ticks    : ticksStyle
        }]
      }
    }
  })

  var $OnesensorLinechart = $('#Onesensor-Linechart')
  var OnesensorLinechart  = new Chart($OnesensorLinechart, {
    data   : {
      labels  : ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        type                : 'line',
        data                : [1000, 2000, 3000, 2500, 2700, 2500, 3000],
        backgroundColor     : 'transparent',
        borderColor         : 'blue',
        pointBorderColor    : 'blue',
        pointBackgroundColor: 'blue',
        fill                : false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
        ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips           : {
        mode     : mode,
        intersect: intersect
      },
      hover              : {
        mode     : mode,
        intersect: intersect
      },
      legend             : {
        display: false
      },
      scales             : {
        yAxes: [{
          // display: false,
          gridLines: {
            display      : true,
            lineWidth    : '4px',
            color        : 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks    : $.extend({
            beginAtZero : true,
            suggestedMax: 200
          }, ticksStyle)
        }],
        xAxes: [{
          display  : true,
          gridLines: {
            display: false
          },
          ticks    : ticksStyle
        }]
      }
    }
  })

  var $AllsensorLinechart = $('#Allsensor-Linechart')
  var AllsensorLinechart  = new Chart($AllsensorLinechart, {
    data   : {
      labels  : ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        type                : 'line',
        data                : [500, 2000, 3500, 2500, 2700, 2500, 3000],
        backgroundColor     : 'transparent',
        borderColor         : 'blue',
        pointBorderColor    : 'blue',
        pointBackgroundColor: 'blue',
        fill                : false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
      {
        type                : 'line',
        data                : [700, 1700, 2700, 2000, 1800, 1500, 2000],
        backgroundColor     : 'tansparent',
        borderColor         : 'red',
        pointBorderColor    : 'red',
        pointBackgroundColor: 'red',
        fill                : false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      },
      {
        type                : 'line',
        data                : [2000, 3000, 1500, 500, 2500, 1000, 2500],
        backgroundColor     : 'tansparent',
        borderColor         : 'green',
        pointBorderColor    : 'green',
        pointBackgroundColor: 'green',
        fill                : false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      }
        ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips           : {
        mode     : mode,
        intersect: intersect
      },
      hover              : {
        mode     : mode,
        intersect: intersect
      },
      legend             : {
        display: false
      },
      scales             : {
        yAxes: [{
          // display: false,
          gridLines: {
            display      : true,
            lineWidth    : '4px',
            color        : 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks    : $.extend({
            beginAtZero : true,
            suggestedMax: 200
          }, ticksStyle)
        }],
        xAxes: [{
          display  : true,
          gridLines: {
            display: false
          },
          ticks    : ticksStyle
        }]
      }
    }
  })

  //THIS IS MOCKUP FOR BANGKAPI RED BAR GRAPH, NOT REALLY USING 
  var $OnesensorBarChartRed = $('#Onesensor-BarchartRed')
  var OnesensorBarChartRed  = new Chart($OnesensorBarChartRed, {
    type   : 'bar',
    data   : {
      labels  : add_date_label(),
      datasets: [
        {
          backgroundColor: 'red',
          borderColor    : 'red',
          data           : WATER_LEVEL_DATA_LIST_BANGKAPI
        },
        
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips           : {
        mode     : mode,
        intersect: intersect
      },
      hover              : {
        mode     : mode,
        intersect: intersect
      },
      legend             : {
        display: false
      },
      scales             : {
        yAxes: [{
          // display: false,
          gridLines: {
            display      : true,
            lineWidth    : '4px',
            color        : 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks    : $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              if (value >= 1000) {
               
              }
              return value + ' %'
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display  : true,
          gridLines: {
            display: false
          },
          ticks    : ticksStyle
        }]
      }
    }
  })
 
  //THIS IS MOCKUP FOR LADPRAO GREEN BAR GRAPH, NOT REALLY USING
  var $OnesensorBarChartGreen = $('#Onesensor-BarchartGreen');
  console.log('LADPRAO MA YOUNG');
  var OnesensorBarChartGreen  = new Chart($OnesensorBarChartGreen, {
    type   : 'bar',
    data   : {
      labels  : add_date_label(),
      datasets: [
        {
          backgroundColor: 'green',
          borderColor    : 'green',
          data           : WATER_LEVEL_DATA_LIST_LADPRAO
        },
        
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips           : {
        mode     : mode,
        intersect: intersect
      },
      hover              : {
        mode     : mode,
        intersect: intersect
      },
      legend             : {
        display: false
      },
      scales             : {
        yAxes: [{
          // display: false,
          gridLines: {
            display      : true,
            lineWidth    : '4px',
            color        : 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks    : $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              if (value >= 1000) {
               
              }
              return value + ' %'
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display  : true,
          gridLines: {
            display: false
          },
          ticks    : ticksStyle
        }]
      }
    }
  })

})
