$(document).ready(function(){

// var input = $('#amount1').val()
//   console.log(input)


// $('#amount1').keyup(function(){
  // var input = ($(this).val());

//   console.log(input);
// });

// $('input').change(function(){

// })

var total = 0


$('#deposit1').click(function(){
  var number1 = $('#amount1').val();
  total = total + parseInt(number1)
  $('#balance1').html(total)
})

$('#withdraw1').click(function(){
  var number1 = $('#amount1').val();
  total1 = total - parseInt(number1)
  $('#balance1').html(total1)
})

var total2 = 0

$('#deposit2').click(function(){
  var number2 = $('#amount2').val();
  total2 = total2 + parseInt(number2)
  $('#balance2').html(total2)
})

$('withdraw2').click(function(){
  var number2 = $('#amount2').val();
  total2 = total2 - parseInt(number2)
  $('#balance2').html(total2)
})



  // total +('#amount1').html





// currentbalance = function(){
//   var deposit = $('#balance') + $('#deposit')
//   console.log(currentbalance);


// }




})