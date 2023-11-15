import AnimatedPage from '../components/AnimatedPage';
import {
    bristolPlazaStarbucksMapURL,
    bristolRt6CampMapURL,
    tunxisMapURL,
    bristolPlazaStarbucksMapEmbedURL,
    bristolRt6CampMapEmbedURL,
    tunxisMapEmbedURL,
} from '../utils/externalUrls';

export default function DropOffPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Drop-off Locations</h2>
                <p>You can drop off toys at any of the following locations:</p>
                <hr className="my-10" />

                <h3>Bristol Plaza Starbucks</h3>
                <p>
                    Drop-off bins for toys are located in the lobby of Bristol
                    Plaza Starbucks.
                </p>
                <p>
                    <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={bristolPlazaStarbucksMapURL}
                    >
                        641 Farmington Ave, Bristol, CT 06010
                    </a>
                </p>
                <div className="bg-candy-cane-pattern w-full p-4">
                    <iframe
                        className="w-full aspect-square sm:aspect-video"
                        title="Starbucks Bristol Plaza Map"
                        src={bristolPlazaStarbucksMapEmbedURL}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
                <hr className="my-10" />
                <h3>Bristol Starbucks Rt 6 & Camp</h3>
                <p>
                    Drop-off bins for toys are located in the lobby of Bristol
                    Starbucks Rt 6 & Camp.
                </p>
                <p>
                    <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={bristolRt6CampMapURL}
                    >
                        1450 Farmington Ave, Bristol, CT 06010
                    </a>
                </p>
                <div className="bg-candy-cane-pattern w-full p-4">
                    <iframe
                        className="w-full aspect-square sm:aspect-video"
                        target="_blank"
                        rel="noreferrer"
                        title="Starbucks Rt 6 & Camp Map"
                        src={bristolRt6CampMapEmbedURL}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>

                <hr className="my-10" />
                <h3>CT State Tunxis</h3>
                <p>
                    Drop-off bins for toys are located in the Algebra Lab (300
                    Building) as well as in front of the Academic Success and
                    Tutoring Center (600 Building) of CT State Tunxis.
                </p>
                <p>
                    <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={tunxisMapURL}
                    >
                        271 Scott Swamp Rd, Farmington, CT 06032
                    </a>
                </p>
                <div className="bg-candy-cane-pattern w-full p-4">
                    <iframe
                        className="w-full aspect-square sm:aspect-video"
                        title="Tunxis Community College Map"
                        src={tunxisMapEmbedURL}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </AnimatedPage>
    );
}
