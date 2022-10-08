import style from './input.module.css'


export function InputChat({place, setMessage}) {
    return (
        <input className={style.input}  placeholder={place} onChange={(e)=>setMessage(e.target.value)}/>
    )
}