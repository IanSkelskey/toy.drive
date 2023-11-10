import ian from "../assets/ian.png";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/animation";

export default function AboutPage() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
        >
            <section className="content-section">
                <h2>About Us</h2>
                <p>🎅 Welcome to the Season of Giving, 2023!</p>
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
        </motion.div>

    )
}