import AnimatedPage from '../components/AnimatedPage';
import sponsors from '../const/sponsors';

export default function SponsorPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Our Community Sponsors</h2>
                <div className="flex flex-col items-center w-full">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-full"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-w-xs max-h-32"
                            />
                            <h3>{sponsor.name}</h3>
                            <p>{sponsor.description}</p>
                            <a
                                className="link"
                                href={sponsor.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit Website
                            </a>
                            <hr className='my-10 w-full' />
                        </div>
                    ))}
                </div>
            </section>
        </AnimatedPage>
    );
}
