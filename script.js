

function changeText() {
    document.getElementById("title").innerHTML = "Text Changed!";
}

function changeColor() {
    document.body.style.backgroundColor = "lightyellow";
}


$(document).ready(function(){

  
    $("#hideBtn").click(function(){
        $("#msg").hide();
    });

   
    $("#showBtn").click(function(){
        $("#msg").show();
    });

 
    $("#toggleBtn").click(function(){
        $("#msg").toggle();
    });

   
    $("#fadeBtn").click(function(){
        $("#msg").fadeToggle(1000); 
    });

   
    $("#slideBtn").click(function(){
        $("#msg").slideToggle(1000);
    });

    
    $("#animateBtn").click(function(){
        $("#msg").animate({
            fontSize: "24px",
            opacity: 0.5,
            marginLeft: "50px"
        }, 1000);
    });

});