$(document).ready(()=>{
    $('#submitbtn').click(()=>{

        var tele=$("#inputContact").val();
        if(tele.length !=10)
        {
            alert("please enter 10 digits")
        }
    })
})