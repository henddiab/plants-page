document.getElementById('scrollTop').addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})
var lang = document.getElementById('lang');
lang.addEventListener('change', function () {
    var language = document.getElementById('changeLang');
    if (lang.value == 'English') {
        language.setAttribute('href', './css/bootstrap.min.css');
    } else if (lang.value == 'Arabic') {
        language.setAttribute('href', 'https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css');
    }

})