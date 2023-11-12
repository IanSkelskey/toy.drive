import banner from "./assets/banner.svg";
import ccmcBanner from "./assets/ccmc-banner-logo.svg";
import ProgressBar from "./components/ProgressBar";

import { BrowserRouter as Router, Link, useLocation, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import WishlistPage from "./components/WishlistPage";


function AnimatedRoutes() {
  const location = useLocation();

  return (

    <Routes location={location} key={location.pathname}>
      <Route path="/toy.drive/" element={<LandingPage />} />
      <Route path="/toy.drive/about" element={<AboutPage />} />
      <Route path="/toy.drive/wishlist" element={<WishlistPage />} />
    </Routes>

  );
}

function App() {

  const cashGoal = 2000;
  const toyGoal = 300;

  const cashProgress = 100;
  const toyProgress = 4;

  return (
    <Router>
      <div className="content">
        <header className="w-full max-w-lg flex flex-col items-center pb-2">
          <img className="w-1/2" src={ccmcBanner} alt="Connecticut Children's Medical Center Logo" />
          <img src={banner} alt="Banner" className="w-full mb-2" />
          <div className="w-full flex p-2 text-xl space-x-5 bg-white bg-opacity-60 rounded-lg mb-4">
            <ProgressBar progress={cashProgress} goal={cashGoal} title='Cash Goal' emoji='💰' />
            <ProgressBar progress={toyProgress} goal={toyGoal} title='Toy Goal' emoji='🎁' />
          </div>
        </header>


        <nav className="sticky border-2 border-red-900 border-opacity-20 top-0 z-30 w-full h-14 mb-2 rounded-full bg-candy-cane-pattern">
          <div class="bg-brand-red border-2 border-red-900 border-opacity-20 absolute top-2 bottom-2 left-2 right-2 rounded-full"></div>
          <ul className="flex justify-around h-full items-center font-bold text-white text-lg">
            <li className="h-full flex items-center px-4 z-50 hover:text-brand-yellow"><Link to="/toy.drive/">Home</Link></li>
            <li className="h-full flex items-center px-4 z-50 hover:text-brand-yellow"><Link to="/toy.drive/wishlist">Wishlist</Link></li>
            <li className="h-full flex items-center px-4 z-50 hover:text-brand-yellow"><Link to="/toy.drive/about">About Us</Link></li>
          </ul>
        </nav>

        <main className="w-full">
          <AnimatedRoutes />
        </main>

        <footer className="w-full">
          <section className="content-section">
            <p>
              Website designed and developed by Ian Skelskey. All rights reserved. © 2023
            </p>
          </section>
        </footer>
      </div>
      <div className="bg-gift-pile w-96 h-96 absolute bottom-0 right-0 -z-50" />
    </Router>
  );
}

export default App;

