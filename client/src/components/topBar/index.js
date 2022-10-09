import {Link} from "react-router-dom";
import css from './topBar.module.css'

export function TopBar() {

    return (
        <section className={css.body}>
            <div className={css.subBody}>
                <div className={css.logo}>
                    <h2>Web chat</h2>
                </div>
                <div className={css.links}>
                    <Link to={'/table'}>Messages</Link>
                    <Link to={'/table'}>About</Link>
                </div>
            </div>
        </section>
    )
}