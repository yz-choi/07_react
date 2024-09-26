import { useState } from "react"

const useInput = () =>
{
    const [value, setValue] = useState("");
    const onChange = e => setValue(e.target.value);

    return {value, onChange};
}

const CustomHooks= () =>
{
    const name = useInput();
    const pass = useInput();
    const email = useInput();

    return(
        <>
            <label>이름: </label>
            <input type="text" value={name.value} onChange={name.onChange}/>
            <br/>
            <label>password: </label>
            <input type="password" {...pass}/> {/*속성이랑 키가 같으면 ...으로 쓸 수 있음 */}
            <br/>
            <label>email: </label>
            <input type="email" {...email}/>

            <h4>name: {name.value}</h4>
            <h4>password: {pass.value}</h4>
            <h4>email: {email.value}</h4>

        </>
    )
}

export default CustomHooks;