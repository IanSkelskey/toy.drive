import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook } from "@fortawesome/free-brands-svg-icons";
import banner from "./assets/banner.svg";
import ccmcBanner from "./assets/ccmc-banner-logo.svg";
import sbuxLogo from "./assets/starbucks-logo.svg";
import tunxisLogo from "./assets/tunxis-logo.png";
import toyDriveLogo from "./assets/drive-logo.svg";
import ProgressBar from "./components/ProgressBar";
import ian from "./assets/ian.png";

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
        <section className="content-section">
          <h2>🎅 Welcome to the Season of Giving, 2023!</h2>
          <div className="flex space-x-5 items-center">
            <img src={ian} className="rounded-full w-32" alt='Photo of Ian Skelskey. The host of the toy drive.' />
            <p>
              Hello and welcome! I'm Ian Skelskey, a shift supervisor and barista trainer at Bristol Plaza Starbucks, an educational assistant at Tunxis Community College and a software engineer. I'm thrilled to introduce you to our special toy drive initiative.
            </p>
          </div>
          <h3>Our Journey</h3>
          <p>
            This journey began in 2019 as a heartwarming partnership between Starbucks and Connecticut Children's Medical Center. What started with a humble collection of around 50 toys has blossomed into something truly remarkable. In our most recent drive in 2021, we collected nearly 200 toys! Not only that, but we also began fundraising, setting up an official give page through the hospital and raising a few hundred dollars to further support the cause.
          </p>
          <h3>Expanding Our Horizons</h3>
          <p>
            This year, we faced a new challenge: a lack of corporate marketing support. But that didn't slow us down. Instead, it sparked creativity in our approach. I took the initiative to design this website to organize all relevant information and help expand our efforts. Our goal is to keep the spirit of giving alive, not just through this website but also by maintaining our Facebook group and launching a new Discord server this holiday season.
          </p>
          <h3>Join Us in Making a Difference</h3>
          <p>
            Your support means the world to us and, more importantly, to the children who benefit from our collective efforts. Whether it's donating a toy, contributing financially, or simply spreading the word, every bit of help counts.
          </p>
          <p>
            Thank you for visiting, and let's make this year's toy drive the most successful one yet!
          </p>
        </section>

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

        <section className="content-section">
          <a className="text-4xl text-brand-red hover:text-brand-blue flex" href='https://give.connecticutchildrens.org/team/539713' target="_blank" rel="noreferrer">
            💝 <div className="underline">Official Give Page</div>
          </a>
        </section>

        <section className="content-section">
          <h2>Wishlist</h2>
          <ul className="list-disc px-4 mb-2">
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

        <section className="content-section">
          <p>
            Website designed and developed by Ian Skelskey. All rights reserved. © 2023
          </p>
        </section>

      </main>
    </div>
  );
}

export default App;
