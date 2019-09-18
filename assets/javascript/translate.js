function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: '/en/ur'}, 'google_translate_element');
  }

  function tranSp() {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    /* top nav */
    url += "?q=" + escape($(".topNavHome").text());
    url += "&q=" + escape($(".topNavFavorites").text());
    url += "&q=" + escape($(".topNavSearch").text());
    url += "&q=" + escape($(".topNavContact").text());
    /* side nav */
    url += "&q=" + escape($(".sideNavHome").text());
    url += "&q=" + escape($(".sideNavFavorites").text());
    url += "&q=" + escape($(".sideNavSearch").text());
    url += "&q=" + escape($(".sideNavContact").text());
    /* center text */
    url += "&q=" + escape($(".welcome").text());
    url += "&q=" + escape($(".onePatient").text());
    /* connect with doc */
    url += "&q=" + escape($("#connectDoc").text());
    /* choose doc */
    url += "&q=" + escape($(".chooseDoc").text());
    /* location form */
    url += "&q=" + escape($(".city").text());
    url += "&q=" + escape($(".locationForm").text());
    /* specialties */
   /*  url += "&q=" + escape($("#spec-option").text()); */
    /* choose spec */
    url += "&q=" + escape($("#choose-spec").text());
    /* list of spec */
    url += "&q=" + escape($(".Dentist").text());
    url += "&q=" + escape($(".Ophthalmologist").text());
    url += "&q=" + escape($(".Optometrist").text());
    url += "&q=" + escape($(".Gynecologist").text());
    url += "&q=" + escape($(".Dermatologist").text());
    url += "&q=" + escape($(".Anesthesiologist").text());
    url += "&q=" + escape($(".Allergist").text());
    url += "&q=" + escape($(".Psychologist").text());
    url += "&q=" + escape($(".Neurologist").text());
    url += "&q=" + escape($(".Orthodontis").text());
    url += "&q=" + escape($(".Endocrinologist").text());
    url += "&q=" + escape($(".Pediatrician").text());
    url += "&q=" + escape($(".Optometrist").text());
    url += "&q=" + escape($(".Gastroenterologist").text());
    url += "&q=" + escape($(".Pulmonologist").text());
    url += "&q=" + escape($(".Cardiologist").text());
    url += "&q=" + escape($(".Chiropractor").text());
    /* choose lang */
    url += "&q=" + escape($("#chooselang").text());
    /* gender */
    url += "&q=" + escape($("#male").text());
    url += "&q=" + escape($("#female").text());
    /* search submit */
    url += "&q=" + escape($("#search-submit").text());
    /* matches */
    url += "&q=" + escape($("#matches").text());
    /* add suc */
    url += "&q=" + escape($("#addsuc").text());
    url += "&q=" + escape($("#allAdd").text());
    /* footer */
    url += "&q=" + escape($("#llc").text());
    url += "&q=" + escape($("#terms").text());
    /* doc card */
    /* url += "&q=" + escape($(".card-title").text()); */
    url += "&q=" + escape($(".lang").text());
    url += "&q=" + escape($(".spec").text());
    url += "&q=" + escape($(".address").text());
    url += "&q=" + escape($(".bio").text());
    // keep track of language
    var selectedLang = $("#targetLanguage")
    //Target language
    url += "&target=" + "ES";
    url += "&source=" + "EN";
    //Replace with your API key
    url += "&key=AIzaSyAfE0XLqRMdo3TYeQWV05K0lgguIW-uV0A";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        console.log(data);
        console.log(url);
        /* top nav */
        $(".topNaveHome").text(data.data.translations[0].translatedText);
        $(".topNavFavorites").text(data.data.translations[1].translatedText);
        $(".topNavSearch").text(data.data.translations[2].translatedText);
        $(".topNavContact").text(data.data.translations[3].translatedText);
        /* side nav */
        $(".sideNaveHome").text(data.data.translations[4].translatedText);
        $(".sideNavFavorites").text(data.data.translations[5].translatedText);
        $(".sideNavSearch").text(data.data.translations[6].translatedText);
        $(".sideNavContact").text(data.data.translations[7].translatedText);
        /* center text */
        $(".welcome").text(data.data.translations[8].translatedText);
        $(".onePatient").text(data.data.translations[9].translatedText);
        /* connect with doc */
        $("#connectDoc").text(data.data.translations[10].translatedText);
        /* choose doc */
        $(".chooseDoc").text(data.data.translations[11].translatedText);
        /* location form */ /* slight bug */
        $(".city").text(data.data.translations[12].translatedText);
        $(".locationForm").text(data.data.translations[13].translatedText);
        /* specialties */
       /*  $("#spec-option").text(data.data.translations[13].translatedText); */
        /* choose spec */
        $("#choose-spec").text(data.data.translations[14].translatedText);
        /* list of spec */
        $(".Dentist").text(data.data.translations[15].translatedText);
        $(".Ophthalmologist").text(data.data.translations[16].translatedText);
        $(".Optometrist").text(data.data.translations[17].translatedText);
        $(".Gynecologist").text(data.data.translations[18].translatedText);
        $(".Dermatologist").text(data.data.translations[19].translatedText);
        $(".Anesthesiologist").text(data.data.translations[20].translatedText);
        $(".Allergist").text(data.data.translations[21].translatedText);
        $(".Psychologist").text(data.data.translations[22].translatedText);
        $(".Neurologist").text(data.data.translations[23].translatedText);
        $(".Orthodontist").text(data.data.translations[24].translatedText);
        $(".Endocrinologist").text(data.data.translations[25].translatedText);
        $(".Pediatrician").text(data.data.translations[26].translatedText);
        $(".Optometrist").text(data.data.translations[27].translatedText);
        $(".Gastroenterologist").text(data.data.translations[28].translatedText);
        $(".Pulmonologist").text(data.data.translations[29].translatedText);
        $(".Cardiologist").text(data.data.translations[30].translatedText);
        $(".Chiropractor").text(data.data.translations[31].translatedText);
        /* chooselang */
        $("#chooselang").text(data.data.translations[32].translatedText);
        /* gender */
        $("#male").text(data.data.translations[33].translatedText);
        $("#female").text(data.data.translations[34].translatedText);
        /* search submit */
        $("#search-submit").text(data.data.translations[35].translatedText);
        /* matches */
        $("#matches").text(data.data.translations[36].translatedText);
      /* add to cards */
      $("#addsuc").text(data.data.translations[37].translatedText);
      $("#allAdd").text(data.data.translations[38].translatedText);
      /* footer */
      $("#llc").text(data.data.translations[39].translatedText);
      $("#terms").text(data.data.translations[40].translatedText);
      /* doc card */
      /* $(".card-title").text(data.data.translations[40].translatedText); */
      $(".lang").text(data.data.translations[41].translatedText);
      $(".spec").text(data.data.translations[42].translatedText);
      $(".address").text(data.data.translations[43].translatedText);
      $(".bio").text(data.data.translations[44].translatedText);
    });    
    
    
