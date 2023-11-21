import AnimatedPage from '../components/AnimatedPage';
import sponsors from '../const/sponsors';

export default function DropOffPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Drop-off Locations</h2>
                <p>
                    We are very proud to have four drop-off locations this year.
                    Thank you Tunxis and UFC Southington for joining the cause!
                    You can drop off toys at any of the following locations:
                </p>
                <hr />
                {sponsors.map((sponsor, index) =>
                    sponsor.dropOffLocations.map((location, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h3>{location.name}</h3>
                            <p>
                                <ul>
                                    {location.binLocations.map(
                                        (location, index) => (
                                            <li key={index}>{location}</li>
                                        )
                                    )}
                                </ul>
                                <a
                                    className="link"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={location.mapUrl}
                                >
                                    {location.address}
                                </a>
                            </p>
                            <div className="bg-candy-cane-pattern w-full p-2">
                                <iframe
                                    className="w-full aspect-square sm:aspect-video"
                                    title={location.name}
                                    src={location.mapEmbedUrl}
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                            <hr />
                        </div>
                    ))
                )}
            </section>
        </AnimatedPage>
    );
}
