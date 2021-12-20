

      // 기본 틀
    //   let container = document.getElementById('location_list'); //지도를 담을 영역의 DOM 레퍼런스
    //   let options = { //지도를 생성할 때 필요한 기본 옵션
    //     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    //     level: 3 //지도의 레벨(확대, 축소 정도)
    //   };

    //   let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      let mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.498004414546934, 127.02770621963765), // 지도의 중심좌표 
        level: 3 // 지도의 확대 레벨 
    }; 

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 공공기관 마커가 표시될 좌표 배열입니다
let publicInstitutionPositions = [ 
    new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
    new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
    new kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
    new kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
    new kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
    new kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
    new kakao.maps.LatLng(37.49754540521486, 127.02546694890695)                
];

// 병원 마커가 표시될 좌표 배열입니다
let hospitalPositions = [
    new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
    new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
    new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
    new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
    new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
    new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
    new kakao.maps.LatLng(37.49996818951873, 127.02943721562295)
];

// 약국 마커가 표시될 좌표 배열입니다
let drugstorePositions = [
    new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
    new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
    new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
    new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
    new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
    new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
    new kakao.maps.LatLng(37.497680616783086, 127.02518427952202)                       
];    
let seniorCitizenshipPositions = [
    new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
    new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
    new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
    new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
    new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
    new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
    new kakao.maps.LatLng(37.497680616783086, 127.02518427952202)                       
]; 

let publicInstitutionMarkers = [], // 공공기관 마커 객체를 가지고 있을 배열입니다
    hospitalMarkers = [], // 병원 마커 객체를 가지고 있을 배열입니다
    drugstoreMarkers = []; // 약국 마커 객체를 가지고 있을 배열입니다
    seniorCitizenshipMarkers = []; // 약국 마커 객체를 가지고 있을 배열입니다

let map_img_1='../static/img/map_1.png'
let map_img_2='../static/img/map_2.png'
let map_img_3='../static/img/map_3.png'
let map_img_4='../static/img/map_4.png'
createpublicInstitutionMarkers(); // 공공기관 마커를 생성하고 공공기관 마커 배열에 추가합니다
createhospitalMarkers(); // 병원 마커를 생성하고 병원 마커 배열에 추가합니다
createdrugstoreMarkers(); // 약국 마커를 생성하고 약국 마커 배열에 추가합니다
createseniorCitizenshipMarkers(); // 약국 마커를 생성하고 약국 마커 배열에 추가합니다

changeMarker('publicInstitution'); // 지도에 공공기관 마커가 보이도록 설정합니다    


// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
    let markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;            
}

// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image) {
    let marker = new kakao.maps.Marker({
        position: position,
        image: image
    });
    
    return marker;  
}   
   
// 공공기관 마커를 생성하고 공공기관 마커 배열에 추가하는 함수입니다
function createpublicInstitutionMarkers() {
    
    for (let i = 0; i < publicInstitutionPositions.length; i++) {  
        
        let imageSize = new kakao.maps.Size(145, 180),
            imageOptions = {  
                spriteOrigin: new kakao.maps.Point(0, 0),    
                spriteSize: new kakao.maps.Size(48.33, 60)  
            };     
        
        // 마커이미지와 마커를 생성합니다
        let markerImage = createMarkerImage(map_img_1, imageSize, imageOptions),    
            marker = createMarker(publicInstitutionPositions[i], markerImage);  
        
        // 생성된 마커를 공공기관 마커 배열에 추가합니다
        publicInstitutionMarkers.push(marker);
    }     
}

// 공공기관 마커들의 지도 표시 여부를 설정하는 함수입니다
function setpublicInstitutionMarkers(map) {        
    for (let i = 0; i < publicInstitutionMarkers.length; i++) {  
        publicInstitutionMarkers[i].setMap(map);
    }        
}

// 병원 마커를 생성하고 병원 마커 배열에 추가하는 함수입니다
function createhospitalMarkers() {
    for (let i = 0; i < hospitalPositions.length; i++) {
        
        let imageSize = new kakao.maps.Size(145, 180),
        imageOptions = {  
            spriteOrigin: new kakao.maps.Point(0, 0),    
            spriteSize: new kakao.maps.Size(48.33, 60)  
        };       
     
        // 마커이미지와 마커를 생성합니다
        let markerImage = createMarkerImage(map_img_2, imageSize, imageOptions),    
            marker = createMarker(hospitalPositions[i], markerImage);  

        // 생성된 마커를 병원 마커 배열에 추가합니다
        hospitalMarkers.push(marker);    
    }        
}

// 병원 마커들의 지도 표시 여부를 설정하는 함수입니다
function sethospitalMarkers(map) {        
    for (let i = 0; i < hospitalMarkers.length; i++) {  
        hospitalMarkers[i].setMap(map);
    }        
}

// 약국 마커를 생성하고 약국 마커 배열에 추가하는 함수입니다
function createdrugstoreMarkers() {
    for (let i = 0; i < drugstorePositions.length; i++) {
        
        let imageSize = new kakao.maps.Size(145, 180),
        imageOptions = {  
            spriteOrigin: new kakao.maps.Point(0, 0),    
            spriteSize: new kakao.maps.Size(48.33, 60)  
        };  
     
        // 마커이미지와 마커를 생성합니다
        let markerImage = createMarkerImage(map_img_3, imageSize, imageOptions),    
            marker = createMarker(drugstorePositions[i], markerImage);  

        // 생성된 마커를 약국 마커 배열에 추가합니다
        drugstoreMarkers.push(marker);        
    }                
}

