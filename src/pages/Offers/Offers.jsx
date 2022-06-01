import {NavLink} from "react-router-dom";

const Offers = () => {
    return (
        <div>
            <NavLink to='guest-visit' >
                Гостевой визит
            </NavLink>
            <NavLink to='you-best-birthday' >
                Ваш лучший день рождения
            </NavLink>
            <NavLink to='relax-more-pay-less' >
                Отдыхайте больше - платите меньше
            </NavLink>
        </div>
    )
}


export default Offers;