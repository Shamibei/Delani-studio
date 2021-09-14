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



  
  
});





const contact= (e) =>{
  e.preventDefault();

  const frm = new FormData(document.querySelector("#form")) ;

  const userName = frm.get("user");

  const submit = frm.get("submit");

  var button = document.querySelector('button');

  button.onclick = function changeColor() {
  if(button.style.background=='blue'){
      button.style.background='green'
  }else{
      button.style.background='blue'
  }
  }
  



}
