import { NavLink } from "react-router-dom";
import {useState} from "react";
import header from '../../assets/media/restaurants/3.jpg';
import s from "./Restaurants.module.css";
import logoDark from "../../assets/media/logoDark.png";
import logoLight from "../../assets/media/logo.png";

import img_1 from '../../assets/media/restaurants/1.jpg';
import img_2 from '../../assets/media/restaurants/2.jpg';
import img_3 from '../../assets/media/restaurants/3.jpg';
import img_4 from '../../assets/media/restaurants/4.jpg';
import img_5 from '../../assets/media/restaurants/5.jpg';
import img_6 from '../../assets/media/restaurants/6.jpg';
import img_7 from '../../assets/media/restaurants/7.jpg';
import img_8 from '../../assets/media/restaurants/8.jpg';

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
                            <img src={img_1} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='forest' >
                                <h3>Ресторан Forrest</h3>
                            </NavLink>
                            <p>Ресторан с верандой и панорамными видами. Двухэтажное здание из дерева в скандинавском 
                                стиле является органичным продолжением окружающих первозданных пейзажей</p>
                            <NavLink to='forest' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='gzhel' className={s.itemImage}>
                            <img src={img_2} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='gzhel' >
                                <h3>Ресторан Гжель</h3>
                            </NavLink>
                            <p>Изящество и самобытность декоративно-прикладного искусства гжель подчеркнута в 
                                сине-белых оттенках декоративных элементов. Традиционные узоры, присущие стилю, 
                                особая сервировка стола и посуда с традиционной гжельской росписью, создают атмосферу
                                 необычайного домашнего уюта</p>
                            <NavLink to='gzhel' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='emerald' className={s.itemImage}>
                            <img src={img_3} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='emerald' >
                                <h3>Ресторан Эмеральд</h3>
                            </NavLink>
                            <p>Каждое блюдо – это результат сочетания гастрономических экспериментов и бережного 
                                отношения. Основная идея интерьера – создание современной, непринуждённой и спокойной 
                                атмосферы, которая будет привлекать своим очарованием и индивидуальным стилем. 
                                Панорамные окна ресторана откроют перед вами всю красоту и изящность леса</p>
                            <NavLink to='emerald' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='russian-hut' className={s.itemImage}>
                            <img src={img_4} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='russian-hut' >
                                <h3>Русская изба Емеля</h3>
                            </NavLink>
                            <p>Какой предмет интерьера может стать символом русской кухни? Русская печь. В нашей избе 
                                она занимает особое место, наполняя его неповторимой индивидуальностью, создавая теплую 
                                атмосферу загородной жизни</p>
                            <NavLink to='russian-hut' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='bar-library' className={s.itemImage}>
                            <img src={img_5} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='bar-library' >
                                <h3>Бар Библиотека</h3>
                            </NavLink>
                            <p>Теперь вы можете отдохнуть, перекусить, выпить чашечку кофе или чего покрепче 
                                непосредственно в основном корпусе гостиницы.</p>
                            <p>Высокие потолки бара Библиотека дарят 
                                присутствие свободного пространства, мебель и предметы интерьера изящно гармонируют с 
                                общей обстановкой бара, из витражных окон открывается вид на пейзаж хвойного леса.</p>
                            <p>В меню представлены блюда европейской кухни от классических и до настоящих авторских 
                                шедевров. Барная карта здесь состоит из классических и авторских коктейлей, вина и 
                                коллекции крепкого алкоголя</p>
                            <NavLink to='bar-library' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='wine-vault' className={s.itemImage}>
                            <img src={img_6} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='wine-vault' >
                                <h3>Винный погреб</h3>
                            </NavLink>
                            <p>В винном погребе собрано более 100 сортов благородных вин от лучших виноделов. Ждем вас 
                                продегустировать нашу эксклюзивную коллекцию, а также попробовать элитные сигары в 
                                аутентичной атмосфере сигарной комнаты</p>
                            <NavLink to='wine-vault' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='phyto-bar' className={s.itemImage}>
                            <img src={img_7} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='phyto-bar' >
                                <h3>Фито-бар</h3>
                            </NavLink>
                            <p>Попробуйте напитки, которые помогут активизировать работу иммунной системы, повысить 
                                работоспособность и снять напряжение после физических нагрузок, а внимательный персонал 
                                окружит вас заботой</p>
                            <NavLink to='phyto-bar' >
                                <span>подробнее</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.item}>
                        <NavLink to='room-service' className={s.itemImage}>
                            <img src={img_8} alt=""/>
                        </NavLink>
                        <div className={s.itemText}>
                            <NavLink to='room-service' >
                                <h3>Обслуживание в номерах</h3>
                            </NavLink>
                            <p>Вам не нужно выходить из номера за ужином или чашечкой кофе. Просто закажите блюда из 
                                меню по телефону, и мы доставим их в номер.</p>
                            <p>В любое время вам доступны напитки и самые лучшие блюда от наших Шеф-поваров.</p>
                            <NavLink to='room-service' >
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