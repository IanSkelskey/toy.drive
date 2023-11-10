import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook } from "@fortawesome/free-brands-svg-icons";
import banner from "./assets/banner.svg";
import ccmcBanner from "./assets/ccmc-banner-logo.svg";
import sbuxLogo from "./assets/starbucks-logo.svg";
import tunxisLogo from "./assets/tunxis-logo.png";
import ProgressBar from "./components/ProgressBar";
import AboutSection from "./components/AboutSection";
import WishlistSection from "./components/WishlistSection";
import LandingPage from "./components/LandingSection";

function App() {
  const cashGoal = 2000;
  const toyGoal = 300;

  const cashProgress = 50;
  const toyProgress = 4;

  return (
    <div className="content">
      <header className="w-full max-w-lg flex flex-col items-center pb-2">
        <img className="w-1/2" src={ccmcBanner} alt="Connecticut Children's Medical Center Logo" />
        <img src={banner} alt="Banner" className="w-full mb-2" />
        <div className="w-full flex p-2 text-xl space-x-5 bg-white bg-opacity-60 rounded-lg mb-4">
          <ProgressBar progress={cashProgress} goal={cashGoal} title='Cash Goal' emoji='💰' />
          <ProgressBar progress={toyProgress} goal={toyGoal} title='Toy Goal' emoji='🎁' />
        </div>
      </header>

      <main className="w-full">
        <nav className="sticky top-0 w-full h-12 bg-brand-yellow">
          <ul className="flex justify-around h-full items-center">
            <li>
              Home
            </li>
            <li>
              Wishlist
            </li>
            <li>
              Drop-off Locations
            </li>
            <li>
              About Us
            </li>
          </ul>
        </nav>
        <LandingPage />
        <AboutSection />
        <WishlistSection />

        <section className="content-section">
          <a className="text-4xl text-brand-red hover:text-brand-blue flex" href='https://give.connecticutchildrens.org/team/539713' target="_blank" rel="noreferrer">
            💝 <div className="underline">Official Give Page</div>
          </a>
        </section>

        <section className="content-section">
          <h2>Connect with us</h2>
          <div className="flex justify-around">
            <a href='https://discord.gg/bv2gJbGngh' target='_blank' rel="noreferrer">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon className="text-brand-teal" icon={faDiscord} size="2x" />
                <p className="text-sm">Discord Server</p>
              </div>

            </a>
            <a href='https://www.facebook.com/groups/sbuxtoydrive/?mibextid=oMANbw' target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon className="text-brand-red" icon={faFacebook} size="2x" />
                <p className="text-sm">Facebook Group</p>
              </div>

            </a>
          </div>
        </section>

        <section className="content-section">
          <h2>Community Partners</h2>
          <div className="flex justify-around h-12">
            <img src={sbuxLogo} alt="Starbucks Logo" />
            <img src={tunxisLogo} alt="Tunxis Logo" />
          </div>
        </section>
      </main>

      <footer className="w-full">
        <section className="content-section">
          <p>
            Website designed and developed by Ian Skelskey. All rights reserved. © 2023
          </p>
        </section>
      </footer>
    </div>
  );
}

export default App;
