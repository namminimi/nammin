//변수 설정
//컴퓨터 점수, 사람점수, 남은 슛 회수
//html 변경되는 요소



let comScore = 0;
let userScore = 0;
let shortsLeft = 3;
let isComputerTurn = true;
//html요소
let shortleftElem = document.querySelector("#short-left");
let comScoreElem = document.querySelector("#computer-score");
let userScoreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");


//컴퓨터 먼저 슛을 한다.
//2점슛인지 3점슛인지 랜덤으로 결정
//2점슛 50%확률로 성공, 3점슛은 30%확률로 성공
//컴퓨터가 슛을 할 때 동작하는 함수
shortleftElem.innerHTML = shortsLeft;  //맨위 횟수 3 추가
function onComputerShoot() {
    let shootType = Math.random() > 0.5 ? 2 : 3;
    if(shootType == 2) {
        //성공했을 때
        if (Math.random() < 0.5) {
            //컴퓨터의 점수를 올린다
            //글자를 변경
            //컴퓨터가 2점슛을 성공시켰습니다.
            comScore = comScore + 2;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 2점슛을 성공시켰습니다."
        } else {
            textElem.innerHTML = "실패했습니다"
        }
    } else {
        if(Math.random() < 0.3) {
            comScore = comScore + 3;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 3점슛을 성공시켰습니다."
        } else {
            textElem.innerHTML = "실패했습니다"
        }
    }
    isComputerTurn = false;
    userBtns.forEach(btn => {
        btn.disabled = false;
    })
    comBtn.disabled = true;
}

//사용자가 2점슛을 클릭했을 때
function onUserShoot2() {
    if (Math.random() < 0.5) {
        //사용자의 점수를 올린다
        //글자를 변경
        //사용자가 2점슛을 성공시켰습니다.
        userScore = userScore + 2;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "당신이 2점슛을 성공시켰습니다."
    } else {
        textElem.innerHTML = "실패했습니다"
    }
    userBtns.forEach(btn => {
        btn.disabled = true;
    })
    comBtn.disabled = false;
    --shortsLeft;
    shortleftElem.innerHTML = shortsLeft;
    if (shortsLeft == 0) {
        gameOver();
    }
}
//사용자가 3점슛을 클릭했을 때
function onUserShoot3() {
    if (Math.random() < 0.3) {
        //사용자의 점수를 올린다
        //글자를 변경
        //사용자가 3점슛을 성공시켰습니다.
        userScore = userScore + 3;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "당신이 3점슛을 성공시켰습니다."
    } else {
        textElem.innerHTML = "실패했습니다"
    }
    userBtns.forEach(btn => {
        btn.disabled = true;
    })
    comBtn.disabled = false;
    //남은 슛횟수 1씩 빼기
    --shortsLeft;
    //슛 횟수 변경하기
    shortleftElem.innerHTML = shortsLeft;
    if (shortsLeft == 0) {
        gameOver();
    }
}

//슛횟수가 0이되면 승자를 결정
function gameOver() {
    if(userScore>comScore) {
        textElem.innerHTML = "승리했습니다.";
    } else if (userScore == comScore) {
        textElem.innerHTML = "비겼습니다"
    } else {
        textElem.innerHTML="졌습니다"
    }
    userBtns.forEach(btn => {
        btn.disabled = true;
    })
    comBtn.disabled = true;
}