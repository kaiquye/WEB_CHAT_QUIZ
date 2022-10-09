import {useEffect, useRef} from "react";
import {UserServices} from "../../../services/user.services";


export function NewMessageModal({visibility}) {

    const modalVisibility  = useRef()

    useEffect(()=>{
        if(visibility === 'disable'){
           modalVisibility.current.style.display = 'none';
        }else if(visibility === 'show') {
           modalVisibility.current.style.display = 'flex';
        }
    },[visibility])

    const saveNewMessage = ()=>{
        await = new UserServices().saveNewMessage()
    }

    return (
        <section ref={modalVisibility} >
            <form>
                <label>input</label>
                <input/>
                <label>output</label>
                <input/>
                <button>register</button>
            </form>
        </section>
    )
}