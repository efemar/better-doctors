// initializing float menu button, and its setup
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {
        direction: "top"
    });
});
//------------------------------------------------------------------------
//initializing tooltip
$(document).ready(function () {
    $(".tooltipped").tooltip();
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
<<<<<<< HEAD
//initializing side nav bar on small screen
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
//-------------------------------------------------------------------------
$("#submit").on("click", function () {
=======
// initializing float menu button, and its setup
$(document).ready(function () {
    $(".fixed-action-btn").floatingActionButton();
});
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {
        direction: "top"
    });
});
//------------------------------------------------------------------------
//initializing tooltip
$(document).ready(function () {
    $(".tooltipped").tooltip();
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
$("#submit").on("click", function (event) {
    event.preventDefault();
>>>>>>> 863cbe0b07e858b5d35f31a4ded76fc7c3470154
    var gender;
    var location;
    var specID;
    var language;
    var queryURL;
    // var queryURL = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=" + specID + "&location=" + location + "&gender=" + gender + "&user_key=f89971ab4d8b480630c107682513f5b8";
    /*if (specID) {
        queryURL = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=" + specID + "&location=" + location + "&gender=" + gender + "&user_key=f89971ab4d8b480630c107682513f5b8";
    } else {
        queryURL = "https://api.betterdoctor.com/2016-03-01/doctors?location=" + location + "&gender=" + gender + "&user_key=f89971ab4d8b480630c107682513f5b8";
    }
*/
    queryURL = "https://api.betterdoctor.com/2016-03-01/doctors?location=ca-san-diego&gender=male&user_key=f89971ab4d8b480630c107682513f5b8";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data; // array
       
       for (var i=0; i<results.length; i++) {
        var doctorName;
        var src;
        if (results[i].profile.image_url.includes("general_doctor_male")) {
            src = "assets/images/Doctor.png";
        } else if (results[i].profile.image_url.includes("general_doctor_female")) {
            src = "assets/images/female-doctor.png";
        }
        else {
            src = results[i].profile.image_url;
        }
        var doctorID = results[i].uid;
        if (results[i].profile.middle_name) {
            doctorName = results[i].profile.first_name + " " + results[i].profile.middle_name + " " + results[i].profile.last_name + "," + results[i].profile.title;
        } else {
            doctorName = results[i].profile.first_name + " " + results[i].profile.last_name + "," + results[i].profile.title;
        }
        var langArray1 = results[i].profile.languages;
        var langArray2 = [];
        for (var j = 0; j < langArray1.length; j++) {
            langArray2.push(langArray1[j].name);
        }
        var languages = langArray2.toString();
        var specArray1 = results[i].specialties;
        var specialties;
        if (specArray1.length >= 1) { specialties = specArray1[0].name; }
        var address = results[i].practices[0].visit_address.street + " " +
            results[i].practices[0].visit_address.street2 + "," +
            results[i].practices[0].visit_address.city + "," +
            results[i].practices[0].visit_address.state + " " +
            results[i].practices[0].visit_address.zip;
        var bio = results[i].profile.bio;
        var newDiv = $("<div>");
        newDiv.addClass("col l4 m12 s12");
        newDiv.attr("id", "newDiv" + doctorID);
        var newDiv1 = $("<div>");
        newDiv1.addClass("card large");
        
        var newDiv11 = $("<div>");
        newDiv11.addClass("card-image waves-effect waves-block waves-light");
        // create new button for "Remove Favorite" for each favorite with id attribute set to doctorID from storage
        var addToFavEle = $("<a>");
        addToFavEle.addClass("btn-floating red btn tooltipped waves-effect waves-light add-fav-button");
        addToFavEle.attr("data-position", "right");
        addToFavEle.attr("data-tooltip", "Remove from Favorites");
        addToFavEle.attr("id", doctorID);
        addToFavEle.html("<i class='material-icons'>delete</i>");
        addToFavEle.attr("style", "float: top; top: 5px; right: 5px;");
        newDiv11.append(addToFavEle);
        var imgEle = $("<img class='activator' src='" + src + "'>");
        newDiv11.append(imgEle);
    
        var newDiv12 = $("<div>");
        newDiv12.addClass("card-content");
        var nameEle = $("<span>");
        nameEle.addClass("card-title activator grey-text text-darken-4");
        nameEle.html(doctorName + "<i class='material-icons right'>more_vert</i>");
        var lanEle = $("<p>Languages: " + languages + "</p>");
        var speEle = $("<p>Specialties: " + specialties + "</p>");
        var addressEle = $("<p>Address: <a href='#'>" + address + "</a></p>");
        newDiv12.append(nameEle, lanEle, speEle, addressEle);
        var newDiv13 = $("<div>");
        newDiv13.addClass("card-reveal");
        var bioTitle = $("<span>");
        bioTitle.addClass("card-title grey-text text-darken-4");
        bioTitle.html("Bio:" + "<i class='material-icons right'>close</i>");
        var bioContent = $("<p>" + bio + "</p>");
        newDiv13.append(bioTitle, bioContent);
        newDiv1.append(newDiv11, newDiv12, newDiv13);
        newDiv.append(newDiv1);
        $("#doctor-cards").append(newDiv);
                }
    })
})
