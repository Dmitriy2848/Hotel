import { NavLink } from "react-router-dom";
import {useState} from "react";
import header from "../../assets/media/offers/header.jpg";
import s from "./Restaurants.module.css";
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
                    <h1>Рестораны</h1>
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
const Restaurants = () => {
    return (
        <div>
            <Header />
            <main>
                <div className={s.list}>
                    <div className={s.item}>
                        <NavLink to='forest' className={s.itemImage}>
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='forest' >
                                <h3>Ресторан Forrest</h3>
                            </NavLink>
                            <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p><p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p>
                            <NavLink to='forest' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='forest' className={s.itemImage}>
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='forest' >
                                <h3>Ресторан Forrest</h3>
                            </NavLink>
                            <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p><p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p>
                            <NavLink to='forest' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='forest' className={s.itemImage}>
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='forest' >
                                <h3>Ресторан Forrest</h3>
                            </NavLink>
                            <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p><p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p>
                            <NavLink to='forest' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='forest' className={s.itemImage}>
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='forest' >
                                <h3>Ресторан Forrest</h3>
                            </NavLink>
                            <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p><p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p>
                            <NavLink to='forest' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='forest' className={s.itemImage}>
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='forest' >
                                <h3>Ресторан Forrest</h3>
                            </NavLink>
                            <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p><p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p>
                            <NavLink to='forest' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='forest' className={s.itemImage}>
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='forest' >
                                <h3>Ресторан Forrest</h3>
                            </NavLink>
                            <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p><p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p>
                            <NavLink to='forest' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='forest' className={s.itemImage}>
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='forest' >
                                <h3>Ресторан Forrest</h3>
                            </NavLink>
                            <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p><p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p>
                            <NavLink to='forest' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='forest' className={s.itemImage}>
                            <img src={header} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='forest' >
                                <h3>Ресторан Forrest</h3>
                            </NavLink>
                            <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p><p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском стиле является органичным продолжением окружающих первозданных пейзажей</p>
                            <NavLink to='forest' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            {/*<NavLink to='forest' >*/}
            {/*    Ресторан Форест*/}
            {/*</NavLink>*/}
            {/*<NavLink to='gzhel' >*/}
            {/*    Ресторан Гжель*/}
            {/*</NavLink>*/}
            {/*<NavLink to='emerald' >*/}
            {/*    Ресторан Эмеральд*/}
            {/*</NavLink>*/}
            {/*<NavLink to='russian-hut' >*/}
            {/*    Русская изба Емеля*/}
            {/*</NavLink>*/}
            {/*<NavLink to='bar-library' >*/}
            {/*    Бар Библиотека*/}
            {/*</NavLink>*/}
            {/*<NavLink to='wine-vault' >*/}
            {/*    Винный погреб*/}
            {/*</NavLink>*/}
            {/*<NavLink to='phyto-bar' >*/}
            {/*    Фито-бар*/}
            {/*</NavLink>*/}
            {/*<NavLink to='room-service' >*/}
            {/*    Обслуживание в номерах*/}
            {/*</NavLink>*/}

        </div>
    )
}


export default Restaurants;