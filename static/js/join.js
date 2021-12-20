

$(document).ready(function () {

    let oldVal = ''
    $("#input-username").on("propertychange change keyup paste input", function () {
        let currentVal = $(this).val();
        if (currentVal == oldVal) {
            return;
        }
        oldVal = currentVal;
        let id_chk = chk(currentVal, false, false, true, true, "||")
        if (id_chk == true) {
            alert('아이디는 영문 / 숫자만 사용이 가능합니다.')
            $("#input-username").val('')
        }
    });

    $("#input-name").on("propertychange change keyup paste input", function () {
        let currentVal = $(this).val();
        if (currentVal == oldVal) {
            return;
        }
        oldVal = currentVal;
        let name_chk = chk(currentVal, false, true, true, false, "||")
        if (name_chk == true) {
            alert('이름은 영문 / 한글만 사용이 가능합니다.')
            $("#input-name").val('')
        }
    });

    $("#admin_num_first").on("propertychange change keyup paste input", function () {
        let currentVal = $(this).val();
        if (currentVal == oldVal) {
            return;
        }
        oldVal = currentVal;
        let admin_num_first_chk = chk(currentVal, true, false, true, true, "||")
        if (admin_num_first_chk == true) {
            alert('주민번호 앞자리를 정확히 입력하세요.')
            $("#admin_num_first").val('')
        } else if ($("#admin_num_first").val().length > 6) {
            alert('주민번호 앞자리를 정확히 입력하세요.')
            $("#admin_num_first").val('')
        }
    });

    $("#admin_num_end").on("propertychange change keyup paste input", function () {
        let currentVal = $(this).val();
        if (currentVal == oldVal) {
            return;
        }
        oldVal = currentVal;
        let admin_num_first_chk = chk(currentVal, true, false, true, true, "||")
        if (admin_num_first_chk == true) {
            alert('주민번호 앞자리를 정확히 입력하세요.')
            $("#admin_num_end").val('')
        } else if ($("#admin_num_end").val().length > 1) {
            alert('주민번호 앞자리를 정확히 입력하세요.')
            $("#admin_num_end").val('')
        }
    });

    $("#input-password").on('blur', function () {
        let currentVal = $(this).val();
        if (currentVal == oldVal) {
            return;
        }
        oldVal = currentVal;
        msg = ``
        let pw_chk = chk(currentVal, true, true, true, false, '&&')

        if ($("#input-password").val().length < 6) {
            msg += `\n비밀번호 6~15 입력하세요.`
            $("#input-password").val('')
        } else if ($("#input-password").val().length > 15) {
            msg += `\n비밀번호 6~15 입력하세요.`
            $("#input-password").val('')
        }
        if (pw_chk == false) {
            msg += `\n비밀번호를 영문+숫자+특수문자 조합하여 구성하세요.`
            $("#input-password").val('')
        }
        alert(msg)
    });




});

function chk(text, bool1, bool2, bool3, bool4, not) {

    let result = false
    var check1 = /^(?=.*[a-zA-Z])/;   //영문
    var check2 = /^(?=.*[0-9])/; //숫자
    var check3 = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;   //특수문자
    var check4 = /^(?=.*[ㄱ-ㅎ])/;  //한글
    let operator = not
    let result_list = []
    if (bool1 == true) {
        result_list.push(check1.test(text))
    }
    if (bool2 == true) {
        result_list.push(check2.test(text))
    }
    if (bool3 == true) {
        result_list.push(check3.test(text))
    }
    if (bool4 == true) {
        result_list.push(check4.test(text))
    }

    for (let i = 1; i < result_list.length; i++) {
        if (operator == '||') {
            result = result_list[0] || result_list[i]
        } else if (operator == '&&') {
            result = result_list[0] && result_list[i]
        }
    }

    return result;

}

let id_nonempty = false
let idChk_nonempty = false
let pw_nonempty = false
let pwChk_nonempty = false
let name_nonempty = false
let admin_num_nonempty = false
let gender_nonempty = false
let address_nonempty = false
let detailAddress_nonempty = false


function idChk() {
    alert('중복확인')
    idChk_nonempty = true
}

function join_btn() {
    let username = $("#input-username").val();
    let password = $("#input-password").val();
    let password2 = $("#input-password2").val();
    let name = $("#input-name").val();
    let admin_num = $('#admin_num_first').val();
    let gender = $('#admin_num_end').val();
    let address = $("#jibunAddress").val();
    let detailAddress = $("#detailAddress").val();

    if (username == '') {
        id_nonempty = true
    }
    if (password == '') {
        pw_nonempty = true
    }
    if (password2 == '') {
        pwChk_nonempty = true
    }
    if (name == '') {
        name_nonempty = true
    }
    if (admin_num == '') {
        admin_num_nonempty = true
    }
    if (gender == '') {
        gender_nonempty = true
    }
    if (address == '') {
        address_nonempty = true
    }
    if (detailAddress == '') {
        detailAddress_nonempty = true
    }

    if (id_nonempty && idChk_nonempty && pw_nonempty && pwChk_nonempty && name_nonempty && admin_num_nonempt && gender_nonempty && address_nonempty && detailAddress_nonempty == true) {
        $.ajax({
            type: "POST",
            url: "/sign_up/save",
            data: {
                username_give: username,
                password_give: password,
                name_give:name,
                adminNum_give:admin_num,
                gender_give:gender,
                address_give:address,
                detailAddress_give:detailAddress
            },
            success: function (response) {
                alert("회원가입을 축하드립니다!");
                window.location.replace("/login2");
            }
        });
    } else {
        alert('작성하지 않은 부분을 작성해 주세요.')
    }
}