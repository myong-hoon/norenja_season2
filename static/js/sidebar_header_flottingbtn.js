//사이드바의 left값이 0인지 -값인지 확인후(-값이면 사이드바 hide 0이면 show 상태) 0일때 사이드바 이외의 부분을 클릭하면 openbtn을 누른다.
$(document).mouseup(function (e) {
    let target = $("#sidebar");
    if (target.css('left') == '0px') {
        if (target.has(e.target).length == 0) {
            $('#OpenBtn').click()
        }
    }
});
//사이드바의 로그인상태이면 계정정보 로그아웃을 표시하고 로그아웃상태이면 로그인 창으로 연결하는 창을 띄움
$(document).ready(function (){
    let login_status = true;
    if(login_status == false){
        $('#sidebar_no_login').css('display','block')
        $('#sidebar_login').css('display','none')
    }
    else if(login_status == true){
        $('#sidebar_no_login').css('display','none')
        $('#sidebar_login').css('display','block')
    }
});
