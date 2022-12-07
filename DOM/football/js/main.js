

let arts = document.querySelectorAll("article");
let lis = document.querySelectorAll(".leftnav li")


//스크롤 이벤트
document.addEventListener("scroll", function(){
    let sct = document.documentElement.scrollTop;
    arts.forEach((ar, index)=> {
        let zoomNum = (index * -5000) + sct
        ar.style.transform = `translateZ(${zoomNum}px)`;
        if (sct > 1000 + (4000 * index)){
            ar.classList.add("on");
            arts.forEach((ar,index2)=>{
                if(index != index2) {
                    ar.classList.remove("on");
                }
            })
            
        }
    })
    //0번째 아티클은 sct값이 1000보다 커지면 on
    //1번째 아티클은 sct값이 6000보다 커지면 on
    //2번째 아티클은 sct값이 11000보다 커지면 on
    //3번째 아티클은 sct값이 16000보다 커지면 on
    //4번째 아티클은 sct값이 21000보다 커지면 on

    //0 li를 클릭했을 때 0
    //1 li를 클릭했을 때 5000
    //2 li를 클릭했을 때 10000
    //3 li를 클릭했을 때 15000
    //4 li를 클릭했을 때 20000
    /* lis[0].addEventListener("click", function) */
    
})

lis.forEach((li, index)=> {
    li.addEventListener("click", function(e){
        //이벤트 제거
        e.preventDefault();
        window.scrollTo({top: index * 5000, behavior: "smooth"})
    })
})