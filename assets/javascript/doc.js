//initializing float menu button, and its setup
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {
        direction: "top"
    });
});

//------------------------------------------------------------------------
//initializing tooltip
$(document).ready(function () {
    $(".tooltipped").tooltip()
});

//-------------------------------------------------------------------------
//smooth scroll to our anchor links
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                event.preventDefault();
                $("html, body").animate({
                    scrollTop: target.offset().top
                },
                    800,
                    function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr("tabindex", "-1");
                            $target.focus(); // Set focus again
                        }
                    }
                );
            }
        }
    });

//-------------------------------------------------------------------------
//initializing drop input for specialities
$(document).ready(function () {
    $('select').formSelect();
});

//-------------------------------------------------------------------------
//initializing side nav bar on small screen
$(document).ready(function () {
    $('.sidenav').sidenav();
});

//-------------------------------------------------------------------------
//initializing float menu button, and its setup
$(document).ready(function () {
    $(".fixed-action-btn").floatingActionButton();
});


//------------------------------------------------------------------------
//event listener for "Submit"
$("#search-submit").on("click", function () {

    var gender;
    if ($("#gender-switch").is(':checked')) {
        gender = "female";
    } else {
        gender = "male";
    }

    var location = $("#input_text").val().trim().toLowerCase();

    if (!location) {
        // show a modal to alert user and hide the modal after 2 seconds
        show_modal("modal3");
        setTimeout(function () { hide_modal("modal3"); }, 2000);
    }

    var specID = $("#spec-option").val().toLowerCase();

    var language = $("#lang-option").val();

    // queryURl with gender and location
    var queryURL = "https://api.betterdoctor.com/2016-03-01/doctors?location=" + location + "&gender=" + gender + "&limit=100&user_key=f89971ab4d8b480630c107682513f5b8";
    if (specID) {
        queryURL = queryURL + "&specialty_uid=" + specID;
    }

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var rawResults = response.data;

        var results;
        if (language) {
            results = rawResults.filter(item => JSON.stringify(item.practices).includes(language));
        } else {
            results = rawResults.filter(item => JSON.stringify(item.practices).includes("English"));
        }

        console.log(results.length);

        $("#your-matches").empty();

        var div1 = $("<div>");
        div1.addClass("container");

        var div11 = $("<div>");
        div11.addClass("row");

        var div111 = $("<div>");
        div111.addClass("col l12 m12 s12");

        var div112 = $("<div>");
        div112.addClass("row");

        var h1Ele = $("<h1>");
        h1Ele.text("Your Matches");
        h1Ele.attr("id", "matches");

        div111.append(h1Ele);
        div11.append(div111, div112);
        div1.append(div11);


        if (results.length == 0) {

            //$("#doctor-cards").empty();
            var h5Ele = $("<h5 class='centerText'>No doctors found!</h5>");
            //$("#doctor-cards").append(h5Ele);
            div112.append(h5Ele);

        } else {

            //$("#doctor-cards").empty();

            for (var i = 0; i < results.length; i++) {

                var src;
                if (results[i].profile.image_url.includes("general_doctor_male")) {
                    src = "assets/images/Doctor.png";
                } else if (results[i].profile.image_url.includes("general_doctor_female")) {
                    src = "assets/images/female-doctor.png";
                } else {
                    src = results[i].profile.image_url;
                }

                var doctorID = results[i].uid;

                var doctorName = results[i].profile.first_name + " " + results[i].profile.last_name + ", " + results[i].profile.title;

                var practiceArray = results[i].practices;
                var langArray2 = [];
                for (var j = 0; j < practiceArray.length; j++) {
                    var langArray1 = practiceArray[j].languages;
                    for (var k = 0; k < langArray1.length; k++) {
                        langArray2.push(langArray1[k].name);
                    }
                }
                var uniqueArray = langArray2.filter(function (item, pos) {
                    return langArray2.indexOf(item) == pos;
                })
                var languages = uniqueArray.join(", ");

                var specialties = "";
                if (results[i].specialties.length > 0) {
                    var specialties = results[i].specialties[0].name;
                }

                var address;
                if (results[i].practices[0].visit_address.street2) {
                    address = results[i].practices[0].visit_address.street + " " +
                        results[i].practices[0].visit_address.street2 + ", " +
                        results[i].practices[0].visit_address.city + ", " +
                        results[i].practices[0].visit_address.state + " " +
                        results[i].practices[0].visit_address.zip;
                } else {
                    address = results[i].practices[0].visit_address.street + ", " +
                        results[i].practices[0].visit_address.city + ", " +
                        results[i].practices[0].visit_address.state + " " +
                        results[i].practices[0].visit_address.zip;
                }

                var newAddress = address.replace(/\s/g, "+");

                var bio = results[i].profile.bio;

                var newDiv = $("<div>");
                newDiv.addClass("col l4 m12 s12");

                var newDiv1 = $("<div>");
                newDiv1.addClass("card large");

                var newDiv11 = $("<div>");
                newDiv11.addClass("card-image waves-effect waves-block waves-light");

                // create new button for "Add to Favorite" for each doctor
                var addToFavEle = $("<a>");
                addToFavEle.addClass("btn-floating green btn tooltipped waves-effect waves-light add-fav-button");
                addToFavEle.attr("data-position", "right");
                addToFavEle.attr("data-tooltip", "Add to Favorites");
                addToFavEle.attr("id", doctorID);
                addToFavEle.html("<i class='material-icons'>favorite</i>");
                addToFavEle.attr("style", "top: 5px; right: 5px;");

                newDiv11.append(addToFavEle);

                var imgEle = $("<img class='activator' src='" + src + "'>");

                newDiv11.append(imgEle);

                var newDiv12 = $("<div>");
                newDiv12.addClass("card-content");

                var nameEle = $("<span>");
                nameEle.addClass("card-title activator grey-text text-darken-4");
                nameEle.html(doctorName + "<i class='material-icons right'>more_vert</i>");

                var lanEle = $("<p class='lang'>Languages: " + languages + "</p>");

                var speEle = $("<p class='spec'>Specialties: " + specialties + "</p>");

                var addressEle = $("<p>Address: <a href='https://www.google.com/maps/place/" + newAddress + "' target='_blank'>" + address + "</a></p>");

                newDiv12.append(nameEle, lanEle, speEle, addressEle);

                var newDiv13 = $("<div>");
                newDiv13.addClass("card-reveal");

                var bioTitle = $("<span>");
                bioTitle.addClass("card-title grey-text text-darken-4");
                bioTitle.html("Bio:" + "<i class='material-icons right'>close</i>");

                var bioContent = $("<p class='bio'>" + bio + "</p>");

                newDiv13.append(bioTitle, bioContent);
                newDiv1.append(newDiv11, newDiv12, newDiv13);
                newDiv.append(newDiv1);
                //$("#doctor-cards").append(newDiv);
                div112.append(newDiv);

                if ($("#home-page-lang").attr("lang") == "sp") { tranSp(); }
                else if ($("#home-page-lang").attr("lang") == "sp") { tranFr(); }

            }
        }

        $("#your-matches").append(div1);
        $(".tooltipped").tooltip();

    });
});





































































