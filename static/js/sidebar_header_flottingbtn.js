let login_status
fnMove('1')
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
        console.log(res)
        let gender = ''
        if(res['gender']%2==1){
            gender='남'
        }else if ($('#sidebar_adminNum').text()==''){
            gender=''
        }
        else{
            gender='여'
        }
        $('#sidebar_id').text(res['id'])
        $('#sidebar_name').text(res['name'])
        $('#sidebar_gender').text(gender)
        $('#sidebar_adminNum').text(res['admin_num'])
        $('#sidebar_address').text(res['address']+' '+res['address_detail'])
        $('#sidebar_sigungu').text(res['address_sigungu'])
    }
    else{
        login_status = false
    }

    if($('#sidebar_name').text()==''||$('#sidebar_gender').text()==''||$('#sidebar_adminNum').text()==''||$('#sidebar_address').text()==''||$('#sidebar_sigungu').text()==''){
        alert('정보업데이트필요')
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
    window.location.href = "/";
}

function go_location(){
    if(login_status==true){
        window.open('location','_self')
    }
    else{
        alert('로그인이 필요한 페이지입니다.\n로그인 페이지로 이동합니다.')
        window.open('login','_self')
    }
}
    