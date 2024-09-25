import { useEffect, useMemo, useState } from "react"

// useMemo : 메모이제이션을 통해 비용이 큰 계산을 최적화하거나
// 참조(주소값)이 동일해야 하는 경우에 사용
// 의존성이 변경되지 않으면 이전의 계산된 값을 재사용하여 불필요한 렌더링 방지
const LocationComponent = () =>
{
    const [isKorea, setIsKorea] = useState(true);
    const [number, setNumber] = useState(0);

    console.log("rendering");

    //1. 지역 변수에 문자열로 초기화 - 기본 자료형(state 변화 시 location 변화 없음)
    //const location = isKorea? "한국":"일본";

    //2. 지역 변수에 객체로 초기화
    // const location = {country: isKorea? "한국":"일본"}


    //3. 지역 변수에 useMemo의 반환값으로 초기화
    const location = useMemo(() =>
    {
        return{country: isKorea?"한국":"일본"};
    }, [isKorea])

    useEffect(()=>
    {
        console.log("called useEffect");
    }, [location]);

    return(
        <>
            <h2>지금 당신의 위치는?</h2>
            <p>국가: {location.country}</p>
            <button onClick ={()=>setIsKorea(!isKorea)}>국가변경</button>

            <hr/>
            <h2>좋아하는 숫자 입력하셈</h2>
            <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
        </>
    )
}

export default LocationComponent;