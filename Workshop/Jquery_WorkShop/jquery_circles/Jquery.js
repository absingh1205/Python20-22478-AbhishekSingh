$('document').ready(()=>{

    // var mainDiv=$("#mainDiv").get(0);
    var red1=$("#svg1").get(0);
    var red2=$("#svg3").get(0);
    var orange1=$("#svg2").get(0);
    var orange2=$("#svg6").get(0);
    var yellow1=$("#svg4").get(0);
    var yellow2=$("#svg5").get(0);
    // console.log(red1);


    console.log(mainDiv)

    function showRed()
    {  
        $("#mainDiv").append(red1);
        $("#mainDiv").append(red2);
        $("#svg2").remove();
        $("#svg4").remove();
        $("#svg5").remove();
        $("#svg6").remove();
    }

    function showOrange()
    {
        $("#mainDiv").append(orange1);
        $("#mainDiv").append(orange2);
        $("#svg1").remove();
        $("#svg3").remove();
        $("#svg4").remove();
        $("#svg5").remove();
    }
    
    function showYellow()
    {
        $("#mainDiv").append(yellow1);
        $("#mainDiv").append(yellow2);
        $("#svg1").remove();
        $("#svg2").remove();
        $("#svg3").remove();
        $("#svg6").remove();
    }

    $('#Redbtn').click(()=>{
        showRed();
        $("#Redbtn").css("background","Green")
    })

    $('#Orangebtn').click(()=>{
        showOrange();
        $("#Orangebtn").css("background","Green")
    })

    
    $('#Yellowbtn').click(()=>{
        showYellow();
        $("#Yellowbtn").css("background","Green")
    })

    $("#Allbtn").click(()=>{
        
        showRed();
        showOrange();
        showYellow();
        $("#Allbtn").css("background","Green")
        $("#mainDiv").append(red1);
        $("#mainDiv").append(red2);
        $("#mainDiv").append(yellow1);
        $("#mainDiv").append(yellow2);
        $("#mainDiv").append(orange1);
        $("#mainDiv").append(orange2);
        
    })
})