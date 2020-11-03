$('document').ready(()=>{
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/users",
        success:(value)=>{
            // console.log(value)

            for(var i=0;i<value.length;i++)
            {
                var text1="<tr><td>" +value[i].id+"</td><td>" + value[i].name + "</td><td>" + value[i].username + "</td><td>" + value[i].email + "</td></tr>";
                $("#myTab").append(text1);

                // console.log(value[i].address.street);
                // console.log(value[i].address.zipcode);

                var text2="<tr><td>" + value[i].address.street + "</td><td>" + value[i].address.suite + "</td><td>" + value[i].address.city + "</td><td>" + value[i].address.city + "</td><td>" + value[i].address.zipcode + "</td></tr>";
                $("#innerTab").append(text2);
                
            }

        },
        error:(value)=>{
            console.log("Some Error")
        }
        
    })
})