$("html").attr("lang", "sp");

}

function tranEn() {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    /* top nav */
    url += "?q=" + escape($(".topNavHome").text());
    url += "&q=" + escape($(".topNavFavorites").text());
    url += "&q=" + escape($(".topNavSearch").text());
    url += "&q=" + escape($(".topNavContact").text());
    /* side nav */
    url += "&q=" + escape($(".sideNavHome").text());
    url += "&q=" + escape($(".sideNavFavorites").text());
    url += "&q=" + escape($(".sideNavSearch").text());
    url += "&q=" + escape($(".sideNavContact").text());
    /* center text */
    url += "&q=" + escape($(".welcome").text());
    url += "&q=" + escape($(".onePatient").text());
    /* connect with doc */
    url += "&q=" + escape($("#connectDoc").text());
    /* choose doc */
    url += "&q=" + escape($(".chooseDoc").text());
    /* location form */
    url += "&q=" + escape($(".city").text());
    url += "&q=" + escape($(".locationForm").text());
    /* specialties */
   /*  url += "&q=" + escape($("#spec-option").text()); */
    /* choose spec */
    url += "&q=" + escape($("#choose-spec").text());
    /* list of spec */
    url += "&q=" + escape($(".Dentist").text());
    url += "&q=" + escape($(".Ophthalmologist").text());
    url += "&q=" + escape($(".Optometrist").text());
    url += "&q=" + escape($(".Gynecologist").text());
    url += "&q=" + escape($(".Dermatologist").text());
    url += "&q=" + escape($(".Anesthesiologist").text());
    url += "&q=" + escape($(".Allergist").text());
    url += "&q=" + escape($(".Psychologist").text());
    url += "&q=" + escape($(".Neurologist").text());
    url += "&q=" + escape($(".Orthodontis").text());
    url += "&q=" + escape($(".Endocrinologist").text());
    url += "&q=" + escape($(".Pediatrician").text());
    url += "&q=" + escape($(".Optometrist").text());
    url += "&q=" + escape($(".Gastroenterologist").text());
    url += "&q=" + escape($(".Pulmonologist").text());
    url += "&q=" + escape($(".Cardiologist").text());
    url += "&q=" + escape($(".Chiropractor").text());
    /* choose lang */
    url += "&q=" + escape($("#chooselang").text());
    /* gender */
    url += "&q=" + escape($("#male").text());
    url += "&q=" + escape($("#female").text());
    /* search submit */
    url += "&q=" + escape($("#search-submit").text());
    /* matches */
    url += "&q=" + escape($("#matches").text());
    /* add suc */
    url += "&q=" + escape($("#addsuc").text());
    url += "&q=" + escape($("#allAdd").text());
    /* footer */
    url += "&q=" + escape($("#llc").text());
    url += "&q=" + escape($("#terms").text());
    /* doc card */
    /* url += "&q=" + escape($(".card-title").text()); */
    url += "&q=" + escape($(".lang").text());
    url += "&q=" + escape($(".spec").text());
    url += "&q=" + escape($(".address").text());
    url += "&q=" + escape($(".bio").text());
    // keep track of language
    var selectedLang = $("#targetLanguage")
    //Target language
    url += "&target=" + "EN";
    url += "&source=" + "ES";
    //Replace with your API key
    url += "&key=AIzaSyAfE0XLqRMdo3TYeQWV05K0lgguIW-uV0A";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        console.log(data);
        console.log(url);
        /* top nav */
        $(".topNaveHome").text(data.data.translations[0].translatedText);
        $(".topNavFavorites").text(data.data.translations[1].translatedText);
        $(".topNavSearch").text(data.data.translations[2].translatedText);
        $(".topNavContact").text(data.data.translations[3].translatedText);
        /* side nav */
        $(".sideNaveHome").text(data.data.translations[4].translatedText);
        $(".sideNavFavorites").text(data.data.translations[5].translatedText);
        $(".sideNavSearch").text(data.data.translations[6].translatedText);
        $(".sideNavContact").text(data.data.translations[7].translatedText);
        /* center text */
        $(".welcome").text(data.data.translations[8].translatedText);
        $(".onePatient").text(data.data.translations[9].translatedText);
        /* connect with doc */
        $("#connectDoc").text(data.data.translations[10].translatedText);
        /* choose doc */
        $(".chooseDoc").text(data.data.translations[11].translatedText);
        /* location form */ /* slight bug */
        $(".city").text(data.data.translations[12].translatedText);
        $(".locationForm").text(data.data.translations[13].translatedText);
        /* specialties */
       /*  $("#spec-option").text(data.data.translations[13].translatedText); */
        /* choose spec */
        $("#choose-spec").text(data.data.translations[14].translatedText);
        /* list of spec */
        $(".Dentist").text(data.data.translations[15].translatedText);
        $(".Ophthalmologist").text(data.data.translations[16].translatedText);
        $(".Optometrist").text(data.data.translations[17].translatedText);
        $(".Gynecologist").text(data.data.translations[18].translatedText);
        $(".Dermatologist").text(data.data.translations[19].translatedText);
        $(".Anesthesiologist").text(data.data.translations[20].translatedText);
        $(".Allergist").text(data.data.translations[21].translatedText);
        $(".Psychologist").text(data.data.translations[22].translatedText);
        $(".Neurologist").text(data.data.translations[23].translatedText);
        $(".Orthodontist").text(data.data.translations[24].translatedText);
        $(".Endocrinologist").text(data.data.translations[25].translatedText);
        $(".Pediatrician").text(data.data.translations[26].translatedText);
        $(".Optometrist").text(data.data.translations[27].translatedText);
        $(".Gastroenterologist").text(data.data.translations[28].translatedText);
        $(".Pulmonologist").text(data.data.translations[29].translatedText);
        $(".Cardiologist").text(data.data.translations[30].translatedText);
        $(".Chiropractor").text(data.data.translations[31].translatedText);
        /* chooselang */
        $("#chooselang").text(data.data.translations[32].translatedText);
        /* gender */
        $("#male").text(data.data.translations[33].translatedText);
        $("#female").text(data.data.translations[34].translatedText);
        /* search submit */
        $("#search-submit").text(data.data.translations[35].translatedText);
        /* matches */
        $("#matches").text(data.data.translations[36].translatedText);
      /* add to cards */
      $("#addsuc").text(data.data.translations[37].translatedText);
      $("#allAdd").text(data.data.translations[38].translatedText);
      /* footer */
      $("#llc").text(data.data.translations[39].translatedText);
      $("#terms").text(data.data.translations[40].translatedText);
      /* doc card */
      /* $(".card-title").text(data.data.translations[40].translatedText); */
      $(".lang").text(data.data.translations[43].translatedText);
      $(".spec").text(data.data.translations[43].translatedText);
      $(".address").text(data.data.translations[43].translatedText);
      $(".bio").text(data.data.translations[43].translatedText);
    });    
    
    
