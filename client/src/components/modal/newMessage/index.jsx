import {useEffect, useRef, useState} from "react";
import {UserServices} from "../../../services/api/user.services";
import style from './modal.module.css'
import * as React from "react";

export function NewMessageModal({visibility}) {

    const modalVisibility  = useRef()
    const [input, setInput] = useState()
    const [output, setOutput] = useState()

    useEffect(()=>{
        if(visibility === 'disable'){
           modalVisibility.current.style.display = 'none';
        }else if(visibility === 'show') {
           modalVisibility.current.style.display = 'flex';
        }
    },[visibility])

    const saveNewMessage = async (event)=>{
        event.preventDefault()
        await new UserServices().saveNewMessage(input, output)
        window.location.reload()
    }

    return (
        <section style={{position: 'absolute'}} className={style.main} ref={modalVisibility} >
            <form onSubmit={ async (event)=> saveNewMessage(event)}>
                <label>Input</label>
                <input placeholder={'input'} onChange={(e)=> setInput((e.target.value))} />
                <label>Output</label>
                <input placeholder={'output'} onChange={(e)=> setOutput(e.target.value)} />
                <div>
                    <button className={style.register}>
                        REGISTER
                    </button>
                    <button className={style.cancel}>
                        cancel
                    </button>
                </div>
            </form>
        </section>
    )
}