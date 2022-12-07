//변수 설정
//컴퓨터 점수, 사람점수, 남은 슛 회수
//html 변경되는 요소

//html요소
let shortleftElem = document.querySelector("#short-left");
let comScoreElem = document.querySelector("#computer-score");
let userScoreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");

//오브젝트로 만들기
//컴퓨터 오브젝트
let computer = {
    score: 0,
    percent2: 0.5,
    percent3: 0.3,
}
//사용자 오브젝트
let user = {
    score: 0,
    percent2: 0.5,
    percent3: 0.3,
}
//게임 오브젝트
let game = {
    isComputerTurn: true,
    shortsLeft: 5,
}



//컴퓨터 먼저 슛을 한다.
//2점슛인지 3점슛인지 랜덤으로 결정
//2점슛 50%확률로 성공, 3점슛은 30%확률로 성공
//컴퓨터가 슛을 할 때 동작하는 함수
shortleftElem.innerHTML = game.shortsLeft;  //맨위 횟수 3 추가
function onComputerShoot() {
    let shootType = Math.random() > 0.5 ? 2 : 3;
    if(Math.random() < computer['percent'+shootType]) {
        //성공했을 때
        computer.score += shootType;
        comScoreElem.innerHTML = computer.score;
        textElem.innerHTML = "컴퓨터가" + shootType + "점슛을 성공시켰습니다."
    } else {
        textElem.innerHTML = "실패했습니다"
    }
    disabledBtn(false);
    
}    
//버튼 비활성화 함수
//flag에 true가 할당되면 사용자 버튼이 비활성화
//컴퓨터 버튼은 활성화
//flag 에 false가 할당되면 사용자 버튼이 활성화
//컴퓨터 버튼은 활성화
function disabledBtn(flag) {
    userBtns.forEach(btn => {
        btn.disabled = flag;
    })
    comBtn.disabled = !flag;
}

//사용자가 2점슛을 클릭했을 때
function onUserShoot(jum) {
    if (Math.random() < user["percent" + jum]) {
        //사용자의 점수를 올린다
        //글자를 변경
        //사용자가 2점슛을 성공시켰습니다.
        user.score = user.score + jum;
        userScoreElem.innerHTML = user.score;
        textElem.innerHTML = "당신이" + jum +"점슛을 성공시켰습니다."
    } else {
        textElem.innerHTML = "실패했습니다"
    }
    disabledBtn(true);

    game.shortsLeft = game.shortsLeft-1;
    shortleftElem.innerHTML = game.shortsLeft;
    if (game.shortsLeft ==0) {
        gameOver();
    }
    
}
//슛횟수가 0이되면 승자를 결정
function gameOver() {
    if(user.score>computer.score) {
        textElem.innerHTML = "승리했습니다.";
    } else if (user.score == computer.score) {
        textElem.innerHTML = "비겼습니다"
    } else {
        textElem.innerHTML="졌습니다"
    }
    userBtns.forEach(btn => {
        btn.disabled = true;
    })
    comBtn.disabled = true;
}