$("html").attr("lang", "en");

}
$("#english").click(tranEn);
$("#englishTwo").click(tranEn);

$("#spanish").click(tranSp);
$("#spanishTwo").click(tranSp);


/*function tranFr() {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    /* top nav *
    url += "?q=" + escape($(".topNavHome").text());
    url += "&q=" + escape($(".topNavFavorites").text());
    url += "&q=" + escape($(".topNavSearch").text());
    url += "&q=" + escape($(".topNavContact").text());
    /* side nav *
    url += "&q=" + escape($(".sideNavHome").text());
    url += "&q=" + escape($(".sideNavFavorites").text());
    url += "&q=" + escape($(".sideNavSearch").text());
    url += "&q=" + escape($(".sideNavContact").text());
    /* center text *
    url += "&q=" + escape($(".welcome").text());
    url += "&q=" + escape($(".onePatient").text());
    /* connect with doc *
    url += "&q=" + escape($("#connectDoc").text());
    /* choose doc *
    url += "&q=" + escape($(".chooseDoc").text());
    /* location form *
    url += "&q=" + escape($("#locationForm").text());
    /* specialties *
   /*  url += "&q=" + escape($("#spec-option").text()); */
    /* choose spec *
    url += "&q=" + escape($("#choose-spec").text());
    /* list of spec *
    url += "&q=" + escape($(".Dentist").text());
    url += "&q=" + escape($(".Ophthalmologist").text());
    url += "&q=" + escape($(".Optometrist").text());
    url += "&q=" + escape($(".Gynecologist").text());
    url += "&q=" + escape($(".Dermatologist").text());
    url += "&q=" + escape($(".Anesthesiologist").text());
    url += "&q=" + escape($(".Allergist").text());
    url += "&q=" + escape($(".Psychologist").text());
    url += "&q=" + escape($(".Neurologist").text());
    url += "&q=" + escape($(".Orthodontis").text());
    url += "&q=" + escape($(".Endocrinologist").text());
    url += "&q=" + escape($(".Pediatrician").text());
    url += "&q=" + escape($(".Optometrist").text());
    url += "&q=" + escape($(".Gastroenterologist").text());
    url += "&q=" + escape($(".Pulmonologist").text());
    url += "&q=" + escape($(".Cardiologist").text());
    url += "&q=" + escape($(".Chiropractor").text());
    /* choose lang *
    url += "&q=" + escape($("#chooselang").text());
    /* gender *
    url += "&q=" + escape($("#male").text());
    url += "&q=" + escape($("#female").text());
    /* search submit *
    url += "&q=" + escape($("#search-submit").text());
    /* matches *
    url += "&q=" + escape($("#matches").text());
    /* add suc *
    url += "&q=" + escape($("#addsuc").text());
    url += "&q=" + escape($("#allAdd").text());
    /* footer *
    url += "&q=" + escape($("#llc").text());
    url += "&q=" + escape($("#terms").text());
    /* doc card *
    /* url += "&q=" + escape($(".card-title").text()); *
    url += "&q=" + escape($(".lang").text());
    url += "&q=" + escape($(".spec").text());
    url += "&q=" + escape($(".address").text());
    url += "&q=" + escape($(".bio").text());
    // keep track of language
    var selectedLang = $("#targetLanguage")
    //Target language
    url += "&target=" + "FR";
    url += "&source=" + "EN";
    //Replace with your API key
    url += "&key=AIzaSyAfE0XLqRMdo3TYeQWV05K0lgguIW-uV0A";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        console.log(data);
        console.log(url);
        /* top nav *
        $(".topNaveHome").text(data.data.translations[0].translatedText);
        $(".topNavFavorites").text(data.data.translations[1].translatedText);
        $(".topNavSearch").text(data.data.translations[2].translatedText);
        $(".topNavContact").text(data.data.translations[3].translatedText);
        /* side nav *
        $(".sideNaveHome").text(data.data.translations[4].translatedText);
        $(".sideNavFavorites").text(data.data.translations[5].translatedText);
        $(".sideNavSearch").text(data.data.translations[6].translatedText);
        $(".sideNavContact").text(data.data.translations[7].translatedText);
        /* center text *
        $(".welcome").text(data.data.translations[8].translatedText);
        $(".onePatient").text(data.data.translations[9].translatedText);
        /* connect with doc *
        $("#connectDoc").text(data.data.translations[10].translatedText);
        /* choose doc *
        $(".chooseDoc").text(data.data.translations[11].translatedText);
        /* location form *
        $("#locationForm").text(data.data.translations[12].translatedText);
        /* specialties */
       /*  $("#spec-option").text(data.data.translations[13].translatedText); */
        /* choose spec *
        $("#choose-spec").text(data.data.translations[13].translatedText);
        /* list of spec *
        $(".Dentist").text(data.data.translations[14].translatedText);
        $(".Ophthalmologist").text(data.data.translations[15].translatedText);
        $(".Optometrist").text(data.data.translations[16].translatedText);
        $(".Gynecologist").text(data.data.translations[17].translatedText);
        $(".Dermatologist").text(data.data.translations[18].translatedText);
        $(".Anesthesiologist").text(data.data.translations[19].translatedText);
        $(".Allergist").text(data.data.translations[20].translatedText);
        $(".Psychologist").text(data.data.translations[21].translatedText);
        $(".Neurologist").text(data.data.translations[22].translatedText);
        $(".Orthodontist").text(data.data.translations[23].translatedText);
        $(".Endocrinologist").text(data.data.translations[24].translatedText);
        $(".Pediatrician").text(data.data.translations[25].translatedText);
        $(".Optometrist").text(data.data.translations[26].translatedText);
        $(".Gastroenterologist").text(data.data.translations[27].translatedText);
        $(".Pulmonologist").text(data.data.translations[28].translatedText);
        $(".Cardiologist").text(data.data.translations[29].translatedText);
        $(".Chiropractor").text(data.data.translations[30].translatedText);
        /* chooselang *
        $("#chooselang").text(data.data.translations[31].translatedText);
        /* gender *
        $("#male").text(data.data.translations[32].translatedText);
        $("#female").text(data.data.translations[33].translatedText);
        /* search submit *
        $("#search-submit").text(data.data.translations[34].translatedText);
        /* matches *
        $("#matches").text(data.data.translations[35].translatedText);
      /* add to cards *
      $("#addsuc").text(data.data.translations[36].translatedText);
      $("#allAdd").text(data.data.translations[37].translatedText);
      /* footer *
      $("#llc").text(data.data.translations[38].translatedText);
      $("#terms").text(data.data.translations[39].translatedText);
      /* doc card *
      /* $(".card-title").text(data.data.translations[40].translatedText); *
      $(".lang").text(data.data.translations[40].translatedText);
      $(".spec").text(data.data.translations[41].translatedText);
      $(".address").text(data.data.translations[42].translatedText);
      $(".bio").text(data.data.translations[43].translatedText);
    });    
    
    
$("#home-page-lang").attr("lang", "FR");

}

$("#french").click(tranFr);*/



