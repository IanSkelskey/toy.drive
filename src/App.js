import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook } from "@fortawesome/free-brands-svg-icons";
import banner from "./assets/banner.svg";
import ccmcBanner from "./assets/ccmc-banner-logo.svg";
import sbuxLogo from "./assets/starbucks-logo.svg";
import tunxisLogo from "./assets/tunxis-logo.png";
import toyDriveLogo from "./assets/drive-logo.svg";
import ProgressBar from "./components/ProgressBar";
import AboutSection from "./components/AboutSection";
import WishlistSection from "./components/WishlistSection";

function App() {
  const cashGoal = 2000;
  const toyGoal = 300;

  const cashProgress = 50;
  const toyProgress = 4;

  return (
    <div className="content">
      <header className="w-full max-w-2xl flex flex-col items-center pb-2">
        <img className="w-1/2" src={ccmcBanner} alt="Connecticut Children's Medical Center Logo" />
        <img src={banner} alt="Banner" className="w-full mb-2" />
        <div className="w-full flex p-2 text-xl space-x-5 bg-white bg-opacity-60 rounded-lg mb-4">
          <ProgressBar progress={cashProgress} goal={cashGoal} title='Cash Goal' emoji='💰' />
          <ProgressBar progress={toyProgress} goal={toyGoal} title='Toy Goal' emoji='🎁' />
        </div>
      </header>

      <main className="w-full">

        <AboutSection />

        <section className="content-section">
          <div className="w-full flex flex-col items-center space-y-5 my-4">
            <img className="w-48 rounded-md" src={toyDriveLogo} alt="Toy Drive Logo" />
            <a
              href="https://give.connecticutchildrens.org/give/t539713/#!/donation/checkout"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-red hover:bg-brand-blue text-white text-xl font-bold py-2 px-4 rounded-md">
              Donate Now
            </a>
          </div>
          <p>
            Join the Connecticut Community Holiday Toy Drive
          </p>
          <p>
            Greetings, kind hearts and joyful givers! We're delighted to welcome you to our annual Holiday Toy Drive, a special initiative dedicated to bringing smiles and joy to the children at Connecticut Children's Medical Center. As the season of cheer unfolds, your generosity can make all the difference in the lives of those who need it most.
          </p>
          <p>
            In partnership with our compassionate community, we aim to collect a sleigh-full of toys, games, and educational items to ensure that every child experiences the magic of the holiday season. From the tiniest tots to the bravest teens, your contributions will light up faces with happiness and hope.
          </p>
        </section>

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
