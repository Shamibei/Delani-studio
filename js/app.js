$(document).ready(function(){


$("#text1").hide();
  $("#icon1>img").click(function(){
    $("#icon1>img").toggle().hide();
    $("#text1").show();
  });
  $("#text1").click(function(){
    $("#text1").hide();
    $("#icon1>img").slideDown().show();
  });


$("#text2").hide();
  $("#icon2>img").click(function(){
    $("#icon2>img").toggle().hide();
    $("#text2").show();
  });
  $("#text2").click(function(){
    $("#text2").hide();
    $("#icon2>img").slideDown().show();
  });


$("#text3").hide();
  $("#icon3>img").click(function(){
    $("#icon3>img").toggle().hide();
    $("#text3").show();
  });
  $("#text3").click(function(){
    $("#text3").hide();
    $("#icon3>img").slideDown().show();
  });


$("#mouseclick").slideUp(800).slideDown(1200);

$("#mouseclick").click(function(){
  $("#about").show();
});




$('#form').submit(function(event){
  event.preventDefault();
var user = $("user");
  var email = $("#email");
  var message = $("#message");
  var submit = $("submit");

  if ($("#submit").val()){
      alert ("Hello there!"+ " we have received your message. Thank you for reaching out to us.");                
  }else{
      alert ("Please submit your message appropriately.");
  }

})

});