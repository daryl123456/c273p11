$(document).ready(function () {

    if (JSON.parse(localStorage.getItem("array")) != null) {
        console.log(JSON.parse(localStorage.getItem("array")))
        var array = localStorage.getItem("array");
        var arrays = JSON.parse(array);
        var message = "";
        
        for (var i = 0; i < arrays.length; i++) {
            var movie = arrays[i];
            message += "<div class='card  text-white bg-dark'>"; 
            message += "<div class='card-header'>Title: " + movie.Title + "</div>";
            message += "<div class='card-body'><p class='card-text'>" + movie.Plot + "</p></div>";
            message+="</div>";

        }
        
        $("#contents").html(message);
    }
});