$(document).ready(function(){ 
    $('p').dblclick(function(){
        console.log("you doubled clicked on p",this);
    });
    $('p').mouseenter(function(){ 
        console.log("you entered ",this);
    });
    $('#btn1').click(function(){
        $('p').hide();
    })

});