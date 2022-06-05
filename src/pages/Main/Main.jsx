import {useState} from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import forest from "../../assets/media/restaurants/1.jpg";
import {ReactComponent as Kitchen} from "../../assets/media/restaurants/kitchen-set-solid.svg";
import {ReactComponent as Clock} from "../../assets/media/restaurants/clock-regular.svg";
import {ReactComponent as Location} from "../../assets/media/benefits/location-pin-solid.svg";
import logoLight from "../../assets/media/logo.png"
import logoDark from "../../assets/media/logoDark.png"
import headerVideo from  "../../assets/media/main.mp4"
import s from "./Main.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                        <NavLink to='rooms' >
                            Номера
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='offers' >
                            Акции
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='restaurants' >
                            Рестораны
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='activities' >
                            Мероприятия
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='contacts' >
                            Контакты
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.headerContainer}>
                <video className={s.headerVideo} src={headerVideo} autoPlay loop muted playsInline />
                <div className={s.headerText}>
                    <h1>Cosmos Collection Izumrudny Les</h1>
                    <p>Насладитесь природой в условиях истинного комфорта</p>
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

const Main = () => {
    const settingsOne = {
        className: s.restaurantsSlider,
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    const settingsTwo = {
        className: s.activitiesSlider,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <div>
            <Header />
            <main>

                <div className={s.aboutUs}>
                    <h2>О нас</h2>
                    <p> Cosmos Collection Izumrudny Les – идеальное место для того, чтобы подарить себе возможность отдохнуть среди природы,
                        организовать торжество или провести выходные в дружеской компании. Отель прекрасно расположился в живописном уголке
                        московской области среди вековых лесов. На просторной территории в 220 Га с лесопарком к услугам гостей: 6 уютных
                        коттеджей в экостиле с верандами, гостиница на 62 номера, 19 гостевых домов на 38 номеров, ресторан с верандой
                        на берегу озера, SPA-центр с бассейном и баней, банный комплекс, спортивный комплекс с термальной зоной, тренажёрным
                        залом и бассейном, рестораны русской кухни, собственная конюшня, прокат, детский клуб и детские площадки.</p>
                </div>
                <div className={s.offers}>
                    <h2>
                        <NavLink to='offers' >Акции</NavLink>
                    </h2>
                    <div className={s.offersList} >
                        <NavLink to='offers/guest-visit' className={s.offersItem} >
                            <div className={s.offersText} >
                                <h3>Гостевой визит</h3>
                                <span>Подробнее</span>
                            </div>
                        </NavLink>
                        <NavLink to='offers/you-best-birthday' className={s.offersItem} >
                            <div className={s.offersText} >
                                <h3>Ваш лучший День Рождения</h3>
                                <span>Подробнее</span>
                            </div>
                        </NavLink>
                        <NavLink to='offers/relax-more-pay-less' className={s.offersItem} >
                            <div className={s.offersText} >
                                <h3>Подарочный сертификат</h3>
                                <span>Подробнее</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className={s.restaurants}>
                    <h2>
                        <NavLink to='restaurants'>Рестораны</NavLink>
                    </h2>
                    <Slider {...settingsOne}>
                        <div className={s.slide} >
                            <div className={s.slideImage}>
                                <img src={forest} alt=""/>
                            </div>
                            <div className={s.slideInfo} >
                                <h3>
                                    <NavLink to='restaurants/forest' >
                                        Ресторан Forrest
                                    </NavLink>
                                </h3>
                                <NavLink to='restaurants/forest' >
                                    подробнее
                                </NavLink>
                                <div className={s.itemContainer}>
                                    <div className={s.itemBlock}>
                                        <Kitchen />
                                        <p>авторская, европейская</p>
                                    </div>
                                    <div className={s.itemBlock}>
                                        <Clock />
                                        <p>12:00-23:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.slide} >
                            <div className={s.slideImage}>
                                <img src={forest} alt=""/>
                            </div>
                            <div className={s.slideInfo} >
                                <h3>
                                    <NavLink to='restaurants/forest' >
                                        Ресторан Forrest
                                    </NavLink>
                                </h3>
                                <NavLink to='restaurants/forest' >
                                    подробнее
                                </NavLink>
                                <div className={s.itemContainer}>
                                    <div className={s.itemBlock}>
                                        <Kitchen />
                                        <p>авторская, европейская</p>
                                    </div>
                                    <div className={s.itemBlock}>
                                        <Clock />
                                        <p>12:00-23:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.slide} >
                            <div className={s.slideImage}>
                                <img src={forest} alt=""/>
                            </div>
                            <div className={s.slideInfo} >
                                <h3>
                                    <NavLink to='restaurants/forest' >
                                        Ресторан Forrest
                                    </NavLink>
                                </h3>
                                <NavLink to='restaurants/forest' >
                                    подробнее
                                </NavLink>
                                <div className={s.itemContainer}>
                                    <div className={s.itemBlock}>
                                        <Kitchen />
                                        <p>авторская, европейская</p>
                                    </div>
                                    <div className={s.itemBlock}>
                                        <Clock />
                                        <p>12:00-23:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.slide} >
                            <div className={s.slideImage}>
                                <img src={forest} alt=""/>
                            </div>
                            <div className={s.slideInfo} >
                                <h3>
                                    <NavLink to='restaurants/forest' >
                                        Ресторан Forrest
                                    </NavLink>
                                </h3>
                                <NavLink to='restaurants/forest' >
                                    подробнее
                                </NavLink>
                                <div className={s.itemContainer}>
                                    <div className={s.itemBlock}>
                                        <Kitchen />
                                        <p>авторская, европейская</p>
                                    </div>
                                    <div className={s.itemBlock}>
                                        <Clock />
                                        <p>12:00-23:00</p>
                                    </div>
                                </div>
                            </div>
                        </div><div className={s.slide} >
                        <div className={s.slideImage}>
                            <img src={forest} alt=""/>
                        </div>
                        <div className={s.slideInfo} >
                            <h3>
                                <NavLink to='restaurants/forest' >
                                    Ресторан Forrest
                                </NavLink>
                            </h3>
                            <NavLink to='restaurants/forest' >
                                подробнее
                            </NavLink>
                            <div className={s.itemContainer}>
                                <div className={s.itemBlock}>
                                    <Kitchen />
                                    <p>авторская, европейская</p>
                                </div>
                                <div className={s.itemBlock}>
                                    <Clock />
                                    <p>12:00-23:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className={s.slide} >
                            <div className={s.slideImage}>
                                <img src={forest} alt=""/>
                            </div>
                            <div className={s.slideInfo} >
                                <h3>
                                    <NavLink to='restaurants/forest' >
                                        Ресторан Forrest
                                    </NavLink>
                                </h3>
                                <NavLink to='restaurants/forest' >
                                    подробнее
                                </NavLink>
                                <div className={s.itemContainer}>
                                    <div className={s.itemBlock}>
                                        <Kitchen />
                                        <p>авторская, европейская</p>
                                    </div>
                                    <div className={s.itemBlock}>
                                        <Clock />
                                        <p>12:00-23:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.slide} >
                            <div className={s.slideImage}>
                                <img src={forest} alt=""/>
                            </div>
                            <div className={s.slideInfo} >
                                <h3>
                                    <NavLink to='restaurants/forest' >
                                        Ресторан Forrest
                                    </NavLink>
                                </h3>
                                <NavLink to='restaurants/forest' >
                                    подробнее
                                </NavLink>
                                <div className={s.itemContainer}>
                                    <div className={s.itemBlock}>
                                        <Kitchen />
                                        <p>авторская, европейская</p>
                                    </div>
                                    <div className={s.itemBlock}>
                                        <Clock />
                                        <p>12:00-23:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className={s.activities}>
                    <h2>
                        <NavLink to='activities'>Мероприятия</NavLink>
                    </h2>
                    <Slider {...settingsTwo}>
                        <div className={s.slide} >
                            <div className={s.slideImage}>
                                <img src={forest} alt=""/>
                            </div>
                            <div className={s.slideInfo} >
                                <h3>
                                    <NavLink to='activities/business-events' >
                                        Деловые мероприятия
                                    </NavLink>
                                </h3>
                                <p>В конгресс-холле можно провести деловое мероприятие, организовать совещания или устроить переговоры с партнёрами</p>
                                <NavLink to='activities/business-events' >
                                    подробнее
                                </NavLink>
                            </div>
                        </div>
                        <div className={s.slide} >
                            <div className={s.slideImage}>
                                <img src={forest} alt=""/>
                            </div>
                            <div className={s.slideInfo} >
                                <h3>
                                    <NavLink to='activities/banquets' >
                                        Банкеты
                                    </NavLink>
                                </h3>
                                <p>Для праздничных мероприятий вы можете использовать любые банкетные залы отеля</p>
                                <NavLink to='activities/banquets' >
                                    подробнее
                                </NavLink>
                            </div>
                        </div>
                        <div className={s.slide} >
                            <div className={s.slideImage}>
                                <img src={forest} alt=""/>
                            </div>
                            <div className={s.slideInfo} >
                                <h3>
                                    <NavLink to='activities/weddings' >
                                        Свадьбы
                                    </NavLink>
                                </h3>
                                <p>Выберите одну из наших площадок, и ваш праздник впечатлит гостей надолго!</p>
                                <NavLink to='activities/weddings' >
                                    подробнее
                                </NavLink>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className={s.benefits}>
                    <h2>Наши преимущества</h2>
                    <div className={s.benefitsList}>
                        <div className={s.benefitsItem}>
                            <Location />
                            <h3>Удобное расположение</h3>
                        </div>
                        <div className={s.benefitsItem}>
                            <Location />
                            <h3>Удобное расположение</h3>
                        </div>
                        <div className={s.benefitsItem}>
                            <Location />
                            <h3>Удобное расположение</h3>
                        </div>
                        <div className={s.benefitsItem}>
                            <Location />
                            <h3>Удобное расположение</h3>
                        </div>
                        <div className={s.benefitsItem}>
                            <Location />
                            <h3>Удобное расположение</h3>
                        </div>
                        <div className={s.benefitsItem}>
                            <Location />
                            <h3>Удобное расположение</h3>
                        </div>
                        <div className={s.benefitsItem}>
                            <Location />
                            <h3>Удобное расположение</h3>
                        </div>
                        <div className={s.benefitsItem}>
                            <Location />
                            <h3>Удобное расположение</h3>
                        </div>
                        <div className={s.benefitsItem}>
                            <Location />
                            <h3>Удобное расположение</h3>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}


export default Main;