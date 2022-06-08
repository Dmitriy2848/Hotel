import {useState} from "react";
import header from "../../../assets/media/offers/header.jpg";
import s from "./YouBestBirthday.module.css";
import {NavLink} from "react-router-dom";
import logoDark from "../../../assets/media/logoDark.png";

import img_header from "../../../assets/media/offers/2.jpg";
import img_1 from "../../../assets/media/offers/1.jpg";
import img_2 from "../../../assets/media/offers/4.jpg";

const Header = () => {
    const [ nav, setNav ] = useState(false);

    const handleScroll = () => window.scrollY >= 10 ? setNav( true ) : setNav( false );
    window.addEventListener( 'scroll', handleScroll)
    return (
        <header className={ nav ? `${ s.header + ' ' + s.scrolled }` : `${ s.header }` } >
            <nav className={s.headerTop}>
                <NavLink to='/' className={ s.logo } >
                    <img src={logoDark} alt="logo" />
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
                        <NavLink to='activities' >
                            Мероприятия
                        </NavLink>
                    </li>
                </ul>
            </nav>
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
const YouBestBirthday = () => {
    return (
        <div>
            <Header />
            <main>
                <div className={s.guestVisit}>
                    <div className={s.image}>
                        <img src={img_header} alt=""  />
                    </div>
                    <div className={s.text}>
                        <h1>Ваш лучший День Рождения</h1>
                        <p>Скидка 10% распространяется на размещение в течение трёх дней до и трёх дней после Дня Рождения</p>
                        <p><br/><strong>Условия предложения</strong></p>
                        <ul>
                            <li>Предложение действительно с 11.01.2022 по 25.12.2022</li>
                            <li>Предложение не суммируется с другими предложениями и акциями отеля</li>
                            <li>Скидка предоставляется только при прямом бронировании по телефону +7(495) 402-02-02</li>
                            <li>Могут действовать другие ограничения, данную информацию необходимо уточнять у менеджера по бронированию</li>
                        </ul>
                    </div>
                </div>
                <h2>Другие акции</h2>
                <div className={s.otherOffers}>
                    <div className={s.item}>
                        <NavLink to='/offers/guest-visit' >
                            <img src={img_1} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <h3>Гостевой визит</h3>
                            <p></p>
                            <NavLink to='/offers/guest-visit' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/offers/relax-more-pay-less' >
                            <img src={img_2} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <h3>Отдыхайте больше – платите меньше</h3>
                            <p></p>
                            <NavLink to='/offers/relax-more-pay-less' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
};


export default YouBestBirthday;