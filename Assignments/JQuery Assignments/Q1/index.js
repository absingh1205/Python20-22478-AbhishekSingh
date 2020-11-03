$('document').ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: (data) => {
            var x = " ";

            $.each(data, function (key, value) {
                x = x + "<div id='newDiv'>";
                x = x + "<div>";
                x = x + '<p>' + '<img src="' + value.thumbnailUrl + '" width="75px" height="75px">' +
                    '</p>';

                x = x + '<p>Description:' + value.title + '</p>';
                x = x + '<p>Price:' + value.id + '</p>';
                x = x + '</div>';
                x = x + '</div>';
            });

            $("#myDiv").append(x);
        }
    })
})
