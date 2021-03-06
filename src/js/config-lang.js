MyApp.angular.config(function ($translateProvider, LangEn, LangEs) {

    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.translations('en', LangEn);
    $translateProvider.translations('es', LangEs);

    function getUserLang() {
        var def = 'en';
        var userLang = navigator.language || navigator.userLanguage || def;
        userLang = userLang.split('-')[0];
        return $translateProvider.translations()[userLang] ? userLang : def;
    }
    $translateProvider.preferredLanguage(getUserLang());
});