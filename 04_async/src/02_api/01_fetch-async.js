
// 자바스크립트를 사용하면 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아올 수 있음
// 과거에는 ajax를 이용해 페이지 새로고침 없이(비동기) 서버에 데이터를 가져올 수 있었다
// fetch는 ajax의 단점을 개선하고 좀 더 현대적인 방식으로 네트워크 요청을 처리 가능하게 해준다
// 따라서 최신 웹 어플리케이션은 fetch 사용을 권장한다

// 기본 사용 방법
// let promise = fetch(url.[option]);
// url:  접근하고자 하는 url
// option: http mehtod나 headers, body 내용을 객체로 지정 가능. 아무것도 넣지 않으면 기본 get 요청으로 전송

// --샘플 api
// https://jsonplaceholder.typicode.com/

async function callApi(){
    const promise = fetch("https://jsonplaceholder.typicode.com/users");

    const response = await promise;
    console.log(response);

    console.log(`응답 상태: ${response.status}`);
    consolle.log("응답 헤더");
    for(let [key, value] of response.headers)
    {
        console.log(`${key}: ${value}}`);
    }

    const json = await response.json();
    console.log(json);

    json.forEach(element=>
    {
        console.log(element);
    }
    )
}

callApi();