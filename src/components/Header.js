import banner from "../assets/banner.svg";
import ccmcBanner from "../assets/ccmc-banner-logo.svg";
import ProgressBar from "./ProgressBar";

export default function Header() {
    const cashGoal = 2000;
    const toyGoal = 300;

    const cashProgress = 100;
    const toyProgress = 4;

    return (
        <header className="w-full max-w-lg flex flex-col items-center pb-2">
            <img className="w-1/2" src={ccmcBanner} alt="Connecticut Children's Medical Center Logo" />
            <img src={banner} alt="Banner" className="w-full mb-2" />
            <div className="w-full flex p-2 text-xl space-x-5 bg-white bg-opacity-60 rounded-lg mb-4">
                <ProgressBar progress={cashProgress} goal={cashGoal} title='Cash Goal' emoji='💰' />
                <ProgressBar progress={toyProgress} goal={toyGoal} title='Toy Goal' emoji='🎁' />
            </div>
        </header>
    )
}