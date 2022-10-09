import {useRef, useState} from "react";
import style from './chat.module.css'
import {Message} from "../message";
import {InputChat} from "../input";
import {UserServices} from "../../../services/user.services";

export function Chat(){
    const buttonIconChat = useRef();
    const modalChat = useRef();

    const [message, setMessage] = useState([])
    const [messages, setMessages] = useState([])

    const openOrClose = ()=>{
        buttonIconChat.current.style.display = 'none';
        modalChat.current.style.display = 'flex';
    }

    const sendMessage = async (msg)=>{
        const output = await new UserServices().getOutPut(`/${msg}`)
        setMessages([...messages, {owner: 'user', message: msg}, {owner: 'cpu', message: output}])
    }

    return(
        <section style={{position: 'absolute'}}>
            <section className={style.openChat}>
                <button ref={buttonIconChat} onClick={openOrClose} ></button>
            </section>
            <section ref={modalChat} style={{display: 'none'}} className={style.main} >
                <div className={style.chat}>
                    <section className={style.background}>
                    {messages &&
                        messages.map((value)=>(
                               <Message owner={value.owner} message={value.message} />
                        ))
                    }
                    </section>
                    <div className={style.menu}>
                        <InputChat setMessage={setMessage} place={'nova mensagem'}/>
                        <button onClick={()=> sendMessage(message)}></button>
                    </div>
                </div>
            </section>
        </section>
    )
}
