require.config({
    waitSeconds : 3000,
    baseUrl : window.js_domain,
    paths : {
        "jquery":"./lib/jquery.min",
        "exporting":"./lib/exporting",
        "highcharts":"./lib/highcharts",
        "highcharts-zh_CN":"./lib/highcharts-zh_CN",
    },
    shim:{
        "jquery": {exports: "jQuery"}
    },
    urlArgs : 'v=' + window.version
});