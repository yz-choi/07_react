import { useState } from "react"

const CheckOrder = ({orderList}) =>
{
    console.log(orderList)
    return(
        <>
        <h1>주문 확인</h1>
        {orderList.length===0 ? "주문한 커피가 없습니다" :
        (orderList.map(order=>{return(<li key={order.id}>{order.name} - {order.price}원</li>)}))}
        </>
    )
}

export default CheckOrder