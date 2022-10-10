import * as React from 'react';
import {Table} from "../table";
import {useEffect, useRef, useState} from "react";
import {UserServices} from "../../services/api/user.services";
import {NewMessageModal} from "../modal/newMessage";
import style from './messages.module.css'

export function Messages({visibility_}) {

    const [messages, setMessages] = useState([])
    const [visibilityModal, setVisibilityModal] = useState('disable')

    const modalRef = useRef()

    useEffect( ()=>{
        if(visibility_ === 'disable'){
            modalRef.current.style.display = 'none';
        }else if(visibility_ === 'show') {
            modalRef.current.style.display = 'flex';
        }
        async function loadAllMessages(){
            return getAllMessages()
        }
        loadAllMessages().then((data)=>setMessages(data))
    },[visibility_])

    const getAllMessages = async ()=>{
      return new UserServices().getAllMessages();
    }

    const updateMessage = async (id, input = undefined, output = undefined) =>{
       await new UserServices().updateMessage(id, input, output);
    }

    return (
        <section ref={modalRef} style={{display: 'none'}} className={style.main}>
            <h1 className={style.title}>Messages</h1>
            <div className={style.modal}>
                <div className={style.modalBack}>
                    <NewMessageModal visibility={visibilityModal} />
                </div>
            </div>
            <div className={style.allMessages}>
                <Table rows={messages}  update={updateMessage} />
                <button onClick={ async ()=> setVisibilityModal('show')}>
                    New Message
                </button>
            </div>
        </section>
    );
}
