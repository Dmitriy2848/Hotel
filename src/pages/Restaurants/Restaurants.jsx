import { NavLink } from "react-router-dom";


const Restaurants = () => {
    return (
        <div>
            <NavLink to='forest' >
                Ресторан Форест
            </NavLink>
            <NavLink to='gzhel' >
                Ресторан Гжель
            </NavLink>
            <NavLink to='emerald' >
                Ресторан Эмеральд
            </NavLink>
            <NavLink to='russian-hut' >
                Русская изба Емеля
            </NavLink>
            <NavLink to='bar-library' >
                Бар Библиотека
            </NavLink>
            <NavLink to='wine-vault' >
                Винный погреб
            </NavLink>
            <NavLink to='phyto-bar' >
                Фито-бар
            </NavLink>
            <NavLink to='room-service' >
                Обслуживание в номерах
            </NavLink>
        </div>
    )
}


export default Restaurants;