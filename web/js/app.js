// Generated by CoffeeScript 1.8.0
var h, halfh, halfw, margin, totalh, totalw, w, ngroup, group;

h = 600;
w = 800;

margin = {
  left: 60,
  top: 40,
  right: 40,
  bottom: 40,
  inner: 5
};

halfh = h + margin.top + margin.bottom;
totalh = halfh * 2;
halfw = w + margin.left + margin.right;
totalw = halfw * 2;
ngroup = 12;


group = (function() {
  var _i, _len, _results;
  _results = [];
  for (_i = 0, _len = data.length; _i < _len; _i++) {
    grpNum = data[_i][6]; //6th value is group
    _results.push(grpNum);
  }
  return _results;
})();

var mychart;
mychart = scatterplot()
  .xlab("")
  .ylab("")
  .xlim([18,0])
  .ylim([0,15])
  .height(h)
  .width(w)
  .margin(margin)
  .rectcolor("rgba(0,0,0,0)")
  .pointstroke("black")
  .nxticks(0)
  .nyticks(0)
  .margin({left:60, top:0, right:40, bottom:40, inner:5});
  
d3.select("div#chart1").datum({
  data: data,
  group: group
}).call(mychart);

mychart.pointsSelect().on("mouseover", function(d) {
  return d3.select(this).attr("r", mychart.pointsize() * 3);
}).on("mouseout", function(d) {
  return d3.select(this).attr("r", mychart.pointsize());
}).on("click", function(d) {
  var row = data[d];

  $("#details-pane #name").html(row[3]);
  $("#details-pane #district").html(row[4]);
  $("#details-pane #party").html(row[5]);
  $("#details-pane #age").html(row[7]);
  $("#details-pane #www").attr("href", row[9]).html(row[9]);
  $("#details-pane #education").html(row[12]);
  
  $('#details-pane #q1').html(row[13]);
  $('#details-pane #q2').html(row[14]);
  $('#details-pane #q3').html(row[15]);
  $('#details-pane #q4').html(row[16]);
  $('#details-pane #q5').html(row[17]);
  $('#details-pane #q6').html(row[18]);
  $('#details-pane #q7').html(row[19]);
  $('#details-pane #q8').html(row[20]);
  $('#details-pane #q9').html(row[21]);
  $('#details-pane #q10').html(row[22]);
  $('#details-pane #q11').html(row[23]);
  $('#details-pane #q12').html(row[24]);
  $('#details-pane #q13').html(row[25]);
  $('#details-pane #q14').html(row[26]);
  $('#details-pane #q15').html(row[27]);
  $('#details-pane #q16').html(row[28]);
  $('#details-pane #q17').html(row[29]);
  $('#details-pane #q18').html(row[30]);
  $('#details-pane #q19').html(row[31]);
  $('#details-pane #q20').html(row[32]);
  $('#details-pane #q21').html(row[33]);
  $('#details-pane #q22').html(row[34]);
  $('#details-pane #q23').html(row[35]);
  $('#details-pane #q24').html(row[36]);
  $('#details-pane #q25').html(row[37]);
  $('#details-pane #q26').html(row[38]);
  $('#details-pane #q27').html(row[39]);
  $('#details-pane #q28').html(row[40]);
  $('#details-pane #q29').html(row[41]);
  $('#details-pane #q30').html(row[42]);
});



$(document).ready(function(){
	$("#candidate-filter").keyup(function(e) {
  $("#points circle").attr("r", 3);
    var qry=$(this).val();
    //Don't search if query string is less than 3 characters
    if(qry.length>2){
      for(var i=0;i<data.length;i++){
        //Check if name contains query string
        if(data[i][3].toLowerCase().indexOf(qry) >= 0){
          $("circle.pt"+i).attr("r", 9);
        }
      }
    }
  });
});

