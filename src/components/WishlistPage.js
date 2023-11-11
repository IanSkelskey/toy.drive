import { motion } from "framer-motion";
import { pageVariants } from "../utils/animation";

export default function WishlistPage() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
        >
            <section className="content-section">
                <h2>Wishlist</h2>
                <ul className="px-4 mb-2 list-inside list-disc">
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
                <hr className="my-4" />
                <p>
                    All items must be brand new, unwrapped, latex-free and compliant with our safety and infection control guidelines. We
                    are unable to accept handmade cards, knitted/crocheted infant items, used items or toys with weapons or of a violent
                    nature. If items do not fall within our guidelines or are unsafe/inappropriate for our patients, we reserve the right to
                    politely decline donations.
                </p>
                <hr className="my-4" />
                <p>
                    *Please note: We no longer accept hats or loose blankets. Sleep sacks are the best choice for swaddling babies and
                    maintaining warmth.
                </p>
            </section>
        </motion.div>
    )
}