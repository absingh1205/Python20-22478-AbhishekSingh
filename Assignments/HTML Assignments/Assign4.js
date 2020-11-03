var i=0;
function timer(){
    i = i+1;
    postMessage(i);
    setTimeout("timer()",500);
}

timer();
