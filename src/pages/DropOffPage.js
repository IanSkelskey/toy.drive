import AnimatedPage from '../components/AnimatedPage';
import sponsors from '../const/sponsors';

export default function DropOffPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Drop-off Locations</h2>
                <p>You can drop off toys at any of the following locations:</p>
                <hr className="my-10" />
                <h3>{sponsors.starbucks[0].name}</h3>
                <p>
                    Drop-off bins for toys are located in the lobby of Bristol
                    Plaza Starbucks.
                </p>
                <p>
                    <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={sponsors.starbucks[0].mapUrl}
                    >
                        {sponsors.starbucks[0].address}
                    </a>
                </p>
                <div className="bg-candy-cane-pattern w-full p-4">
                    <iframe
                        className="w-full aspect-square sm:aspect-video"
                        title="Starbucks Bristol Plaza Map"
                        src={sponsors.starbucks[0].mapEmbedUrl}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <hr className="my-10" />
                <h3>{sponsors.starbucks[1].name}</h3>
                <p>
                    Drop-off bins for toys are located in the lobby of Bristol
                    Starbucks Rt 6 & Camp.
                </p>
                <p>
                    <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={sponsors.starbucks[1].mapUrl}
                    >
                        {sponsors.starbucks[1].address}
                    </a>
                </p>
                <div className="bg-candy-cane-pattern w-full p-4">
                    <iframe
                        className="w-full aspect-square sm:aspect-video"
                        target="_blank"
                        rel="noreferrer"
                        title="Starbucks Rt 6 & Camp Map"
                        src={sponsors.starbucks[1].mapEmbedUrl}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <hr className="my-10" />
                <h3>{sponsors.tunxis.name}</h3>
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
                        href={sponsors.tunxis.mapUrl}
                    >
                        {sponsors.tunxis.address}
                    </a>
                </p>
                <div className="bg-candy-cane-pattern w-full p-4">
                    <iframe
                        className="w-full aspect-square sm:aspect-video"
                        title="Tunxis Community College Map"
                        src={sponsors.tunxis.mapEmbedUrl}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <hr className="my-10" />
                <h3>{sponsors.ufcGymSouthington.name}</h3>
                <p>
                    Drop-off bins for toys are located in UFC Gym Southington.
                </p>
                <p>
                    <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={sponsors.ufcGymSouthington.mapUrl}
                    >
                        {sponsors.ufcGymSouthington.address}
                    </a>
                </p>
                <div className="bg-candy-cane-pattern w-full p-4">
                    <iframe
                        className="w-full aspect-square sm:aspect-video"
                        title="UFC Gym Southington Map"
                        src={sponsors.ufcGymSouthington.mapEmbedUrl}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </section>
        </AnimatedPage>
    );
}
