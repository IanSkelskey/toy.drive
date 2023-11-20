import AnimatedPage from '../components/AnimatedPage';
import wishlist from '../const/wishlist';

export default function WishlistPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Wishlist</h2>
                <ul className="px-4 mb-2 list-inside list-disc text-left text-xl">
                    {wishlist.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
                <hr className="my-4" />
                <p>
                    All items must be brand new, unwrapped, latex-free and
                    compliant with our safety and infection control guidelines.
                    We are unable to accept handmade cards, knitted/crocheted
                    infant items, used items or toys with weapons or of a
                    violent nature. If items do not fall within our guidelines
                    or are unsafe/inappropriate for our patients, we reserve the
                    right to politely decline donations.
                </p>
                <hr className="my-4" />
                <p>
                    *Please note: We no longer accept hats or loose blankets.
                    Sleep sacks are the best choice for swaddling babies and
                    maintaining warmth.
                </p>
            </section>
        </AnimatedPage>
    );
}
