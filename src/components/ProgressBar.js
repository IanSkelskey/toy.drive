export default function ProgressBar({ progress, goal, title, emoji }) {

    const percent = Math.round((progress / goal) * 100);
    return (
        <div className="flex flex-col items-center space-y-2 w-full">
            <div className="text-center text-brand-purple text-xl font-bold">{title}</div>
            <div className="flex items-center space-x-5 w-full">
                <div>{emoji}</div>
                <div className="bg-brand-yellow w-full h-full relative">
                    <div className="bg-brand-teal w-full h-full absolute top-0 left-0" style={{ width: `${percent}%` }}></div>
                    <div className="text-center text-brand-teal text-2xl font-bold">{percent}%</div>
                </div>
            </div>
        </div>
    )
}