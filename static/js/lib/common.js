define('lib/common', ['lib/jquery'],
function() {
    $('#userBox').click(function(){
        $('#dropdownMenu').show();
    });
    $('.sidebar-list').click(function(){
        if($(this).attr('href') === 'javascript:void(0)'){
            $(this).siblings('ul').toggleClass('active');
        }
    });

});