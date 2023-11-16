import banner from '../assets/banner.svg';
import ccmcBanner from '../assets/ccmc-banner-logo.svg';
import ProgressBar from './ProgressBar';
import fetchDonationProgress from '../utils/fetchDonations';
import { useEffect, useState } from 'react';

export default function Header() {
    const [donationProgress, setDonationProgress] = useState(0);
    const [donationGoal, setDonationGoal] = useState(0);

    const toyGoal = 300;
    const toyProgress = 8;

    useEffect(() => {
        const fetchDonationProgress = async () => {
            const donationProgress = await fetchDonationProgress();
            console.log(donationProgress);
        }
        fetchDonationProgress();

    }, []);

    return (
        <header className="w-full max-w-lg flex flex-col items-center pb-2">
            <img
                className="w-1/2"
                src={ccmcBanner}
                alt="Connecticut Children's Medical Center Logo"
            />
            <img src={banner} alt="Banner" className="w-full mb-2" />
            <div className="w-full flex p-2 text-xl space-x-5 bg-white bg-opacity-60 rounded-lg mb-4">
                <ProgressBar
                    progress={donationProgress}
                    goal={donationGoal}
                    title="Cash Goal"
                    emoji="💰"
                />
                <ProgressBar
                    progress={toyProgress}
                    goal={toyGoal}
                    title="Toy Goal"
                    emoji="🎁"
                />
            </div>
        </header>
    );
}
