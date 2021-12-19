function sql_read() {
  $.ajax({
    type: "GET",
    url: '/sql/read',
    success: function (response) {
      alert('s')
      map_list = response['map_list']
      let positions = []
      for (i = 0; i < map_list.length; i++) {
        temp_map = {
          type: map_list[i][1],
          title: map_list[i][0],
          content: `<div>${map_list[i][0]}</div>`,
          latlng: new kakao.maps.LatLng(map_list[i][8], map_list[i][7]),
        }
        positions[i] = temp_map


      }

      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrcRed, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage // 마커 이미지 
        });
      }
      alert(response["msg"])
    },
    error: function (request, status, error) {
      alert("sql read fail");
    }
  });
}

$(document).ready(function () {

  let btn_list = [{ 'id': 'location_type_view_1', 'val': '공공기관' }, { 'id': 'location_type_view_2', 'val': '병원' }, { 'id': 'location_type_view_3', 'val': '약국' }, { 'id': 'location_type_view_4', 'val': '노인정' }]
  for (let i = 0; i < btn_list.length; i++) {
    let temp_val = btn_list[i]['val']
    let temp_id = btn_list[i]['id']
    let type_btn_temp = `<span id="${temp_id}" style="background-color: rgba(128, 128, 128, 0.342); padding: 0 5px 0 5px; border-radius: 50px;">
    <i class="bi bi-x-circle" style="font-size: 50%;"></i> ${temp_val}</span>`
    $('#type_views').append(type_btn_temp)
  }

  $('#location_type_btn_1').click(function () {
    if (document.getElementById('location_type_btn_1').checked == true) {
      $('#location_type_view_1').css('display', 'inline')
    } else if (document.getElementById('location_type_btn_1').checked == false) {
      $('#location_type_view_1').css('display', 'none')
    }
  })
  $('#location_type_btn_2').click(function () {
    if (document.getElementById('location_type_btn_2').checked == true) {
      $('#location_type_view_2').css('display', 'inline')
    } else if (document.getElementById('location_type_btn_2').checked == false) {
      $('#location_type_view_2').css('display', 'none')
    }
  })
  $('#location_type_btn_3').click(function () {
    if (document.getElementById('location_type_btn_3').checked == true) {
      $('#location_type_view_3').css('display', 'inline')
    } else if (document.getElementById('location_type_btn_3').checked == false) {
      $('#location_type_view_3').css('display', 'none')
    }
  })
  $('#location_type_btn_4').click(function () {
    if (document.getElementById('location_type_btn_4').checked == true) {
      $('#location_type_view_4').css('display', 'inline')
    } else if (document.getElementById('location_type_btn_4').checked == false) {
      $('#location_type_view_4').css('display', 'none')
    }
  })
});

