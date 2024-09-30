function increase(number, callback)
{
    setTimeout(()=>
    {
        const result = number+10;
        if(callback)
        {
            callback(result);
        }
    }, 1000)
}

increase(0, result => console.log(result)); //callback은 truthy falsy 반환

increase(0, result => {
    increase(result, result=>
    {
        console.log(result);
        increase(result, result =>
        {
            console.log(result);
        })
    })
})