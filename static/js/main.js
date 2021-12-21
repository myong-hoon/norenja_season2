$(document).ready(function () {
    $("#cont").load('header')
    $("#location").load('location')
    let user=$('#user').text();
    let res = (new Function ('return '+ user))();
    if(res){
        $('#life_contents').css('display', 'block')
        $('#medical_contents').css('display', 'block')
        $('#culture_contents').css('display', 'block')
        $('#life_noLogin').css('display', 'none')
        $('#medical_noLogin').css('display', 'none')
        $('#culture_noLogin').css('display', 'none')
    }
    else{
        $('#life_contents').css('display', 'none')
        $('#medical_contents').css('display', 'none')
        $('#culture_contents').css('display', 'none')
        $('#life_noLogin').css('display', 'block')
        $('#medical_noLogin').css('display', 'block')
        $('#culture_noLogin').css('display', 'block')
    }
});

