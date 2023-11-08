import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook } from "@fortawesome/free-brands-svg-icons";

import TextRibbon from "./assets/TextRibbon";
function App() {
  return (
    <div className="min-h-screen bg-snowflake-pattern bg-repeat flex flex-col items-center p-4">
      <img className="w-1/3" src='/ccmc-logo.png' alt="Connecticut Children's Medical Center Logo" />
      <TextRibbon className="w-3/4" />
      <section className="w-1/2 font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg mb-4">
        <h2 className="text-4xl mb-4">Welcome to the Season of Giving!</h2>
        
        <p className="text-xl mb-2">
          <img className="w-24 rounded-md text-center" src="/logo512.png" alt="Toy Drive Logo"/>
          Join the Bristol Plaza Starbucks Holiday Toy Drive
        </p>
        <p className="mb-2">
          Greetings, kind hearts and joyful givers! We're delighted to welcome you to our annual Holiday Toy Drive, a special initiative dedicated to bringing smiles and joy to the children at Connecticut Children's Medical Center. As the season of cheer unfolds, your generosity can make all the difference in the lives of those who need it most.
        </p>
        <p className="mb-2">
          In partnership with our compassionate community, we aim to collect a sleigh-full of toys, games, and educational items to ensure that every child experiences the magic of the holiday season. From the tiniest tots to the bravest teens, your contributions will light up faces with happiness and hope.
        </p>
        
      </section>

      <section className="w-1/2 font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg mb-4">
        <a className="text-4xl hover:text-brand-red" href='https://give.connecticutchildrens.org/team/539713' target="_blank" rel="noreferrer">
          Official Give Page
        </a>
      </section>

      <section className="w-1/2 font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg mb-4">
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

      <section className="w-1/2 font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg">
        <h2 className="text-4xl mb-4">Community Partners</h2>
        <div className="flex justify-around h-24">
          <img src='/starbucks-logo.png' alt="Starbucks Logo" />
          <img src='/tunxis-logo.png' alt="Tunxis Logo" />
        </div>
      </section>

    </div>
  );
}

export default App;
