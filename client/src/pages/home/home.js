import style from './home.module.css'
import {Chat} from "../../components/chat/chat";
import {Messages} from "../../components/messages/messages";
import {useState} from "react";

function Home(){
    const [visibility, setVisibility] = useState('disable');

    const visibilityMessages = ()=>{
        setVisibility('show')
    }

    return (
        <section className={style.main}>
                <div className={style.banner}>
                    Welcome, test site for web chat
                    <button onClick={()=>visibilityMessages()}>
                        messages
                    </button>
                    <div className={style.messages}>
                        <Messages  visibility_={visibility}/>
                    </div>
                </div>
                <div className={style.chat}>
                    <Chat />
                </div>
        </section>
    )
}

export default Home
