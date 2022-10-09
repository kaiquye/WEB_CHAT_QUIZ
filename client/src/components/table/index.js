import * as React from "react";
import {useState} from "react";


export function Table({rows, status, update}){
    const [input, setInput] = useState()
    const [output, setOutput] = useState()

    return (
        <section>
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
                                   <td><input disabled={true} value={item.USER.email}  /></td>
                                   <td><input placeholder={item.input} onChange={(e)=>setInput(e.target.value)} onBlur={()=> update(item.id, input, output)} /></td>
                                   <td><input placeholder={item.output} onChange={(e)=>setOutput(e.target.value)} onBlur={()=> update( item.id, input, output)} /></td>
                                   <td>
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
        </section>
    )
}