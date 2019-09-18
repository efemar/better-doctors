// event listener when click "Add to Favorites" button
$(document).on("click", ".add-fav-button", function () {

    // get the doctorID from "Add to Favorites" button's id attribute
    var doctorID = $(this).attr("id");
    var URL = "https://api.betterdoctor.com/2016-03-01/doctors/" + doctorID + "?user_key=f89971ab4d8b480630c107682513f5b8";

    // send request to API to get the doctor using doctorID
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function (response) {

        // get the data needed from JSON response
        var src;
        if (response.data.profile.image_url.includes("general_doctor_male")) {
            src = "assets/images/Doctor.png";
        } else if (response.data.profile.image_url.includes("general_doctor_female")) {
            src = "assets/images/female-doctor.png";
        } else {
            src = response.data.profile.image_url;
        }

        var doctorName = response.data.profile.first_name + " " + response.data.profile.last_name + ", " + response.data.profile.title;;

        var practiceArray = response.data.practices;
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
        if (response.data.specialties.length > 0) {
            var specialties = response.data.specialties[0].name;
        }

        var address;
        if (response.data.practices[0].visit_address.street2) {
            address = response.data.practices[0].visit_address.street + " " +
                response.data.practices[0].visit_address.street2 + ", " +
                response.data.practices[0].visit_address.city + ", " +
                response.data.practices[0].visit_address.state + " " +
                response.data.practices[0].visit_address.zip;
        } else {
            address = response.data.practices[0].visit_address.street + ", " +
                response.data.practices[0].visit_address.city + ", " +
                response.data.practices[0].visit_address.state + " " +
                response.data.practices[0].visit_address.zip;
        }

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
            setTimeout(function () { hide_modal("modal1"); }, 2000);
        }
    })
});


function show_modal(modalID) {
    $('#' + modalID).modal();
    $('#' + modalID).modal('open');
}


function hide_modal(modalID) {
    $('#' + modalID).modal('close');
}


if (localStorage.getItem("favorites")) {  // if "favorites" key exists in localStorage

    var storage = JSON.parse(localStorage.getItem("favorites"));

    if (storage.length > 0) {  // "favorites" key exists and has favorites items

        // loop through the storage array to create elements for each favorite item and add to the page
        for (var i = 0; i < storage.length; i++) {
            var doctorID = storage[i].doctorID;
            var src = storage[i].src;
            var doctorName = storage[i].doctorName;
            var languages = storage[i].languages;
            var specialties = storage[i].specialties;
            var address = storage[i].address;
            var bio = storage[i].bio;

            var newDiv = $("<div>");
            newDiv.addClass("col l4 m12 s12");

            var newDiv1 = $("<div>");
            newDiv1.addClass("card large");

            var newDiv11 = $("<div>");
            newDiv11.addClass("card-image waves-effect waves-block waves-light");

            // create new button for "Remove Favorite" for each favorite with id attribute set to doctorID from storage
            var removeFavEle = $("<a>");
            removeFavEle.addClass("btn-floating red btn tooltipped waves-effect waves-light remove-fav-button");
            removeFavEle.attr("data-position", "right");
            removeFavEle.attr("data-tooltip", "Remove from Favorites");
            removeFavEle.attr("id", doctorID);
            removeFavEle.html("<i class='material-icons'>delete</i>");
            removeFavEle.attr("style", "position: absolute; top: 5px; right: 5px;");

            newDiv11.append(removeFavEle);

            var imgEle = $("<img class='activator' src='" + src + "'>");

            newDiv11.append(imgEle);

            var newDiv12 = $("<div>");
            newDiv12.addClass("card-content");

            var nameEle = $("<span>");
            nameEle.addClass("card-title activator grey-text text-darken-4");
            nameEle.html(doctorName + "<i class='material-icons right'>more_vert</i>");

            var lanEle = $("<p class ='langFav'>Languages: " + languages + "</p>");

            var speEle = $("<p class = 'specFav'>Specialties: " + specialties + "</p>");

            var addressEle = $("<p>Address: <a href='#'>" + address + "</a></p>");

            newDiv12.append(nameEle, lanEle, speEle, addressEle);

            var newDiv13 = $("<div>");
            newDiv13.addClass("card-reveal");

            var bioTitle = $("<span>");
            bioTitle.addClass("card-title grey-text text-darken-4");
            bioTitle.html("Bio:" + "<i class='material-icons right'>close</i>");

            var bioContent = $("<p class ='bioFav'>" + bio + "</p>");

            newDiv13.append(bioTitle, bioContent);
            newDiv1.append(newDiv11, newDiv12, newDiv13);
            newDiv.append(newDiv1);
            $("#favList").append(newDiv);

        }

    } else {  // "favorites" key exists but has NO item (its value is just "[]"), this could happen after you delete all favorites in the list
        $("#no-fav-text").text("You don't have any favorites!");
    }
} else { // if "favorites" key does NOT exist in localStorage
    $("#no-fav-text").text("You don't have any favorites!");
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

    location.reload();

    // if all favorites are removed, then display a text on the page
    // "favorites" key will still exist in localStorage but its value is just "[]"
    if ((JSON.parse(localStorage.getItem("favorites"))).length === 0) {
        // or  if (localStorage.getItem("favorites") === "[]") {
        $("#no-fav-text").text("You don't have any favorites!");
    }                                                                           

});


// refresh fav.html page whenever a favorite item is added to localStorage in case the page is open on a tab
window.addEventListener("storage", function handler() {
    location.reload();
});

