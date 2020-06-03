export function add_date_label(){
  var list = [];
  var currentDate = new Date();

  var day = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();

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


export function calculate_avg_of_water_level(json, json_length, location, date)
{
    var sum = 0;
    var average = 0;
    var length_mem = 0;

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
    return parseFloat(average.toFixed(3))
}

export function create_the_water_list(avg_num_1, data_set)
{
  data_set = [];
  for(var x=0; x<7; x++)
  {    
    if(x >= 0 && x < 6){
      data_set[x] = 0;
    } else {
      data_set[6] = avg_num_1;
    }

  }

  // console.log("DATA_SET : " + data_set);
  return data_set;
}
