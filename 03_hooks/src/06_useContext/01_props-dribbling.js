import { useState } from "react"
import { Styles } from "./style"

const Header = ({isDark}) =>
{
    return(
        <header style = {{
            ...Styles.header,
            backgroundColor: isDark? "black" : "lightgray",
            color: isDark? "white" : "black"
        }}>
            <h1>Welcome to Props!</h1>
        </header>
    )
}

const Content = ({isDark}) =>
{
    return(
        <div style={{
            ...Styles.content,
            backgroundColor: isDark? "gray" : "white",
            color: isDark? "white" : "black"  
        }}>
            <p>배기배기진스...</p>
        </div>
    )
}

const Footer = ({isDark, setIsDark}) =>
{
    const toggleHandler = () =>setIsDark(!isDark);

    return(
        <footer style={{
            ...Styles.footer,
            backgroundColor: isDark? "black" : "lightgray",
            color: isDark? "white" : "black"  
        }}>
            <button onClick={toggleHandler}>
                {isDark?"light mode":"dark mode"}
            </button>
        </footer>
    )
}

const Page = () =>
{
    const [isDark, setIsDark] = useState(false);

    return(
        <div style={{...Styles.page}}>
            <Header isDark={isDark}/>
            <Content isDark={isDark}/>
            <Footer isDark={isDark} setIsDark={setIsDark}/>

        </div>
    )

}

export default Page;