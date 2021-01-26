
$(document).ready(function () {

    $("#btnSearch").click(function (evt) {
        var title = $("#sTitle").val();
        var year = $("#sYear").val();
        var plot = $("#sPlot").val();
        $.ajax({
            url: "https://www.omdbapi.com/",
            type: "GET",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=19c0fc0b",
            dataType: "jsonp",
            success: function (response) {
                if (localStorage.getItem("array") == null) {
                    var array = [];
                    localStorage.setItem("array", JSON.stringify(array));
                } else {
                    var array = JSON.parse(localStorage.getItem("array"));
                }
                
                var message = "";
                message += "Title: " + response.Title + "<br/>";
                message += "Released: " + response.Released + "<br/>";
                message += "Runtime: " + response.Genre + "<br/>";
                message += "Actors: " + response.Actors + "<br/>";
                message += "Plot: " + response.Plot + "<br/>";
                $("#contents").html(message);
                message = "<img src='" + response.Poster + "'/>";
                $("#poster").html(message);
                array.push(response);
                localStorage.setItem("array", JSON.stringify(array));
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});