import Ribbon from "./Ribbon";

export default function TextRibbon({ className }) {
    return (
        <div className='w-3/4 relative'>
            <h1 className="absolute z-10 top-10 w-full text-brand-red italic text-8xl font-etna text-center">
                Holiday Toy
                <br />
                Drive
            </h1>
            <h1 className="absolute z-0 -left-2 top-12 w-full text-red-950 italic text-8xl font-etna text-center">
                Holiday Toy
                <br />
                Drive
            </h1>
            <Ribbon className="fill-current text-brand-yellow" />
        </div>
    )
}