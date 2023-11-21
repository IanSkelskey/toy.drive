import AnimatedPage from '../components/AnimatedPage';
import sponsors from '../const/sponsors';

export default function DropOffPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Drop-off Locations</h2>
                <p>You can drop off toys at any of the following locations:</p>
                <hr className="my-10" />
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h3>{sponsor.name}</h3>
                        <p>
                            <ul>
                                {sponsor.dropOffLocations.map(
                                    (location, index) => (
                                        <li key={index}>{location}</li>
                                    )
                                )}
                            </ul>
                            <a
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                                href={sponsor.url}
                            >
                                {sponsor.address}
                            </a>
                        </p>
                        <div className="bg-candy-cane-pattern w-full p-4">
                            <iframe
                                className="w-full aspect-square sm:aspect-video"
                                title={sponsor.name}
                                src={sponsor.mapEmbedUrl}
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                        <hr className="my-10" />
                    </div>
                ))}
            </section>
        </AnimatedPage>
    );
}
