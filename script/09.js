const divShow = (d1, d2, isRandom) => {
    if (isRandom) {
        d1.style.display = "none" ;
        d2.style.display = "flex" ;
    }
    else {
        d1.style.display = "flex" ;
        d2.style.display = "none" ;
    }
    
}

const showImg = (x) => {
    //이미지
    const updownImg = document.querySelector("#btDiv0  img");
    //메시지
    const msg = document.querySelector("#sec3 > h1");

    updownImg.setAttribute("src", `./images/${x}.png`);    
    msg.innerHTML = x;

}

document.addEventListener("DOMContentLoaded", ()=>{
    //변수
    let randomNum ;
    let userNum ;

    // 랜덤영역    
    const btDiv1 = document.getElementById("btDiv1") ;
    const bt1 = document.getElementById("bt1") ;

    // 입력영역
    const btDiv2 = document.querySelector("#btDiv2") ;
    const bt2 = document.querySelector("#bt2") ;
    const txt = document.querySelector("#txt") ;

    //메시지영역
    const msg = document.querySelector("#sec3 > h1")

    //랜덤 flag    
    divShow(btDiv1, btDiv2, false) ;

    //입력수
    txt.addEventListener("change", (e) => {
        console.log(e.target.value) ;
        userNum = parseInt(e.target.value);
    })

    //버튼처리
    bt1.addEventListener("click", (e) => {
        e.preventDefault();
        //랜덤변수 생성 : 1에서 100까지 숫자 생성
        randomNum = Math.floor(Math.random()*100) + 1 ;
        console.log("bt1", randomNum) ;

        //입력영역 보이기
        divShow(btDiv1, btDiv2, true) ;
    }) ;

    bt2.addEventListener("click", (e) => {
        e.preventDefault() ;
        console.log("bt2") ;

        if (userNum === randomNum) {
            // 맞춘경우
            // updownImg.setAttribute("src", "./images/good.png");
            // msg.innerHTML = "맞춤" ;
            showImg("good");
            divShow(btDiv1, btDiv2, false);
        }
        else if (userNum > randomNum) {
            //down
            // updownImg.setAttribute("src", "./images/down.png");
            // msg.innerHTML = "DOWN" ;
            showImg("down");
        }
        else {
            //up
            // updownImg.setAttribute("src", "./images/up.png");
            // msg.innerHTML = "UP" ;
            showImg("up");
        }

    }) ;

});