import { NavLink } from "react-router-dom";

const Activities = () => {
    return (
        <div>
            <NavLink to='business-events' >
                Деловые мероприятия
            </NavLink>
            <NavLink to='banquets' >
                Банкеты
            </NavLink>
            <NavLink to='weddings' >
                Свадьбы
            </NavLink>
        </div>
    )
}


export default Activities;