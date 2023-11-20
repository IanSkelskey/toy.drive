import {
    useLocation,
    Routes,
    Route,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import WishlistPage from './pages/WishlistPage';
import DropOffPage from './pages/DropOffPage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import CustomRouter from './components/CustomRouter';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/toy.drive/" element={<LandingPage />} />
                <Route path="/toy.drive/about" element={<AboutPage />} />
                <Route path="/toy.drive/drop-off" element={<DropOffPage />} />
                <Route path="/toy.drive/wishlist" element={<WishlistPage />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <CustomRouter>
            <div className="content">
                <Header />
                <NavBar />
                <AnimatedRoutes />
                <Footer />
            </div>
        </CustomRouter>
    );
}

export default App;
