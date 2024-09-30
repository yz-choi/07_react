const sayHello = () =>
{
    console.log("hi");
}

setTimeout(sayHello, 3000);
console.log("end");

// setTimeOut은 비동기 함수 => 주어진 시간 후에 특정 코드를 실행하도록 예약하지만 기다리는 동안 나머지 코드 계속 실행
// 즉, 비동기적으로 동작하여 코드의 흐름을 블록하지 않고 다음 작업을 이어감