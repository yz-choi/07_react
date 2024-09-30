function increase(number)
{
    const promise = new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
            const result = number + 10;
            if(result>50)
            {
                const e = new Error("Number is too big");
                return reject(e);
            }
            resolve(result);
        }, 1000);
    })

    return promise;
}

async function run()
{
    try
    {
        let result = await increase(1);
        console.log(result);
        result = await increase(2);
        console.log(result);
        result = await increase(3);
        console.log(result);
        result = await increase(4);
        console.log(result);
        result = await increase(5);
        console.log(result);
        result = await increase(6);
        console.log(result);
        return result;
    }
    catch(e)
    {
        console.log(e, "가 발생하다");
    }
}

const value = async () =>
{
    const runValue = await run();
    console.log("value: " + runValue);
}

const result = value();
console.log(result);