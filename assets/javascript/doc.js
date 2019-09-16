// initializing float menu button, and its setup
$(document).ready(function () {
    $(".fixed-action-btn").floatingActionButton();
});
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {
        direction: "bottom"
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
//Gender:
//request URL:
///https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=f89971ab4d8b480630c107682513f5b8

//"profile" : {
//"gender" : "male"
//"gender" : "female"
//}
//-------------------------------------------------------------
//Language:
//request URL:
//https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=f89971ab4d8b480630c107682513f5b8


//HTML SIDE OF THINGS:

//<select name = "language" class = "mb-POCControls_Selector" id = "mbPOCControlsLangDrop">
//</select>;
//<!--THIS MAY NEED TO BE INSIDE THE SELECT TAGS
//<span data-mlr-text>English</span>
//<span data-mlr-text>Spanish</span>
//<span data-mlr-text>Chinese</span>
//-->

//JAVASCRIPT:

//mlr({
//dropID: "mbPOCControlsLangDrop",
//stringAttribute: "data-mlr-text",
//chosenLang: "English",
//mlstrings: MLstrings,
//});


//mlr({
// dropID: "mbPOCControlsLangDrop",
// stringAttribute: "data-mlr-text",
// chosenLang: "Chinese",
//  mlstrings: MLstrings,
// });

//  var MLstrings = [ 
//    { English : "Carrot",
//       Spanish : "Zanahoria",
//           Traditional : "香腸",
//    }
// ];

//  "languages" : {
//  "name" : "English",
//  "code" : "en",
//   "name" : "Spanish",
//  "code" : "es",
//  "name" : "Chinese",
//  "code" : "zh",
//  "name" : "Chinese (Simplified),
//  "code" : "zh-Hans",
//  "name" : Chinese (Traditional),
//  "code" : "zh-Hans"
//  };












//-------------------------------------------------------------
// Speciality: 

//SPECIALITY CODE:

// let displayDoctors = function(doctors) {
//    if (doctors.length === 0) {
//      $(".results").append(`<h1>there were no results. no one can help you.</h1>`);
//    }else {
//      doctors.forEach(function(doctor){

//  let zipcode = doctor.practices[0].visit_address.zip;
//    $(".results").append(`<h4>${zipcode}</h4>`);
//   });
//  }

//let displaySpecialtyList = function(specialties) {
//specialties.forEach(function(specialty){
//   $("#specialty-list").append(`<option value="${specialty.uid}">${specialty.name}</option>`);
//  });
//};


//   $(document).ready(function(){

//   let doctor = new Doctors({});
//   doctor.allSpecialties(displaySpecialtyList);



//    $("#get-doctors-by-specialty").click(function(event){
//     event.preventDefault();
//     $(".results").empty();

//     let doctors = new Doctors({specialty: $("#specialty-list").val()});
//     $("#specialty-list").val("");
//     doctors.bySpecialty(displayDoctors);

//  });

//  });



// var api_key = 'CODE_SAMPLES_KEY_9d3608187'; // Get your API key at developer.betterdoctor.com
// var resource_url = 'https://api.betterdoctor.com/2016-03-01/specialties?skip=0&limit=20&user_key=' + api_key;
//  $.get(resource_url, function (data) {
// data: { meta: {<metadata>}, data: {<array[Specialty]>} }
//      var template = Handlebars.compile(document.getElementById('specialties-template').innerHTML);
//      document.getElementById('content-placeholder').innerHTML = template(data);
//  });

//SPECIALITIES // request URL:
// https://api.betterdoctor.com/2016-03-01/specialties?limit=10&user_key=f89971ab4d8b480630c107682513f5b8

//----------------------------------------------------------- 
//zipcode:
// request URL:
// https://api.betterdoctor.com/2016-03-01/practices?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=f89971ab4d8b480630c107682513f5b8

// function isValidPostalCode(postalCode, countryCode) {
//    switch (countryCode) {
//        case "US":
//          postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
//           break;
//        case "CA":
//            postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9]//[A-Z][0-9])$/;
//            break;
//         default:
//             postalCodeRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
//      }
//      return postalCodeRegex.test(postalCode);
//  }


//ZIPCODE:
function validateZipCode(elementValue) {
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    return zipCodePattern.test(elementValue);
}

//Doctor.prototype.getDoctors = function(medicalIssue) {
// $.get('https://api.betterdoctor.com/2016-03-01/doctors?//query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//   .then(function(result) {
//     (result.data.forEach(function(data){
//      var docName = data.profile.first_name + " " + data.profile.last_name;
//     var docSpeacialties = data.specialties[0].actor + ", " + data.profile.title + "<br>" + data.specialties[0].description;
//     var docDegree = data.educations.school;
//     var docPic = data.profile.image_url;
//    var docInfo = data.practices[0].name + "<br>" + data.practices[0].visit_address.street + ", " + data.practices[0].visit_address.zip;

//   $('.showDoctors').append("Dr. " + docName + "</span><p>" + docSpeacialties + "</p><img src='" + docPic + "'><br>" + docInfo + "<hr>");
//    }));
//   })





//FAILER FUNCTION:
function failure(error) {
    $('#error').text(`Something went wrong, please try again!`);
    $('#output').text('Please try again');
    $('.overlay').fadeIn(200);
}



//CODE:
//$(document).ready(function() {
//$('.overlay').hide();
// $('#doctor').submit(function(event) {
//     event.preventDefault();
//     $('#output').empty();
//     var gender = $('#gender').val();
//     var language = $('#language').val();
//    var speciality = $('#speciality').val();
//    var zipCodePattern = $('#zipcode').val();

//   console.log(gender);
//   console.log(language);
//    console.log(speciality);
//   console.log(zipcode);

// var docReq = getApi(gender,language,speciality,zipcode);

//
// $('#alert-btn').click(function() {
//  $('.overlay').fadeOut(200);
// });