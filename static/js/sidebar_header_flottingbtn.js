let login_status
//사이드바의 left값이 0인지 -값인지 확인후(-값이면 사이드바 hide 0이면 show 상태) 0일때 사이드바 이외의 부분을 클릭하면 sidebar_btn을 누른다.
$(document).mouseup(function (e) {
    let target = $("#sidebar");
    if (target.css('left') == '0px') {
        if (target.has(e.target).length == 0) {
            $('#sidebar_btn').click()
        }
    }
});
//사이드바의 로그인상태이면 계정정보 로그아웃을 표시하고 로그아웃상태이면 로그인 창으로 연결하는 창을 띄움
$(document).ready(function () {
    let user=$('#user').text();
    let res = (new Function ('return '+ user))();
    
    if(res){
        login_status = true
    }
    else{
        login_status = false
    }
    //사이드바 버튼 누르면 동작
    $('#sidebar_btn').click(function () {
        if (login_status == false) {
            $('#sidebar_no_login').css('display', 'block')
            $('#sidebar_login').css('display', 'none')
        }
        else if (login_status == true) {
            $('#sidebar_no_login').css('display', 'none')
            $('#sidebar_login').css('display', 'block')
        }
    });

});

function fnMove(seq) {
    var offset = $("#div" + seq).offset();
    $('html, body').animate({
        scrollTop: offset.top /*스크롤된 위치에서 상단네비 길이만큼 -60*/
    }, 500 /*스크롤시간*/);
}

function sign_out() {
    $.removeCookie('mytoken', { path: '/' });
    alert('로그아웃!');
    window.location.href = "/login";
}

    