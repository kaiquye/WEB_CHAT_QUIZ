import {useEffect, useRef, useState} from "react";
import {UserServices} from "../../../services/api/user.services";


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
        alert(output)
        await new UserServices().saveNewMessage(input, output)
    }

    return (
        <section ref={modalVisibility} >
            <form onSubmit={ async (event)=> saveNewMessage(event)}>
                <label>input</label>
                <input placeholder={'input'} onChange={(e)=> setInput((e.target.value))} />
                <label>output</label>
                <input placeholder={'output'} onChange={(e)=> setOutput(e.target.value)} />
                <button>
                    register
                </button>
            </form>
        </section>
    )
}