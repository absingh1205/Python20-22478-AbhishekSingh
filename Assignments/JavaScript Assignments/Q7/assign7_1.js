
var browser;
var mins=0;
var hrs=0
var secs=0;

var timer=Date.now();
console.log(timer);


var submit_btn=document.getElementById('submitbtn');

submit_btn.addEventListener("click",()=>{

    var fname=document.getElementById('fnameId').value;
    var lname=document.getElementById('lnameId').value;

    if(fname==="")
    {
        document.getElementById('error').innerText="Please Enter Name"
    }
})



if(navigator.userAgent.indexOf("Chrome") != -1)
{
    browser="Chrome";
}
else if(navigator.userAgent.indexOf("Firefox") != -1)
{
    browser="Mozilla";
    
}
else if(navigator.userAgent.indexOf("MSIE") != -1)
{
    browser="Internet Explorer";
}

else if(navigator.userAgent.indexOf("Safari") != -1)
{
    browser="Safari";
}
else
{
    browser="unknown";
}

setInterval(function(){
    secs=secs+1;

    if(secs%60==0)
    {
        mins=mins+1;

        if(mins%60==0)
        {
            hrs=hrs+1;
        }
    }

    if(mins<10)
    {
        document.getElementById('headingId').innerHTML="<h2>Welcome! You are using " + browser +" you are using this browser for 0" + hrs + ":0" +mins +" minutes";
    }
    else
    {
        document.getElementById('headingId').innerHTML="<h2>Welcome! You are using " + browser +" you are using this browser for 0" + hrs + ":" +mins +" minutes";
    }

    
},1000)



