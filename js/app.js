$(document).ready(function(){


$("#text1").hide();
  $("#icon1>img").click(function(){
    $("#icon1>img").slideDown().hide();
    $("#text1").show();
  });
  $("#text1").click(function(){
    $("#text1").hide();
    $("#icon1>img").slideDown().show();
  });


$("#text2").hide();
  $("#icon2>img").click(function(){
    $("#icon2>img").slideDown().hide();
    $("#text2").show();
  });
  $("#text2").click(function(){
    $("#text2").hide();
    $("#icon2>img").slideDown().show();
  });


$("#text3").hide();
  $("#icon3>img").click(function(){
    $("#icon3>img").slideDown().hide();
    $("#text3").show();
  });
  $("#text3").click(function(){
    $("#text3").hide();
    $("#icon3>img").slideDown().show();
  });



  
  
});


const contact= (e) =>{
  e.preventDefault();

  const frm = new FormData(document.querySelector("#contact")) ;

  const userName = frm.get("user");

  const userEmail = frm.get("email")

  const userMessage = frm.get("message")

  const userSubmit = frm.get("submit")

  addEventListener("submit");

  if(userName+userMessage+userEmail+userSubmit){
    alert(userName+" , We have received your message . Thank you for contacting us.")
  }else{
    alert("Please provide all the data required")
  };



}
