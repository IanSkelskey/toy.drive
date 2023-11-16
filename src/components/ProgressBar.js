export default function ProgressBar({ progress, goal, emoji }) {

    const percent = Math.round((progress / goal) * 100);
    return (
        <div className="flex items-center space-x-5 w-full">
            <div>{emoji}</div>
            <div className="bg-brand-yellow w-full h-full relative">
                <div
                    className="bg-brand-teal w-full h-full absolute top-0 left-0"
                    style={{ width: `${percent}%` }}
                ></div>
                <div className="text-center text-brand-teal text-2xl font-bold">
                    {percent}%
                </div>
            </div>
        </div>
    );
}
