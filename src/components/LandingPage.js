import toyDriveLogo from "../assets/drive-logo.svg";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/animation";

export default function LandingPage() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
        >
            <section className="content-section">
                <h2>
                    Join the Connecticut Community Holiday Toy Drive
                </h2>
                <p>
                    Greetings, kind hearts and joyful givers! We're delighted to welcome you to our annual Holiday Toy Drive, a special initiative dedicated to bringing smiles and joy to the children at Connecticut Children's Medical Center. As the season of cheer unfolds, your generosity can make all the difference in the lives of those who need it most.
                </p>
                <p>
                    Use the link below to make monetary donations, or drop off toys at any of our locations.
                </p>
                <div className="w-full flex flex-col items-center space-y-5 my-4">
                    <img className="w-32 rounded-md" src={toyDriveLogo} alt="Toy Drive Logo" />
                    <a
                        href="https://give.connecticutchildrens.org/give/t539713/#!/donation/checkout"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-brand-red hover:bg-brand-blue text-white text-xl font-bold py-2 px-4 rounded-md">
                        Donate Now
                    </a>
                </div>
                <h3>Drop-off Locations</h3>
                <p>
                    You can drop off toys at any of the following locations:
                </p>
                <ul className="list-disc list-inside mb-2 text-lg">
                    <li>
                        Bristol Plaza Starbucks - 641 Farmington Ave, Bristol, CT 06010
                    </li>
                    <li>
                        CT State Tunxis - 271 Scott Swamp Rd, Farmington, CT 06032
                    </li>
                </ul>

                <p>
                    In partnership with our compassionate community, we aim to collect a sleigh-full of toys, games, and educational items to ensure that every child experiences the magic of the holiday season. From the tiniest tots to the bravest teens, your contributions will light up faces with happiness and hope.
                </p>
            </section>
        </motion.div>
    )
}