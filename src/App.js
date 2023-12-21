import {
    useLocation,
    Routes,
    Route,
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import WishlistPage from './pages/WishlistPage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import CustomRouter from './components/CustomRouter';
import OffSeasonLandingPag from './pages/OffSeasonLandingPage';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<OffSeasonLandingPag />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
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
