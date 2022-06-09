import {useState} from "react";
import header from "../../../assets/media/restaurants/8.jpg";
import s from "./RoomService.module.css";
import {NavLink} from "react-router-dom";
import logoDark from "../../../assets/media/logoDark.png";
import logoLight from "../../../assets/media/logo.png";
import {ReactComponent as Kitchen} from "../../../assets/media/restaurants/kitchen-set-solid.svg";
import {ReactComponent as Clock} from "../../../assets/media/benefits/clock-regular.svg";

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
                        <NavLink to='/offers' >
                            Акции
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='/activities' >
                            Мероприятия
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
                    <h1>Обслуживание в номерах</h1>
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
                    <NavLink to='/offers' >
                        Акции
                    </NavLink>
                    <ul className={s.footerMenuItemSubmenu}>
                        <li>
                            <NavLink to='/offers/guest-visit' >
                                Гостевой визит
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/offers/you-best-birthday' >
                                Ваш лучший день рождения
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/offers/relax-more-pay-less' >
                                Отдыхайте больше - платите меньше
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className={s.footerMenuItem}>
                    <NavLink to='/activities' >
                        Мероприятия
                    </NavLink>
                    <ul className={s.footerMenuItemSubmenu}>
                        <li>
                            <NavLink to='/activities/business-events' >
                                Деловые мероприятия
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/activities/banquets' >
                                Банкеты
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/activities/weddings' >
                                Свадьбы
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className={s.footerMenuItem}>
                    <NavLink to='/contacts' >
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

const RoomService = () => {
    return (
        <div>
            <Header />
            <main className={s.main}>
                <h2>О ресторане</h2>
                <div className={s.description}>
                    <p>Вам не нужно выходить из номера за ужином или чашечкой кофе. Просто закажите блюда из меню по телефону, и мы доставим их в номер.</p>
                </div>
                <div className={s.params}>
                    <div className={s.param}>
                        <Clock />
                        <p>00:00- 24:00</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}


export default RoomService;