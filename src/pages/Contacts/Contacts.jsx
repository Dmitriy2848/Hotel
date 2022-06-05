import {useState} from "react";
import header from "../../assets/media/offers/header.jpg";
import s from "./Contacts.module.css";
import {NavLink} from "react-router-dom";
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
                        <NavLink to='activities' >
                            Мероприятия
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.headerContainer}>
                <div className={s.headerText}>
                    <h1>Контакты</h1>
                    <p>Если у вас появились вопросы - свяжитесь с нами!</p>
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

const Contacts = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Имя:' + name);
        console.log('Номер:' + number);
        console.log('Почта:' + email);
        console.log('Сообщение:' + message);
        setName('')
        setNumber('');
        setEmail('');
        setMessage('');
    }
    return (
        <div>
            <Header />
            <main>
                <form className={s.form} onSubmit={ e => handleSubmit(e)}>
                    <div className={s.formFirstString}>
                        <input  type="text"
                                placeholder='Имя'
                                value={name}
                                onChange={ e => setName(e.target.value) } />
                        <input  type="text"
                                placeholder='Номер'
                                value={number}
                                onChange={ e => setNumber(e.target.value) } />
                    </div>

                    <input  type="email"
                            placeholder='Почта'
                            value={email}
                            onChange={ e => setEmail(e.target.value) } />
                    <input  type="text"
                            placeholder='Сообщение'
                            value={message}
                            onChange={ e => setMessage(e.target.value) } />

                    <button type="submit" className={s.submit} >
                        Отправить
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    )
}


export default Contacts;