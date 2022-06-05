import { NavLink } from "react-router-dom";
import {useState} from "react";
import header from "../../assets/media/offers/header.jpg";
import s from "./Activities.module.css";
import logoDark from "../../assets/media/logoDark.png";
import logoLight from "../../assets/media/logo.png";

const Header = () => {
    const [ nav, setNav ] = useState(false);

    const handleScroll = () => window.scrollY >= 10 ? setNav( true ) : setNav( false );
    window.addEventListener( 'scroll', handleScroll)
    return (
        <header className={ nav ? `${ s.header + ' ' + s.scrolled }` : `${ s.header }` } >
            <nav className={s.headerTop}>
                <NavLink to='/' className={ s.logo } >
                    <img src={ nav ? logoDark : logoLight} alt="logo" />
                </NavLink>
                <ul className={s.headerMenu} >
                    <li className={s.headerMenuItem} >
                        <NavLink to='/' >
                            Главная
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='/rooms' >
                            Номера
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='/restaurants' >
                            Рестораны
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='/offers' >
                            Акции
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='/contacts' >
                            Контакты
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.headerContainer}>
                <img src={header} alt="" className={s.headerImage} />
                <div className={s.headerText}>
                    <h1>Мероприятия</h1>
                    <p>Наши новые и современные залы идеально подойдут для проведения мероприятия любого формата и масштаба</p>
                </div>
            </div>
        </header>
    )
}
const Footer = () => {
    return (
        <footer className={s.footer}>
            <ul className={s.footerMenu}>
                <li className={s.footerMenuItem}>
                    <NavLink to='/' >
                        Cosmos
                    </NavLink>
                </li>
                <li className={s.footerMenuItem}>
                    <NavLink to='rooms' >
                        Номера
                    </NavLink>
                </li>
                <li className={s.footerMenuItem}>
                    <NavLink to='offers' >
                        Акции
                    </NavLink>
                    <ul className={s.footerMenuItemSubmenu}>
                        <li>
                            <NavLink to='guest-visit' >
                                Гостевой визит
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='you-best-birthday' >
                                Ваш лучший день рождения
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='relax-more-pay-less' >
                                Отдыхайте больше - платите меньше
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className={s.footerMenuItem}>
                    <NavLink to='activities' >
                        Мероприятия
                    </NavLink>
                    <ul className={s.footerMenuItemSubmenu}>
                        <li>
                            <NavLink to='business-events' >
                                Деловые мероприятия
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='banquets' >
                                Банкеты
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='weddings' >
                                Свадьбы
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className={s.footerMenuItem}>
                    <NavLink to='contacts' >
                        Контакты
                    </NavLink>
                </li>
            </ul>
            <div className={s.copyrightWrapper}>
                <p>© 2022 ООО "Космос"</p>
            </div>
        </footer>
    )
}
const Activities = () => {
    return (
        <div>
            <Header />
            <main className={s.main}>
                <h3>О мероприятиях</h3>
                <p>Новые и современные залы идеально подойдут для проведения мероприятия любого формата и масштаба на высшем уровне, а мы будем рады предложить свою помощь в исполнении любого вашего желания</p>
                <div className={s.list}>
                    <div className={s.item}>
                        <NavLink to='business-events' >
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <h3>Деловые мероприятия</h3>
                            <p>В конгресс-холле можно провести деловое мероприятие, организовать совещания или устроить переговоры с партнёрами</p>
                            <NavLink to='business-events' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='business-events' >
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <h3>Деловые мероприятия</h3>
                            <p>В конгресс-холле можно провести деловое мероприятие, организовать совещания или устроить переговоры с партнёрами</p>
                            <NavLink to='business-events' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='business-events' >
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <h3>Деловые мероприятия</h3>
                            <p>В конгресс-холле можно провести деловое мероприятие, организовать совещания или устроить переговоры с партнёрами</p>
                            <NavLink to='business-events' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </div>
    )
}


export default Activities;