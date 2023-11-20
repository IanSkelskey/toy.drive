import toyDriveLogo from '../assets/drive-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';
import sponsors from '../const/sponsors';
import socialUrls from '../const/socialUrls';

export default function LandingPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Join the Connecticut Community Holiday Toy Drive</h2>
                <p>Now - December 15th 2023</p>
                <div className="w-full flex flex-col items-center space-y-5 my-4">
                    <img
                        className="w-32 rounded-md"
                        src={toyDriveLogo}
                        alt="Toy Drive Logo"
                    />
                    <a
                        href={socialUrls.donate}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-brand-red hover:bg-brand-blue text-white text-xl font-bold py-2 px-4 rounded-md"
                    >
                        Donate Now
                    </a>
                </div>

                <p>
                    Greetings, kind hearts and joyful givers! We're delighted to
                    welcome you to our annual Holiday Toy Drive, a special
                    initiative dedicated to bringing smiles and joy to the
                    children at Connecticut Children's Medical Center. As the
                    season of cheer unfolds, your generosity can make all the
                    difference in the lives of those who need it most.
                </p>
                <p>
                    Use the link above to make monetary donations, or drop off
                    toys at any of our locations.
                </p>

                <Link to="/toy.drive/drop-off">
                    <h3 className="link">Drop-off Locations</h3>
                </Link>
                <p>You can drop off toys at any of the following locations:</p>
                <ul className="list-disc list-inside mb-2 text-xl">
                    <li>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href={sponsors.starbucks[0].mapUrl}
                        >
                            {sponsors.starbucks[0].name} -{' '}
                            {sponsors.starbucks[0].address}
                        </a>
                    </li>
                    <li>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href={sponsors.starbucks[1].mapUrl}
                        >
                            {sponsors.starbucks[1].name} -{' '}
                            {sponsors.starbucks[1].address}
                        </a>
                    </li>
                    <li>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href={sponsors.tunxis.mapUrl}
                        >
                            {sponsors.tunxis.name} - {sponsors.tunxis.address}
                        </a>
                    </li>
                    <li>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href={sponsors.ufcGymSouthington.mapUrl}
                        >
                            {sponsors.ufcGymSouthington.name} - {sponsors.ufcGymSouthington.address}
                        </a>
                    </li>

                </ul>

                <p>
                    In partnership with our compassionate community, we aim to
                    collect a sleigh-full of toys, games, and educational items
                    to ensure that every child experiences the magic of the
                    holiday season. From the tiniest tots to the bravest teens,
                    your contributions will light up faces with happiness and
                    hope.
                </p>

                <hr className="my-4" />

                <h3>Get Involved</h3>
                <div className="w-full text-center flex space-x-5 justify-center">
                    <a
                        href={socialUrls.discordServer}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon
                                className="text-brand-teal py-2"
                                icon={faDiscord}
                                size="2x"
                            />
                            <p className="text-sm">Join our Discord Server</p>
                        </div>
                    </a>

                    <a
                        href={socialUrls.facebookGroup}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon
                                className="text-brand-red py-2"
                                icon={faFacebook}
                                size="2x"
                            />
                            <p className="text-sm">Facebook Group</p>
                        </div>
                    </a>

                    <a
                        href={socialUrls.fundraising}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon
                                className="text-brand-blue py-2"
                                icon={faHandHoldingHeart}
                                size="2x"
                            />
                            <p className="text-sm">Join the Fundraising Team</p>
                        </div>
                    </a>
                </div>
            </section>
        </AnimatedPage>
    );
}
