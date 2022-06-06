import {useState} from "react";
import header from "../../../assets/media/restaurants/3.jpg";
import s from "./Gzhel.module.css";
import {NavLink} from "react-router-dom";
import logoDark from "../../../assets/media/logoDark.png";
import logoLight from "../../../assets/media/logo.png";
import {ReactComponent as Kitchen} from "../../../assets/media/restaurants/kitchen-set-solid.svg";
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
                    <h1>Ресторан Forrest</h1>
                    <p>Побалуйте себя изысканными блюдами авторской кухни в Forrest или гастрономическим ужином в ресторане Эмеральд, наблюдая за бескрайней красотой леса</p>
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

const Gzhel = () => {
    return (
        <div>
            <Header />
            <main className={s.main}>
                <h2>О ресторане</h2>
                <div className={s.description}>
                    <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p>
                    <p>Для бронирования столика, пожалуйста, свяжитесь с нами по телефону</p>
                </div>
                <div className={s.params}>
                    <div className={s.param}>
                        <Kitchen />
                        <p>авторская, европейская</p>
                    </div>
                    <div className={s.param}>
                        <Kitchen />
                        <p>12:00- 23:00</p>
                    </div>
                    <div className={s.param}>
                        <Kitchen />
                        <p>08:00- 12:00</p>
                    </div>
                    <div className={s.param}>
                        <Kitchen />
                        <p>135 человек</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}


export default Gzhel;