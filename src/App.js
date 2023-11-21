import { useLocation, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import WishlistPage from './pages/WishlistPage';
import DropOffPage from './pages/DropOffPage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import CustomRouter from './components/CustomRouter';
import SponsorPage from './pages/SponsorPage';
import NotFoundPage from './pages/NotFoundPage';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/drop-off" element={<DropOffPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/sponsors" element={<SponsorPage />} />
                <Route path='*' component={<NotFoundPage />} />
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
