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
