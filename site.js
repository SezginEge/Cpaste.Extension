const uri = "http://cpaste.me/new";

document.getElementById("create").addEventListener("click", function () {
    var method = "POST";
    var data = {
        text: document.getElementById("data").value
    };

    var request = new XMLHttpRequest();

    request.onload = function () {
        var status = request.status;    
        var data = JSON.parse(request.responseText);

        if (status == 200) {
            document.getElementById("data").value = data.id;
            document.getElementById("code").textContent = data.id;
            var resultItems = document.getElementsByClassName("result-item");
            for (var i = 0; i < resultItems.length; i++) {
                resultItems[0].style.display = "";
            }

            document.getElementById("data-container").style.display = "none";
        }
    }

    request.open(method, uri);

    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.setRequestHeader("UA-Platform", navigator.userAgent + ":" + navigator.platform);
    request.setRequestHeader("Type","Extension");


    request.send(JSON.stringify(data));
});