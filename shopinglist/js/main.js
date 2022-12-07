

fetch("data/data.json")
.then(response => response.json())
.then(data =>  { 
    displayItems(data.items)
    setEvnetItems(data.items)
});


function mapStudy() {
    let students = [
        {name: "green", score: 70},
        {name: "blue", score: 80},
        {name: "yellow", score: 90},
    ]
    let stu2 = students.map(stu=>{
        return stu.score;
    })
    console.log(stu2);
}

mapStudy();

//이벤트 설정하기
function setEvnetItems(items) {
    const btns = document.querySelector(".buttonDiv");
    btns.addEventListener("click", function(e){
        /* const dataset = e.target.dataset; //
        const key = dataset.key;
        const value = dataset.value; */ //구조분해할당
        const { key, value } = e.target.dataset;
        //value key
        let filterd = items.filter(item => item[key] === value);
        //item[key] 값과 value값이 같으면 필터되서 선언변수에 넣어줌
        console.log(filterd);
        displayItems(filterd);// 그 필터된거를 화면 나타내는 함수 안에 넣어주면 됨
        /* {
            key: "type"
            value : "t"
        } */
        
    })
}


//화면 나타내기
function displayItems(items) {
    console.log(items);
    const ul = document.querySelector(".items");  //ul 선택
    let str = "";  //빈문자열 변수선언
    /* {
        "type": "skirt",
        "gender": "여성",
        "size": "large",
        "color": "pink",
        "image": "imgs/pink_s.png"
    } */
    str = items.map(item=>{  //map은 원본배열을 다른형태로 변환할수 있음
        //배열을 순차적으로 돌면서 각각 다른형태로 변환 해줌
        return `<li class="item">
            <img src="${item.image}">
            <span>${item.gender}, ${item.size}</span>
            </li>`;
    }).join("")
    ul.innerHTML = str;

} 

