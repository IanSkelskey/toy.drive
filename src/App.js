import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook } from "@fortawesome/free-brands-svg-icons";
import banner from "./assets/banner.svg";
import ccmcLogo from "./assets/ccmc-logo.png";
import sbuxLogo from "./assets/starbucks-logo.png";
import tunxisLogo from "./assets/tunxis-logo.png";
import toyDriveLogo from "./assets/logo-transparent.png";

function App() {
  return (
    <div className="min-h-screen bg-snowflake-pattern flex flex-col items-center bg-repeat bg-fixed p-2 sm:p-4">
      <div className="max-w-4xl flex flex-col items-center">
        <header className="w-full max-w-3xl flex flex-col items-center pb-2">
          <img className="w-1/2" src={ccmcLogo} alt="Connecticut Children's Medical Center Logo" />
          <img src={banner} alt="Banner" className="w-full" />
        </header>

        <main className="w-full">
          <section className="font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg mb-4">
            <h2 className="text-4xl mb-4">🎅 Welcome to the Season of Giving, 2023!</h2>

            <p className="text-xl mb-2">
              <div className="w-full flex flex-col items-center">
                <img className="w-48 rounded-md" src={toyDriveLogo} alt="Toy Drive Logo" />
              </div>

              Join the Connecticut Community Holiday Toy Drive
            </p>
            <p className="mb-2">
              Greetings, kind hearts and joyful givers! We're delighted to welcome you to our annual Holiday Toy Drive, a special initiative dedicated to bringing smiles and joy to the children at Connecticut Children's Medical Center. As the season of cheer unfolds, your generosity can make all the difference in the lives of those who need it most.
            </p>
            <p className="mb-2">
              In partnership with our compassionate community, we aim to collect a sleigh-full of toys, games, and educational items to ensure that every child experiences the magic of the holiday season. From the tiniest tots to the bravest teens, your contributions will light up faces with happiness and hope.
            </p>

          </section>

          <section className="font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg mb-4">
            <a className="text-4xl text-brand-red hover:text-brand-blue flex" href='https://give.connecticutchildrens.org/team/539713' target="_blank" rel="noreferrer">
              💝 <div className="underline">Official Give Page</div>
            </a>
          </section>

          <section className="font-mostra-nuova bg-white p-4 bg-opacity-60 rounded-lg mb-4">
            <h2 className="text-4xl mb-4">Wishlist</h2>
            <ul className="list-disc px-4">
              <li>
                Bubbles
              </li>
              <li>
                Fleece Blankets
              </li>
              <li>
                Stuffed Animals
              </li>
              <li>
                Card/Board Games (Uno, Monopoly Deal, Sushi Go, Connect 4, Candy Land,
                Jenga, Sorry, Trouble etc.)
              </li>
              <li>
                Arts & Crafts/STEM kits (small kits)
              </li>
              <li>
                Playdoh (multi-packs and kits)
              </li>
              <li>
                Barbies, Superhero Action Figures
              </li>
              <li>
                Infant and Toddler toys (Fisher Price, Sassy, Bright Starts, Nubby, Infantino, Baby
                Einstein)
              </li>
              <li>
                Animal/Character Figurines (dinosaurs, farm animals, etc.)
              </li>
              <li>
                LEGO sets (small sets)
              </li>
              <li>
                Coloring books & crayons/markers/colored pencils (including teen coloring
                books), Sticker By Numbers
              </li>
              <li>
                Matchbox Cars
              </li>
              <li>
                Boppy covers
              </li>
              <li>
                Sleep sacks
              </li>
              <li>
                Scent cloths
              </li>
              <li>
                Books
              </li>
              <li>
                Mirrors that attach to a crib
              </li>
              <li>
                Mobiles
              </li>
            </ul>
            <p>
              All items must be brand new, unwrapped, latex-free and compliant with our safety and infection control guidelines. We
              are unable to accept handmade cards, knitted/crocheted infant items, used items or toys with weapons or of a violent
              nature. If items do not fall within our guidelines or are unsafe/inappropriate for our patients, we reserve the right to
              politely decline donations.
            </p>
            <p>
              *Please note: We no longer accept hats or loose blankets. Sleep sacks are the best choice for swaddling babies and
              maintaining warmth.
            </p>
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