// 약국 마커들의 지도 표시 여부를 설정하는 함수입니다
function setdrugstoreMarkers(map) {        
    for (let i = 0; i < drugstoreMarkers.length; i++) {  
        drugstoreMarkers[i].setMap(map);
    }        
}
// 노인정 마커를 생성하고 노인정 마커 배열에 추가하는 함수입니다
function createseniorCitizenshipMarkers() {
    for (let i = 0; i < seniorCitizenshipPositions.length; i++) {
        
        let imageSize = new kakao.maps.Size(145, 180),
        imageOptions = {  
            spriteOrigin: new kakao.maps.Point(0, 0),    
            spriteSize: new kakao.maps.Size(48.33, 60)  
        };       
     
        // 마커이미지와 마커를 생성합니다
        let markerImage = createMarkerImage(map_img_4, imageSize, imageOptions),    
            marker = createMarker(seniorCitizenshipPositions[i], markerImage);  

        // 생성된 마커를 노인정 마커 배열에 추가합니다
        seniorCitizenshipMarkers.push(marker);        
    }                
}

// 노인정 마커들의 지도 표시 여부를 설정하는 함수입니다
function setseniorCitizenshipMarkers(map) {        
    for (let i = 0; i < seniorCitizenshipMarkers.length; i++) {  
        seniorCitizenshipMarkers[i].setMap(map);
    }        
}


// 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
function changeMarker(type){
    
    let publicInstitutionMenu = document.getElementById('publicInstitutionMenu');
    let hospitalMenu = document.getElementById('hospitalMenu');
    let drugstoreMenu = document.getElementById('drugstoreMenu');
    let seniorCitizenshipMenu = document.getElementById('seniorCitizenshipMenu');
    // 공공기관 카테고리가 클릭됐을 때
    if (type === 'publicInstitution') {
    
        // 공공기관 카테고리를 선택된 스타일로 변경하고
        publicInstitutionMenu.className = 'menu_selected';
        
        // 병원과 약국 카테고리는 선택되지 않은 스타일로 바꿉니다
        hospitalMenu.className = '';
        drugstoreMenu.className = '';
        seniorCitizenshipMenu.className = '';
        
        // 공공기관 마커들만 지도에 표시하도록 설정합니다
        setpublicInstitutionMarkers(map);
        sethospitalMarkers(null);
        setdrugstoreMarkers(null);
        setseniorCitizenshipMarkers(null);
        
    } else if (type === 'hospital') { // 병원 카테고리가 클릭됐을 때
    
        // 병원 카테고리를 선택된 스타일로 변경하고
        publicInstitutionMenu.className = '';
        hospitalMenu.className = 'menu_selected';
        drugstoreMenu.className = '';
        seniorCitizenshipMenu.className = '';
        
        // 병원 마커들만 지도에 표시하도록 설정합니다
        setpublicInstitutionMarkers(null);
        sethospitalMarkers(map);
        setdrugstoreMarkers(null);
        setseniorCitizenshipMarkers(null);
        
    } else if (type === 'drugstore') { // 약국 카테고리가 클릭됐을 때
     
        // 약국 카테고리를 선택된 스타일로 변경하고
        publicInstitutionMenu.className = '';
        hospitalMenu.className = '';
        drugstoreMenu.className = 'menu_selected';
        seniorCitizenshipMenu.className = '';
        
        // 약국 마커들만 지도에 표시하도록 설정합니다
        setpublicInstitutionMarkers(null);
        sethospitalMarkers(null);
        setdrugstoreMarkers(map);  
        setseniorCitizenshipMarkers(null);

    } else if (type === 'seniorCitizenship') { // 약국 카테고리가 클릭됐을 때
        // 노인정 카테고리를 선택된 스타일로 변경하고
        publicInstitutionMenu.className = '';
        hospitalMenu.className = '';
        drugstoreMenu.className = '';
        seniorCitizenshipMenu.className = 'menu_selected';
        
        // 노인정 마커들만 지도에 표시하도록 설정합니다
        setpublicInstitutionMarkers(null);
        sethospitalMarkers(null);
        setdrugstoreMarkers(null); 
        setseniorCitizenshipMarkers(map); 

    }    
} 






      /* 지도 중심좌표 및 지도레벨 구하는 예제

      // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, 'center_changed', function () {

        // 지도의  레벨을 얻어옵니다
        let level = map.getLevel();

        // 지도의 중심좌표를 얻어옵니다 
        let latlng = map.getCenter();

        let message = '<p>지도 레벨은 ' + level + ' 이고</p>';
        message += '<p>중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다</p>';

        let resultDiv = document.getElementById('result');
        resultDiv.innerHTML = message;
      });

      */




      /* 지도 클릭하면 해당부분 좌표 가져오는 예제

      // 지도에 클릭 이벤트를 등록합니다
      // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
      kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

        // 클릭한 위도, 경도 정보를 가져옵니다 
        let latlng = mouseEvent.latLng;

        let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';

        let resultDiv = document.getElementById('result2');
        resultDiv.innerHTML = message;

      });

      */



      /* 특정 이미지로 마커 등록하는 예제

      let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(33.44940120049981, 126.57421954635645);// 마커가 표시될 위치입니다

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage // 마커이미지 설정 
      });

      
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      */
