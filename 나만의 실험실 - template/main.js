// 배열 안에 흙, 물, 불, 공기를 가지고 있는 dictionary라는 이름의 변수를 만드세요.

function addElement(ele) {
    //<body> 태그 안에 makeElement()로 만든 태그를 넣어주기.
}

function makeElement(name) {
    //element라는 이름의 변수에 <div>라는 태그를 만들어주는 객체를 저장.
    //element에게 "elements", "draggable"이라는 클래스 추가.
    //element의 innerHTML을 name으로 변경.
    makeElementDraggable(element);
    //dictionary안에 name이라는 내용이 없다면, dics의 innerHTML에 `<div class="dicsel" onclick="addElement('${name}')">${name}</div>` 추가해주기.
    return element;
}

function makeElementDraggable(element) {
    //isDragging이라는 변수에 거짓으로 정의
    var offset = { x: 0, y: 0 };

    //element에 마우스를 눌렀을 때 handleMouseDown()이라는 함수를 실행하도록 이벤트 추가.
    //element에 마우스를 뗐을 때 handleMouseUp()이라는 함수를 실행하도록 이벤트 추가.
    //element에 마우스를 움직였을 때 handleMouseMove()이라는 함수를 실행하도록 이벤트 추가.

    function handleMouseDown(event) {
        //isDragging이라는 변수를 참으로 변경
        //offset의 x에 마우스의 offsetX값 넣기
        //offset의 y에 마우스의 offsetY값 넣기

        element.style.cursor = "grabbing";
    }

    function handleMouseUp() {
        //isDragging이라는 변수를 거짓으로 변경
        element.style.cursor = "grab";

        //draggableElements라는 변수를 "draggable"이라는 클래스를 가져오는 객체로 정의

        //i가 0이고 1씩 증가할 때 draggableElement의 길이가 i보다 작을 때 반복.
            //변수 otherElement를 draggableElements[]의 i번째로 정의.
            //만약 otherElement가 element가 아니고 isHalfColliding(element, otherElement)가 참이라면
                //combineElements(element, otherElement)를 실행
                return;
    }

    function handleMouseMove(event) {
        //isDragging이 거짓이라면 return을 통해서 반환.

        //x라는 변수를 마우스의 clientX 값에서 offset의 x값을 뺀 걸로 해.
        //y라는 변수를 마우스의 clientY 값에서 offset의 y값을 뺀 걸로 해.

        //element의 left를 x px로 바꿔줌
        //element의 top을 y px로 바꿔줌
    }
}

function isHalfColliding(element1, element2) {
    //element1과 element2가 충돌하는지 확인하는 함수
}

function combineElements(element1, element2) {
    //element1과 element2를 합치는 함수
}

function mergeEvent(e1, e2, m) {
    //recipe.js에 있는 값에 따라서 결합되는게 결정되는.
}