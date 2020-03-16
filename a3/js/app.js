let buildGallery = function() {
    let q = $("#Descimages").val();
    var API_KEY = 'er829146479';
    var URL = "https://www.behindthename.com/api/lookup.json?name=" + q + "&key=er829146479";

    $.ajax({
        method: "GET",
        url: URL,
        dataType: "json",
        data: { "name": $("#name").val() },
        success: function(result, status) {
            if(result.error){
                let src = "img/error.png";
                $("#images").html(result.error);
                $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\"" + src + "\"></div>");
            }
            
            if(result[0].gender == "f"){
                //set text to pink or add image for female
                $("#images").html("Language: " + result[0].usages[0].usage_full + " ||  Gender: Female");
                let src = "img/fem.jpg"
                $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\"" + src + "\"></div>");
            } else if(result[0].gender == "m"){
                //set text to blue or add image for male
                $("#images").html("Language: " + result[0].usages[0].usage_full + " || Gender: Female");
                let src = "img/male.png";
                $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\"" + src + "\"></div>");
            } else {
                //set text to blue or add image for male
                $("#images").html("Language: " + result[0].usages[0].usage_full + " || Gender: Both, Female and Male");
                let src = "img/fm.png"
                $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\"" + src + "\"></div>");
            }
        }
    }); //ajax
}

// [{"name":"Mary","gender":"f",
// "usages":[{"usage_code":"eng","usage_full":"English","usage_gender":"f"},
//           {"usage_code":"eng-bibl","usage_full":"Biblical","usage_gender":"f"}]
// }]