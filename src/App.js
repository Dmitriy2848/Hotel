import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {
    Main,
    Contacts,
    Rooms
} from "./pages";
import {
    Offers,
    GuestVisit,
    RelaxMorePayLess,
    YouBestBirthday
} from "./pages/Offers";
import {
    Activities,
    Banquets,
    BusinessEvents,
    Weddings
} from "./pages/Activities";
import {
    Restaurants,
    Forest,
    Gzhel,
    Emerald,
    RussianHut,
    BarLibrary,
    WineVault,
    PhytoBar,
    RoomService
} from "./pages/Restaurants";

import './App.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Main /> } />

                <Route path='rooms' element={ <Rooms /> } />

                <Route path='offers' element={ <Offers /> } />
                <Route path='offers/guest-visit' element={ <GuestVisit /> } />
                <Route path='offers/you-best-birthday' element={ <YouBestBirthday /> } />
                <Route path='offers/relax-more-pay-less' element={ <RelaxMorePayLess /> } />

                <Route path='activities' element={ <Activities /> } />
                <Route path='activities/business-events' element={ <BusinessEvents /> } />
                <Route path='activities/banquets' element={ <Banquets /> } />
                <Route path='activities/weddings' element={ <Weddings /> } />

                <Route path='restaurants' element={ <Restaurants /> } />
                <Route path='restaurants/forest' element={ <Forest /> } />
                <Route path='restaurants/gzhel' element={ <Gzhel /> } />
                <Route path='restaurants/emerald' element={ <Emerald /> } />
                <Route path='restaurants/russian-hut' element={ <RussianHut /> } />
                <Route path='restaurants/bar-library' element={ <BarLibrary /> } />
                <Route path='restaurants/wine-vault' element={ <WineVault /> } />
                <Route path='restaurants/phyto-bar' element={ <PhytoBar /> } />
                <Route path='restaurants/room-service' element={ <RoomService /> } />

                <Route path='contacts' element={ <Contacts /> } />
            </Routes>
        </Router>
    );
}


export default App;
