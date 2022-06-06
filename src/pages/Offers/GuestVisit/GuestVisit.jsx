import {useState} from "react";
import header from "../../../assets/media/offers/header.jpg";
import s from "./GuestVisit.module.css";
import {NavLink} from "react-router-dom";
import logoDark from "../../../assets/media/logoDark.png";
import img_business_events from "../../../assets/media/events/1.jpg";
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
const GuestVisit = () => {
    return (
        <div>
            <Header />
            <main>
                <div className={s.guestVisit}>
                    <div className={s.image}>
                        <img src={img_business_events} alt=""  />
                    </div>
                    <div className={s.text}>
                        <h1>Гостевой визит</h1>
                        <p><br/><strong>Карта гостя действует с 9:00 до 21:00</strong></p>
                        <p><br/><strong>Стоимость посещения в будние дни:</strong></p>
                        <p>Взрослые и дети старше 12 лет – 3500 руб.</p>
                        <p>Дети до 12 лет – 1500 руб.</p>
                        <p>Дети до 3 лет бесплатно</p>
                        <p><br/><strong>Стоимость посещения в выходные дни:</strong></p>
                        <p>Взрослые и дети старше 12 лет – 5000 руб.</p>
                        <p>Дети до 12 лет – 2500 руб.</p>
                        <p>Дети до 3 лет бесплатно</p>
                        <p><br/><strong>В стоимость карты гостя входит:</strong></p>
                        <ul>
                            <li>посещение спортивного комплекса «Аквамарин» с бассейном 25 м., детским бассейном и джакузи, термальной зоной (хамам, финская сауна, финская арома- сауна, соляная комната) и тренажёрным залом</li>
                            <li>посещение всех детских площадок комплекса и прогулочных зон</li>
                            <li>паркинг</li>
                        </ul>
                    </div>
                </div>
                <h2>Другие акции</h2>
                <div className={s.otherOffers}>
                    <div className={s.item}>
                        <NavLink to='business-events' >
                            <img src={img_business_events} alt=""/>
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
                            <img src={img_business_events} alt=""/>
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


export default GuestVisit;