// const funA = () => {
//     console.log("A");
//     setTimeout(() => {funB();}, 5000);
//     console.log("C");
//     console.log("D");

// }

// const funB = () => {
//     console.log("B");
// }

//일일 박스 오피스 데이터 가져오기
const getBoxOffice = (dt, tbDiv, gubun) => {
    let apiKey = "f5eef3421c602c6cb7ea224104795888" ;    

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${dt}` ;
    if(gubun == "2") url = url + `&multiMovieYn=Y` ;
    else if (gubun == "3") url = url + `&multiMovieYn=N` ;

    let boxList ;
    tbDiv.innerHTML = "" ;

    let tags = `<table>
                    <tr>
                        <th>순위</th>
                        <th>영화명</th>
                        <th>개봉일</th>
                        <th>매출액</th>
                        <th>관객수</th>
                    </tr>                    
                `

    fetch(url)
    .then((resp) => resp.json()) 
    .then((data) => {
        boxList = data.boxOfficeResult.dailyBoxOfficeList ;

        // boxList.map(item => {
        //     console.log(item.rank, item.movieNm, item.openDt, item.salesAmt, item.audiCnt)
        //     tags = tags + `<tr>` ;
        //     tags = tags + `<td class="sp1">${item.rank}</td>` ;
        //     tags = tags + `<td class="sp2">${item.movieNm}</td>` ;
        //     tags = tags + `<td class="sp1">${item.openDt}</td>` ;
        //     tags = tags + `<td class="sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>` ;
        //     tags = tags + `<td class="sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</td>` ;
        //     tags = tags + `</tr>` ;
        // }) ;

        let trs = boxList.map(item =>            
            `<tr> 
            <td class="sp1">${item.rank}</td> 
            <td class="sp2">${item.movieNm}</td> 
            <td class="sp1">${item.openDt}</td> 
            <td class="sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}원</td> 
            <td class="sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}명</td> 
            </tr>`
        ) ;
        
        trs = trs.join("") ;

        console.log(trs) ; 

        tags = tags + trs + `</table>` ;
        tbDiv.innerHTML = tags ;
        console.log(boxList)
    })

}
// 1. change event
// 2. dt에 현재 선택된 값 가져오기
// 3. 년(4)월(2)일(2) 변경
// 4. getData에 날짜 넘겨주기
// 5. getData날짜 받아서  url반영
// 6. fetch
document.addEventListener("DOMContentLoaded", () => {
    //날짜 input 가져오기
    // const inputDt = document.querySelector("#dt") ;
    const tbDiv = document.querySelector("#tbDiv") ;
    const bt = document.querySelector("#bt")

    //조회버튼
    bt.addEventListener("click", (e) => {
        e.preventDefault() ;

        //날짜 input 가져오기
        const dt = inform.dt.value.replaceAll("-", "") ;
        const gubun = inform.gubun.value ;

        if (dt === "" || dt === undefined) {
            alert("날짜를 선택해 주세요.") ;
            return
        }

        getBoxOffice(dt, tbDiv, gubun) ;

        // console.log(dt)
        // console.log(inform.gubun.value) ;
        
        // console.log(inputDt.value)
        // console.log(e.target.value) ;

        // yyyymmdd 형식으로 변경
        // const dt = e.target.value.replaceAll("-", "") ;
        // console.log(dt);

        // 해당하는 날짜 조회
        // getBoxOffice(dt, tbDiv);
    }) ;
    
});