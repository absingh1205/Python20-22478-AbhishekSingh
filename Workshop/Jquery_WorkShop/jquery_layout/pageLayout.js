$(document).ready(()=>{

    
    $('body').css('background-color','grey');
    $('header').height('100px');
    $('header').width('100%');
    $('header').html('<h1>Welcome to Cybage</h1>');
    $('header').css('background-color','cyan').css('text-align','center');


    $('nav').height('400px');
    $('nav').width('200px');
    $('nav').html("<ul>This is nav<li>Link1</li><li>Link2</li><li>Link3</li></ul>")
    $('nav').css('background-color','pink').css('text-align','center');
    

    $("#innerDiv").height("400px");
    $("#innerDiv").width("500px");
    $("#innerDiv").html("<h2>About Cybage</h2>");
    $("#innerDiv").css('position','relative');
    $('#innerDiv').css('background-color','red').css('text-align','center');

    
    $("aside").height("400px");
    $("aside").width("300px");
    $("aside").html("<h3>This is Aside</h3>");
    $("aside").css('position','relative');
    $('aside').css('background-color','lightgrey').css('text-align','center');


    $("footer").height("50px");
    $("footer").width("100%");
    $("footer").html("<h4>CopyRights Reserved</h4>");
    $('footer').css('background-color','cyan').css('text-align','center');
    
    // $('#btn').click(()=>{
    

    // });

    



})