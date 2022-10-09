import style from './home.module.css'
import {Chat} from "../../components/chat/chat";

function Home(){
    return (
        <section className={style.main}>

            <div className={style.banner}>
                Welcome, test site for web chat
            </div>

            <div className={style.chat}>
                <Chat />
            </div>
        </section>
    )
}

export default Home
