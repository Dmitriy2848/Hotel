import {useState} from "react";
import Slider from "react-slick";
import s from "./Rooms.module.css";
import {NavLink} from "react-router-dom";
import logoDark from "../../assets/media/logoDark.png";
import sliderImage from "../../assets/media/rooms/1.jpg"
import {ReactComponent as Children} from "../../assets/media/rooms/children-solid.svg"

const Header = () => {
    const [ nav, setNav ] = useState(false);

    const handleScroll = () => window.scrollY >= 10 ? setNav( true ) : setNav( false );
    window.addEventListener( 'scroll', handleScroll);

    return (
        <header className={ nav ? `${ s.header + ' ' + s.scrolled }` : `${ s.header }` } >
            <nav className={s.headerTop}>
                <NavLink to='/' className={ s.logo } >
                    <img src={ logoDark } alt="logo" />
                </NavLink>
                <ul className={s.headerMenu} >
                    <li className={s.headerMenuItem} >
                        <NavLink to='/' >
                            Главная
                        </NavLink>
                    </li>
                    <li className={s.headerMenuItem} >
                        <NavLink to='/offers' >
                            Акции
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
        </header>
    );
};

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
                    <NavLink to='contacts' >
                        Контакты
                    </NavLink>
                </li>
            </ul>
            <div className={s.copyrightWrapper}>
                <p>© 2022 ООО "Космос"</p>
            </div>
        </footer>
    );
};

const Rooms = () => {
    const settings = {
        className: s.slider,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Header />
            <main>
                <h1 className={s.title}> Выберите номер </h1>
                <div className={s.rooms}>

                    <div className={s.room}>
                        <ul className={s.roomAdvantage}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Slider {...settings}>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                        </Slider>

                        <div className={s.roomText}>
                            <h2>Дуплекс Люкс</h2>
                            <div className={s.roomProperties} >
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>до 4 мест</div>
                                </div>
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>90 кв.м</div>
                                </div>
                            </div>
                            <div className={s.roomCost}>
                                <span>от</span>
                                <span>36125 ₽</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.room}>
                        <ul className={s.roomAdvantage}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Slider {...settings}>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                        </Slider>

                        <div className={s.roomText}>
                            <h2>Дуплекс Люкс</h2>
                            <div className={s.roomProperties} >
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>до 4 мест</div>
                                </div>
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>90 кв.м</div>
                                </div>
                            </div>
                            <div className={s.roomCost}>
                                <span>от</span>
                                <span>36125 ₽</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.room}>
                        <ul className={s.roomAdvantage}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Slider {...settings}>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                        </Slider>

                        <div className={s.roomText}>
                            <h2>Дуплекс Люкс</h2>
                            <div className={s.roomProperties} >
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>до 4 мест</div>
                                </div>
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>90 кв.м</div>
                                </div>
                            </div>
                            <div className={s.roomCost}>
                                <span>от</span>
                                <span>36125 ₽</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.room}>
                        <ul className={s.roomAdvantage}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Slider {...settings}>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                        </Slider>

                        <div className={s.roomText}>
                            <h2>Дуплекс Люкс</h2>
                            <div className={s.roomProperties} >
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>до 4 мест</div>
                                </div>
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>90 кв.м</div>
                                </div>
                            </div>
                            <div className={s.roomCost}>
                                <span>от</span>
                                <span>36125 ₽</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.room}>
                        <ul className={s.roomAdvantage}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Slider {...settings}>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                        </Slider>

                        <div className={s.roomText}>
                            <h2>Дуплекс Люкс</h2>
                            <div className={s.roomProperties} >
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>до 4 мест</div>
                                </div>
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>90 кв.м</div>
                                </div>
                            </div>
                            <div className={s.roomCost}>
                                <span>от</span>
                                <span>36125 ₽</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.room}>
                        <ul className={s.roomAdvantage}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Slider {...settings}>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                        </Slider>

                        <div className={s.roomText}>
                            <h2>Дуплекс Люкс</h2>
                            <div className={s.roomProperties} >
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>до 4 мест</div>
                                </div>
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>90 кв.м</div>
                                </div>
                            </div>
                            <div className={s.roomCost}>
                                <span>от</span>
                                <span>36125 ₽</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.room}>
                        <ul className={s.roomAdvantage}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Slider {...settings}>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                        </Slider>

                        <div className={s.roomText}>
                            <h2>Дуплекс Люкс</h2>
                            <div className={s.roomProperties} >
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>до 4 мест</div>
                                </div>
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>90 кв.м</div>
                                </div>
                            </div>
                            <div className={s.roomCost}>
                                <span>от</span>
                                <span>36125 ₽</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.room}>
                        <ul className={s.roomAdvantage}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Slider {...settings}>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                        </Slider>

                        <div className={s.roomText}>
                            <h2>Дуплекс Люкс</h2>
                            <div className={s.roomProperties} >
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>до 4 мест</div>
                                </div>
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>90 кв.м</div>
                                </div>
                            </div>
                            <div className={s.roomCost}>
                                <span>от</span>
                                <span>36125 ₽</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.room}>
                        <ul className={s.roomAdvantage}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Slider {...settings}>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                            <img src={sliderImage} alt=''/>
                        </Slider>

                        <div className={s.roomText}>
                            <h2>Дуплекс Люкс</h2>
                            <div className={s.roomProperties} >
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>до 4 мест</div>
                                </div>
                                <div className={s.roomProperty} >
                                    <Children />
                                    <div>90 кв.м</div>
                                </div>
                            </div>
                            <div className={s.roomCost}>
                                <span>от</span>
                                <span>36125 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}


export default Rooms;