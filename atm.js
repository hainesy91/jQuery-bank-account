$(document).ready(function(){


var total = 0
var total2 = 0
var remainder = $('#balance1') + $('#deposit1').val()


$('#deposit1').click(function(){
  var number1 = $('#amount1').val();
  total = total + parseInt(number1)
  $('#balance1').html(total)
})

$('#withdraw1').click(function(){
  var number1 = $('#amount1').val();

  // if(number1 => total){
  total = total - parseInt(number1)
  $('#balance1').html(total)
})

// else if (withdraw1 < (total + total2)){

// }

$('#deposit2').click(function(){
  var number2 = $('#amount2').val();
  total2 = total2 + parseInt(number2)
  $('#balance2').html(total2)
})

$('#withdraw2').click(function(){
  var number2 = $('#amount2').val();
  total2 = total2 - parseInt(number2)
  $('#balance2').html(total2)
})


})