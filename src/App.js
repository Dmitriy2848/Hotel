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

                <Route path='contacts' element={ <Contacts /> } />
            </Routes>
        </Router>
    );
}


export default App;
