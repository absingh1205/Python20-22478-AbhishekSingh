$('document').ready(()=>{

    var counter=1;
    $.ajax({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/photos",
        success:(value)=>{
            
            for(var i=0;i<value.length;i++)
            {
                counter=counter+1;

                if(counter % 5 == 0)
                {
                    var text="<tr>";
                }
            }
        }
    })
})