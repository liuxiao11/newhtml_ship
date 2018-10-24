define('controller/login',['lib/common'], function ($) {
    var h = document.documentElement.scrollHeight;
    document.getElementById("blanks").style.height = h + "px";

    document.getElementById("login").style.display = "block";

});