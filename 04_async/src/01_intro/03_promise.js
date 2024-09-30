const increase = (number) =>
{
    const promise = new Promise((resolve, reject) => 
    {
        //promise 객체는 동기로 처리해주긔 resolve reject는 promise에서 제공해주는 것
        setTimeout(()=>
        {
            const result = number + 10;
            if(result>50)
            {
                const e= new Error("Number Too Big");
                return reject(e);
            }
            resolve(result);
        }, 100)
    })
    return promise;
}

console.log(increase(0));

// chaining

increase(50).then(number =>
    {
        console.log(number);
        return increase(number);
}).then(number=>
    {
        console.log(number);
        return increase(number);
    }
).catch(e=>console.log(e, " 발생"));