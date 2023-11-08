import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook } from "@fortawesome/free-brands-svg-icons";
import banner from "./assets/banner.svg";
import ccmcLogo from "./assets/ccmc-logo.png";
import sbuxLogo from "./assets/starbucks-logo.png";
import tunxisLogo from "./assets/tunxis-logo.png";
import toyDriveLogo from "./assets/logo.png";

function App() {
  return (
    <div className="min-h-screen bg-snowflake-pattern flex flex-col items-center bg-repeat p-2 sm:p-4">
      <div className="max-w-5xl flex flex-col items-center">
        <header className="w-full max-w-4xl flex flex-col items-center pb-2">
          <img className="w-1/2" src={ccmcLogo} alt="Connecticut Children's Medical Center Logo" />
          <img src={banner} alt="Banner" className="w-full" />
        </header>

        <main className="w-full">
          <section className="font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg mb-4">
            <h2 className="text-4xl mb-4">Welcome to the Season of Giving!</h2>

            <p className="text-xl mb-2">
              <img className="w-24 rounded-md text-center" src={toyDriveLogo} alt="Toy Drive Logo" />
              Join the Bristol Plaza Starbucks Holiday Toy Drive
            </p>
            <p className="mb-2">
              Greetings, kind hearts and joyful givers! We're delighted to welcome you to our annual Holiday Toy Drive, a special initiative dedicated to bringing smiles and joy to the children at Connecticut Children's Medical Center. As the season of cheer unfolds, your generosity can make all the difference in the lives of those who need it most.
            </p>
            <p className="mb-2">
              In partnership with our compassionate community, we aim to collect a sleigh-full of toys, games, and educational items to ensure that every child experiences the magic of the holiday season. From the tiniest tots to the bravest teens, your contributions will light up faces with happiness and hope.
            </p>

          </section>

          <section className="font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg mb-4">
            <a className="text-4xl hover:text-brand-red" href='https://give.connecticutchildrens.org/team/539713' target="_blank" rel="noreferrer">
              Official Give Page
            </a>
          </section>

          <section className="font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg mb-4">
            <h2 className="text-4xl mb-4">Connect with us</h2>
            <div className="flex space-x-5">
              <a href='https://discord.gg/bv2gJbGngh' target='_blank' rel="noreferrer">
                <FontAwesomeIcon className="text-brand-teal" icon={faDiscord} size="3x" />
              </a>
              <a href='https://www.facebook.com/groups/sbuxtoydrive/?mibextid=oMANbw' target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="text-brand-red" icon={faFacebook} size="3x" />
              </a>
            </div>
          </section>

          <section className="font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg">
            <h2 className="text-4xl mb-4">Community Partners</h2>
            <div className="flex justify-around h-24">
              <img src={sbuxLogo} alt="Starbucks Logo" />
              <img src={tunxisLogo} alt="Tunxis Logo" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
