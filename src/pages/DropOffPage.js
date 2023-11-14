import AnimatedPage from "../components/AnimatedPage";

export default function DropOffPage() {
    return (
        <AnimatedPage>
            <section className="content-section">
                <h2>Drop-off Locations</h2>
                <p>
                    You can drop off toys at any of the following locations:
                </p>
                <hr className="my-10" />

                <h3>Bristol Plaza Starbucks</h3>
                <p>
                    Drop-off bins for toys are located in the lobby of Bristol Plaza Starbucks.
                </p>
                <p>
                    <a className="link" target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/SxYQ9Nk1KQ2UhSAs7'>
                        641 Farmington Ave, Bristol, CT 06010
                    </a>
                </p>
                <iframe className='w-full aspect-square' title="Starbucks Bristol Plaza Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.360211121539!2d-72.9253369227394!3d41.6911589770961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ba5e2b597615%3A0x79cf8e22ba4b4700!2sStarbucks!5e0!3m2!1sen!2sus!4v1699831557034!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <hr className="my-10" />
                <h3>Bristol Starbucks Rt 6 & Camp</h3>
                <p>
                    Drop-off bins for toys are located in the lobby of Bristol Starbucks Rt 6 & Camp.
                </p>
                <p>
                    <a className="link" target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/4oH99njkedwJEGKYA'>
                        1450 Farmington Ave, Bristol, CT 06010
                    </a>
                </p>
                <iframe className="w-full aspect-square" title="Starbucks Rt 6 & Camp Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.118571264674!2d-72.89865402425863!3d41.696375955669325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b1d93ef485a9%3A0x48a71b6bb120f47c!2sStarbucks!5e0!3m2!1sen!2sus!4v1699926409168!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                <hr className="my-10" />
                <h3>CT State Tunxis</h3>
                <p>
                    Drop-off bins for toys are located in the Algebra Lab (300 Building) as well as in front of the Academic Success and Tutoring Center (600 Building) of CT State Tunxis.
                </p>
                <p>
                    <a className="link" href='https://maps.app.goo.gl/zXjVimtGreGxKbai8'>
                        271 Scott Swamp Rd, Farmington, CT 06032
                    </a>
                </p>
                <iframe className="w-full aspect-square" title="Tunxis Community College Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.720293041934!2d-72.8800596227391!3d41.70497357623402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b1e3669d846f%3A0x6c0398160b0a1fc0!2sTunxis%20Community%20College!5e0!3m2!1sen!2sus!4v1699831311693!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </AnimatedPage>
    )
}