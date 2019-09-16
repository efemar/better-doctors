// event listener when click "Add to Favorites" button
$(document).on("click", ".fav-button", function () {

    // get the doctorID from "Add to Favorites" button's id attribute
    var doctorID = $(this).attr("id");
    var URL = "https://api.betterdoctor.com/2016-03-01/doctors/" + doctorID + "?user_key=f89971ab4d8b480630c107682513f5b8";

    // send request to API to get the doctor using doctorID
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function (response) {

        // get the data you need from JSON response
        var src = response.data.profile.image_url;
        var doctorName = response.data.profile.first_name + " " + response.data.profile.last_name + "," + response.data.profile.title;;

        var langArray1 = response.data.profile.languages;
        var langArray2 = [];
        for (var i = 0; i < langArray1.length; i++) {
            langArray2.push(langArray1[i].name);
        }
        var languages = langArray2.toString();

        var specArray = response.data.specialties;
        var specArray2 = [];
        for (var i = 0; i < specArray1.length; i++) {
            specArray2.push(specArray1[i].name);
        }
        var specialties = specArray2.toString();

        var address = response.data.practices[0].visit_address.street + " "
        response.data.practices[0].visit_address.street2 + ","
        response.data.practices[0].visit_address.city + ","
        response.data.practices[0].visit_address.state + " "
        response.data.practices[0].visit_address.zip;

        var bio = response.data.profile.bio;

        if (localStorage.getItem("favorites")) {  // if "favorites" key exists in localStorage

            var storage = JSON.parse(localStorage.getItem("favorites"));  // convert "favorites" key to array

            for (var i = 0; i < storage.length; i++) { // if the doctor is already in localStorage, exit function
                if (storage[i].doctorID === doctorID) {
                    // show a modal to alert user and hide the modal after 2 seconds
                    show_modal("modal2");
                    setTimeout(function () { hide_modal("modal2"); }, 2000);
                    return false;
                }
            }

            // if function has not exit, which means the doctor is not in localStorage, then add the doctor to localStorage
            storage.push({
                doctorID: doctorID,
                src: src,
                doctorName: doctorName,
                languages: languages,
                specialties: specialties,
                address: address,
                bio: bio
            });

            localStorage.setItem('favorites', JSON.stringify(storage));

            // show a modal to alert user and hide the modal after 2 seconds
            show_modal("modal1");
            setTimeout(function () { hide_modal("modal1"); }, 2000);

        } else {  // if "favorites" key does NOT exist in localStorage
            var storage = [];

            storage.push({
                doctorID: doctorID,
                src: src,
                doctorName: doctorName,
                languages: languages,
                specialties: specialties,
                address: address,
                bio: bio
            });

            localStorage.setItem('favorites', JSON.stringify(storage));

            // show a modal to alert user and hide the modal after 2 seconds
            show_modal("modal1");
            setTimeout(function () { hide_modal("modal1"); }, 3000);
        }
    })
});


/*
    $('#modal2').modal();
    $('#modal2').modal('open');
    setTimeout(function () { $('#modal2').modal('close'); } , 2000)   
 */


function show_modal(modalID) {
    $('#' + modalID).modal();
    $('#' + modalID).modal('open');
}


function hide_modal(modalID) {
    $('#' + modalID).modal('close');
}


//localStorage.clear();
//var array = ["a"];
//localStorage.setItem('favorites', JSON.stringify(array));


if (localStorage.getItem("favorites")) {  // if "favorites" key exists in localStorage

    var storage = JSON.parse(localStorage.getItem("favorites"));

    if (storage.length > 0) {  // "favorites" key exists and has favorites items

        // loop through the storage array to create elements for each favorite and add to the page
        for (var i = 0; i < storage.length; i++) {
            var doctorID = "85366c084adfad5645393a68fb7f90dc";  // storage[i].doctorID;
            var src = 'assets/images/Doctor.png';
            var doctorName = "SMITH S. HO, MD, PA";
            var languages = "English";
            var specialties = "Internal Medicine";
            var address = "7610 Carroll Ave Ste 280, Takoma Park, MD 20912";
            var bio = "Specializing in internal medicine, Dr. Smith Ho, MD is one of the country's most highly ranked doctors. He currently treats patients in Takoma park,Maryland. Dr.Ho is licensed to treat patients in Maryland. Based on his credentials, network and experience, Dr.Ho is rated among the top 20 % of all doctors in the United States. In addition, Dr.Ho has successfully passed abackground check including a medical license verification(active) and screening formalpractice history(none found).";

            var newDiv = $("<div>");
            newDiv.addClass("col l4 m12 s12");
            newDiv.attr("id", "newDiv" + doctorID);

            var newDiv1 = $("<div>");
            newDiv1.addClass("card large");

            // create new button for "Remove Favorite" for each favorite with id attribute set to doctorID from storage
            var removeFavEle = $("<a>");
            removeFavEle.addClass("btn-floating red btn tooltipped waves-effect waves-light remove-fav-button");
            removeFavEle.attr("data-position", "right");
            removeFavEle.attr("data-tooltip", "Remove from Favorites");
            removeFavEle.attr("id", doctorID);
            removeFavEle.html("<i class='material-icons'>delete</i>");

            var newDiv11 = $("<div>");
            newDiv11.addClass("card-image waves-effect waves-block waves-light");
            newDiv11.html("<img class='activator' src='" + src + "'>");

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

            newDiv1.append(removeFavEle, newDiv11, newDiv12, newDiv13);

            newDiv.append(newDiv1);

            $("#favList").append(newDiv);
        }

    } else {  // "favorites" key exists but has NO item (its value is just "[]"), this could happen after you delete all favorites in the list
        $("#no-fav-text").text("You don't have favorites!");
    }
} else { // if "favorites" key does NOT exist in localStorage
    $("#no-fav-text").text("You don't have favorites!");
}


// event listener when click "Remove Favorite" button
$(document).on("click", ".remove-fav-button", function () {

    // get the doctorID that needs to be removed from the button's id attribute
    var doctorID = $(this).attr("id");

    var storage = JSON.parse(localStorage.getItem("favorites"));

    // filter out the doctorID that needs to be removed and store it again to localStorage
    var newStorage = storage.filter(item => item.doctorID !== doctorID);

    localStorage.setItem('favorites', JSON.stringify(newStorage));

    // remove the doctor div from the page
    $("#newDiv" + doctorID).remove();

    // if all favorites are removed, then display a text on the page
    // "favorites" key will still exist in localStorage but its value is just "[]"
    if ((JSON.parse(localStorage.getItem("favorites"))).length === 0) {
        // or  if (localStorage.getItem("favorites") === "[]") {
        $("#favList").text("You don't have favorites!");
    }

});


// refresh fav.html page whenever a favorite item is added to localStorage in case this page is open on a tab
window.addEventListener("storage", function handler() {
    location.reload();
});
