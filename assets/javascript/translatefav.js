function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: '/en/ur'}, 'google_translate_element');
  }


  function tranSp() {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    /* top nav */
    url += "?q=" + escape($(".topNavHome").text());
    url += "&q=" + escape($(".topNavSearch").text());
    url += "&q=" + escape($(".topNavFavorites").text());
    url += "&q=" + escape($(".topNavContact").text());
    /* side nav */
    url += "&q=" + escape($(".sideNavHome").text());
    url += "&q=" + escape($(".sideNavSearch").text());
    url += "&q=" + escape($(".sideNavFavorites").text());
    url += "&q=" + escape($(".sideNavContact").text());
    /* fav */
    url += "&q=" + escape($(".fav").text());
    /* footer */
    url += "&q=" + escape($("#llc").text());
    url += "&q=" + escape($("#terms").text());
    /* dy */
    url += "&q=" + escape($("#no-fav-text").text());
    url += "&q=" + escape($(".langFav").text());
    url += "&q=" + escape($(".specFav").text());
    url += "&q=" + escape($(".bioFav").text());
    
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
        $(".topNavSearch").text(data.data.translations[1].translatedText);
        $(".topNavFavorites").text(data.data.translations[2].translatedText);
        $(".topNavContact").text(data.data.translations[3].translatedText);
        /* side nav */
        $(".sideNaveHome").text(data.data.translations[4].translatedText);
        $(".sideNavSearch").text(data.data.translations[5].translatedText);
        $(".sideNavFavorites").text(data.data.translations[6].translatedText);
        $(".sideNavContact").text(data.data.translations[7].translatedText);
        /* fav*/
        $(".fav").text(data.data.translations[8].translatedText);
        /* footer */
        $("#llc").text(data.data.translations[9].translatedText);
        $("#terms").text(data.data.translations[10].translatedText);
        /* dy */
        $("#no-fav-text").text(data.data.translations[11].translatedText);
        $(".langFav").text(data.data.translations[12].translatedText);
        $("#.specFav").text(data.data.translations[13].translatedText);
        $("#.bioFav").text(data.data.translations[14].translatedText);
       
        
    });    
    
    
$("#home-page-lang").attr("lang", "sp");

}

$("#spanish").click(tranSp);


$("#spanishTwo").click(tranSp);



/*function tranFr() {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    /* top nav *
    url += "?q=" + escape($(".topNavHome").text());
    url += "&q=" + escape($(".topNavSearch").text());
    url += "&q=" + escape($(".topNavFavorites").text());
    url += "&q=" + escape($(".topNavContact").text());
    /* side nav *
    url += "&q=" + escape($(".sideNavHome").text());
    url += "&q=" + escape($(".sideNavSearch").text());
    url += "&q=" + escape($(".sideNavFavorites").text());
    url += "&q=" + escape($(".sideNavContact").text());
    /* fav *
    url += "&q=" + escape($(".fav").text());
    /* footer *
    url += "&q=" + escape($("#llc").text());
    url += "&q=" + escape($("#terms").text());
    /* dy *
    url += "&q=" + escape($("#no-fav-text").text());
    url += "&q=" + escape($(".langFav").text());
    url += "&q=" + escape($(".specFav").text());
    url += "&q=" + escape($(".bioFav").text());
    
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
        $(".topNavSearch").text(data.data.translations[1].translatedText);
        $(".topNavFavorites").text(data.data.translations[2].translatedText);
        $(".topNavContact").text(data.data.translations[3].translatedText);
        /* side nav *
        $(".sideNaveHome").text(data.data.translations[4].translatedText);
        $(".sideNavSearch").text(data.data.translations[5].translatedText);
        $(".sideNavFavorites").text(data.data.translations[6].translatedText);
        $(".sideNavContact").text(data.data.translations[7].translatedText);
        /* fav*
        $(".fav").text(data.data.translations[8].translatedText);
        /* footer *
        $("#llc").text(data.data.translations[9].translatedText);
        $("#terms").text(data.data.translations[10].translatedText);
         /* dy *
         $("#no-fav-text").text(data.data.translations[11].translatedText);
         $(".langFav").text(data.data.translations[12].translatedText);
         $("#.specFav").text(data.data.translations[13].translatedText);
         $("#.bioFav").text(data.data.translations[14].translatedText);
        
       
        
    });    
    
    
$("#home-page-lang").attr("lang", "FR");

}

$("#french").click(tranFr);*/