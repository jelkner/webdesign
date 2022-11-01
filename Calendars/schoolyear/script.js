$(function(){
  console.clear();
  $(".year").each(function(){
    fillCalendar($(this).attr('data-year'));
  });
  console.log(".year[data-year='2016']");
  console.log($(".year[data-year='2016'] .2"));
});

function fillCalendar(year){
  var i;
  for(i=0; i<12; i++){
    renderMonth(i+1, year);
  }
}

function renderMonth(month, year){
//  console.log(year, month);
  var first_day = new Date(year+"-"+month),
      last_day = new Date();
  last_day.setYear(year);
  last_day.setMonth(month);
  last_day.setDate(0);

  var i, l = last_day.getDate()+1, d;
  for(i=1;i<l;i++){
    d = new Date(year+"-"+month+"-"+i);
    $(".year[data-year='"+year+"'] ."+month).append("<li data-day=\""+d.getDay()+"\"  data-date=\""+i+"\" ></li>");
  }
}