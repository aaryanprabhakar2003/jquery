$(document).ready(function(){ 
    // doubleclick event
    $('p').dblclick(function(){
       // console.log("you doubled clicked on p",this);
       //alert("you doubled clicked on p",this);
    });
    // mouse enter event
    $('p').mouseenter(function(){   
       // console.log("you entered ",this);
       //alert("you entered",this);
        // mouse leave event
    });
    $('p').mouseleave(function(){
        //console.log("you left ",this);
        //alert("you left ",this);
    });
    // mouse hover event
    $('p').hover(function(){
        //alert("mouse hover",this);
    });
});