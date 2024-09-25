import { useMemo, useReducer, useState } from "react";

const products = [
    { name: "아이폰 16", category: "전자제품" },
    { name: "맥북 프로", category: "전자제품" },
    { name: "에어팟", category: "전자제품" },
    { name: "삼성 갤럭시", category: "전자제품" },
    { name: "나이키 운동화", category: "의류" },
    { name: "아디다스 티셔츠", category: "의류" },
    { name: "믹서기", category: "가전제품" },
    { name: "전자레인지", category: "가전제품" },
  ];


const PrintProductsByCategory = () =>
{
    const [category, setCategory] = useState("");

    const filteredProducts = useMemo(()=>
    {
        if(category==="all")
        {
            return products;
        }
        else
        {
            return products.filter(product=>product.category === category);
            //return filterByCategory.map((product)=>{return `${product.name}`});
        }
    }, [category])

    return(
        <>
            <h1>상품 목록</h1>
            <button onClick={()=>{setCategory("all")}}>모든 카테고리</button>
            <button onClick={()=>{setCategory("전자제품")}}>전자제품</button>
            <button onClick={()=>{setCategory("의류")}}>의류</button>
            <button onClick={()=>{setCategory("가전제품")}}>가전제품</button>
            
            <h3>총 {filteredProducts.length}개의 상품</h3>
            {filteredProducts.map(product => {return(
                <li>{product.name}</li>
            )})}
        </>
    )
}

export default PrintProductsByCategory;