//객체 가져오기
const saveBtn = document.getElementById('save');
const lists = document.getElementById("lists");
const first = document.getElementById('first');
const second = document.getElementById('second');
const operation = document.getElementById('operation');
const output = document.getElementById('output');

//리스트 처리 함수
const makeList = function(){
    let firstValue = first.value;
    let secondValue = second.value;
    let operValue = operation.value;
    let outputValue = output.textContent;
    
    let result = `${firstValue} ${operValue} ${secondValue} = ${outputValue}`;

    let $li = document.createElement("li");
    lists.appendChild($li)
    $li.className = "list";

    $li.textContent = result;
}

//이벤트 함수 매핑
saveBtn.addEventListener('click', makeList);