import style from './message.module.css'


export function Message({owner, message}){
    return(
        <section className={style.message}>
            {
                    owner === 'user' ?
                    <div className={style.user}>
                        {message}
                    </div> :
                    <div className={style.cpu}>
                        {message}
                    </div>
            }
        </section>
    )
}