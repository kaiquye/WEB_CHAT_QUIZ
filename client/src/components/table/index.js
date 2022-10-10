import * as React from "react";
import {useState} from "react";
import style from './tableMessage.module.css'

export function Table({rows, update}){
    const [input, setInput] = useState()
    const [output, setOutput] = useState()

    return (
        <section className={style.main}>
            <div className={style.body}>
                <table>
                    <tr>
                        <th>User</th>
                        <th>Input</th>
                        <th>Output</th>
                        <th>Disable</th>
                    </tr>
                    <tbody>
                    {rows &&
                        rows.map((item)=>(
                            <tr>
                                <td><input style={{backgroundColor: 'white'}} disabled={true} value={item.USER.email}  /></td>
                                <td><input placeholder={item.input} onChange={(e)=>setInput(e.target.value)} onBlur={()=> update(item.id, input, output)} /></td>
                                <td><input placeholder={item.output} onChange={(e)=>setOutput(e.target.value)} onBlur={()=> update( item.id, input, output)} /></td>
                                <td style={{backgroundColor: 'white'}} >
                                    <select onClick={(event)=> alert(event.target.value)}>
                                        <option value={'active'} >ativar</option>
                                        <option value={'disable'}>desativar</option>
                                    </select>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </section>
    )
}