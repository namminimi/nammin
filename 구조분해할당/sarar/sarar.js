//nav태그안에 사진200장 넣어야함
//section 태그 새로 생성 document.createElement("section") 새요소 만들기/ 태그 선택은 nav
//parent.appendChild(element)부모요소의 자식요소로 추가
//parent.children[0] 몇번째에 추가하겠다
//section태그 안에 img태그 생성 document.createElement("img") 새요소 만들기/ 태그 선택은 section
//img 태그안에 사진을 for문을 이용하여 200장 생성


const sc = document.querySelector("section");  //section 태그 선택
let imgstr = ""; // 변수 선언

for (let i = 0; i <= 200; i++) {   // i = 0 ~ 200까지 반복
    imgstr = imgstr + `<img src="./image/pic${i}.jpg">`  //이미지 1~ 200까지 imgstr넣기
}

sc.innerHTML = imgstr;  //sc(section태그)안에 이미지 투입
let imgs = document.querySelectorAll("section img"); //section img 자식들전부 선택하고 img에 선언
sc.addEventListener("mousemove", function(e){   //sc이벤트 mousemove 실행
    let winW = window.innerWidth; // window너비 -> winW 변수 선언
    let imgNum = Math.floor(e.pageX/winW * 200); // 200 나누어주고 정수로 변환 -> imgNum변수선언
    console.log(imgNum); // 콘솔로 움직임 좌표 확인하기
    //img 매개변수에는 img 태그가 차례차례 들어감
    //index 매개변수에는 index 번호가 들어감
    //<img src = "pic0.png"
    imgs.forEach((img,index)=> {   //imgs(section img) 요소와 인덱스 forEach문으로 가져오기
        if(index != imgNum) {  // index와 imgNum값이 일치하지 않다면
            img.style.display = "none";  //img 디스플레이 스타일 none
        } else {
            img.style.display = "block"; //아니면 디스플레이 스타일 block
        }
    })

})







