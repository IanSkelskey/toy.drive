import banner from '../assets/banner.svg';
import ccmcBanner from '../assets/ccmc-banner-logo.svg';
import ProgressBar from './ProgressBar';
import fetchDonationProgress from '../utils/fetchDonations';
import { useEffect, useState } from 'react';

export default function Header() {
    const [cashProgress, setCashProgress] = useState(0);
    const [cashGoal, setCashGoal] = useState(0);

    const [toyProgress, setToyProgress] = useState(0);
    const [toyGoal, setToyGoal] = useState(0);

    useEffect(() => {
        const fetchProgress = async () => {
            await fetchDonationProgress().then((progress) => {
                setCashProgress(progress.latestCash.progressAmount);
                setCashGoal(progress.latestCash.goalAmount);
                setToyProgress(progress.latestToy.count);
                setToyGoal(progress.latestToy.goal);
            });

        };
        fetchProgress();
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
                    progress={cashProgress}
                    goal={cashGoal}
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

function convertCurrencyStringToNumber(currencyString) {
    return parseInt(currencyString.replace(/[$,]/g, ''), 10);
}
