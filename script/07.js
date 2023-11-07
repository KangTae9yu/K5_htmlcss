// DOM이 생성이 되고 난 후 실행
document.addEventListener("DOMContentLoaded", ()=>{
    // document.getElementById("msg2").innerHTML = "안녕!!" ;
    //버튼 생성
    const bt1 = document.createElement("button")
    const bt1Text = document.createTextNode("버튼3을 눌러주세요.") ;

    bt1.appendChild(bt1Text) ;
    bt1.setAttribute("id", "bt3") ;
    
    //버튼 생성
    const bt2 = document.createElement("button")
    const bt2Text = document.createTextNode("버튼4을 눌러주세요.") ;

    bt2.appendChild(bt2Text) ;
    bt2.setAttribute("id", "bt4") ;

    document.getElementById("btDiv2").append(bt1);
    document.getElementById("btDiv2").append(bt2);

    //버튼 이벤트 달기
    document.getElementById("bt3").addEventListener("click", ()=>{
        Hello(3);
    });
    bt2.addEventListener("click", ()=>{
        Hello(4);
    });
    

});





// 함수 만들기 연습
// function Hello(n) {
//     alert("Hello!! 버튼" + n) ;
// }
// 자바스크립트에서 let, const 2개만 씀 let은 바꿀 수 있음. const는 못 바꿈.

const Hello = (n) => { // 익명함수를 받음.
    // alert("Hello!! 버튼" + n) ;       
    // document.getElementById("msg").innerHTML = "<h2>Hello!! 버튼" + n + "</h2>" ;
    // document.querySelector("#msg").innerHTML = "<h2>Hello!! 버튼" + n + "</h2>" ;
    // document.querySelector(".cmsg").innerHTML = "<h2>Hello!! 버튼" + n + "</h2>";

    //n=> 1,2,3,4
    // switch (n) {
    //     case 1 :
    //         document.querySelector("#msg1").innerHTML = "<h2>Hello!! 버튼" + n + "</h2>";
    //         break;
    //     case 2 :
    //         document.querySelector("#msg1").innerHTML = "<h2>Hello!! 버튼" + n + "</h2>";
    //         break;                
    //     case 3 :
    //         document.querySelector("#msg2").innerHTML = "<h2>Hello!! 버튼" + n + "</h2>";
    //         break;  
    //     case 4 :
    //         document.querySelector("#msg2").innerHTML = "<h2>Hello!! 버튼" + n + "</h2>";
    //         break;  
    // }
    
    // 백틱(`)을 사용    
    let cnt = 0;

    // 삼항연산
    // if (n <=2) cnt = 1;
    // else cnt = 2;

    n <= 2 ? cnt = 1 : cnt = 2 ;    // ? = if,    : = else
    console.log("cnt", cnt);
    document.querySelector(`#msg${cnt}`).innerHTML = "<h2>Hello!! 버튼" + n + "</h2>";  // $+{} 중괄호 안에 문자열을 숫자처럼 쓸 수 있다.
};

// const Hello = (n) => {
//     document.querySelector(".cmsg2").innerHTML = "<h2>안녕!! 버튼" + n + "</h2>";
// }