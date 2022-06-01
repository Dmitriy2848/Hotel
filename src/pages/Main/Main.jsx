import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavLink to='rooms' >
                Номера
            </NavLink>
            <NavLink to='offers' >
                Акции
            </NavLink>
            <NavLink to='activities' >
                Мероприятия
            </NavLink>
            <NavLink to='contacts' >
                Контакты
            </NavLink>
        </div>
    )
}


export default Main;