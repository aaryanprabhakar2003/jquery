console.log($)
$(document).ready(function() {
    $('p').click(function(){ //element selector
        console.log("you clicked on p",this)
    });
    //$('#second').click(); //id selector
    //$('.Test').click();   //class selector
    $('*').click();// select all elements
    $('p.Test').click();// specific character
    $('p:first').click(); // select first paragraph
});