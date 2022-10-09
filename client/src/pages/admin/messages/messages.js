import * as React from 'react';
import {Table} from "../../../components/table";
import {useEffect, useState} from "react";
import {UserServices} from "../../../services/api/user.services";
import {NewMessageModal} from "../../../components/modal/newMessage";

export function Messages() {

    const [messages, setMessages] = useState([])
    const [visibility, setVisibilityModal] = useState('disable')

    useEffect( ()=>{
        async function loadAllMessages(){
            return getAllMessages()
        }
        loadAllMessages().then((data)=>setMessages(data))
    },[])

    const getAllMessages = async ()=>{
      return new UserServices().getAllMessages();
    }

    const updateMessage = async (id, input = undefined, output = undefined) =>{
       await new UserServices().updateMessage(id, input, output);
    }

    return (
        <section>
            <Table rows={messages}  update={updateMessage} />
            <button onClick={ async ()=> setVisibilityModal('show')}>
                new
            </button>
            <NewMessageModal visibility={visibility} />
        </section>
    );
}
