import {NavLink} from "react-router-dom";
import {useState} from "react";
import s from "./Offers.module.css";
import logoDark from "../../assets/media/logoDark.png";
import logoLight from "../../assets/media/logo.png";
import header from "../../assets/media/offers/header.jpg"

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
                    <h1>Акции</h1>
                    <p>Наслаждайтесь отдыхом по максимуму</p>
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

const Offers = () => {
    return (
        <div>
            <Header />
            <main className={s.offers}>
                <div className={s.offer} >
                    <img src={header} alt="" className={s.offerImage} />
                    <NavLink to='guest-visit' className={s.offersText} >
                        <h3>Подарочный сертификат</h3>
                        <span>Подробнее</span>
                    </NavLink>
                </div>
                <div className={s.offer} >
                    <img src={header} alt="" className={s.offerImage} />
                    <NavLink to='banquets' className={s.offersText} >
                        <h3>Подарочный сертификат</h3>
                        <span>Подробнее</span>
                    </NavLink>
                </div>
                <div className={s.offer} >
                    <img src={header} alt="" className={s.offerImage} />
                    <NavLink to='weddings' className={s.offersText} >
                        <h3>Подарочный сертификат</h3>
                        <span>Подробнее</span>
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}


export default Offers;