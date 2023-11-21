import sbuxLogo from '../assets/sbux/starbucks-logo.svg';
import tunxisLogo from '../assets/tunxis/tunxis-logo.png';
import ufcLogo from '../assets/ufc/ufc-gym-logo-red.svg';

const sponsors = [
    {
        name: 'Bristol Plaza Starbucks',
        logo: sbuxLogo,
        link: "https://www.starbucks.com/store-locator/store/16474/bristol-plaza-641-farmington-ave-bristol-ct-060103953-us",
        address: '641 Farmington Ave, Bristol, CT 06010',
        mapUrl: 'https://maps.app.goo.gl/Z1WjSZ93vp5RSik4A',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.360211121539!2d-72.9253369227394!3d41.6911589770961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ba5e2b597615%3A0x79cf8e22ba4b4700!2sStarbucks!5e0!3m2!1sen!2sus!4v1699831557034!5m2!1sen!2sus',
        dropOffLocations: [
            "Lobby",
        ]
    },
    {
        name: 'Bristol Starbucks Rt6 & Camp',
        logo: sbuxLogo,
        link: "https://www.starbucks.com/store-locator/store/1042967/bristol-rte-6-camp-st-1450-farmington-ave-bristol-ct-060104701-us",
        address: '1450 Farmington Ave, Bristol, CT 06010',
        mapUrl: 'https://maps.app.goo.gl/4oH99njkedwJEGKYA',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.118571264674!2d-72.89865402425863!3d41.696375955669325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b1d93ef485a9%3A0x48a71b6bb120f47c!2sStarbucks!5e0!3m2!1sen!2sus!4v1699926409168!5m2!1sen!2sus',
        dropOffLocations: [
            "Lobby",
        ]
    },
    {
        name: 'CT State Tunxis',
        logo: tunxisLogo,
        link: "https://tunxis.edu/",
        address: '271 Scott Swamp Rd, Farmington, CT 06032',
        mapUrl: 'https://maps.app.goo.gl/dAbe3ad7DdrfV3rB8',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.720293041934!2d-72.8800596227391!3d41.70497357623402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b1e3669d846f%3A0x6c0398160b0a1fc0!2sTunxis%20Community%20College!5e0!3m2!1sen!2sus!4v1699831311693!5m2!1sen!2sus',
        dropOffLocations: [
            "Main Entrance - 100 Building",
            "Main Entrance - 200 Building",
            "Algebra Lab - 300 Building",
            "Academic Success and Tutoring Center - 600 Building"
        ]
    },
    {
        name: 'UFC Gym Southington',
        logo: ufcLogo,
        link: "https://www.ufcgym.com/locations/southington",
        address: '235 Queen St, Southington, CT 06489',
        mapUrl: 'https://maps.app.goo.gl/zMhxBkU5BTUhATkc6',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.5204129166514!2d-72.87402908717159!3d41.62288138123335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b794df07cbb5%3A0x104513f47150a847!2sUFC%20GYM%20Southington!5e0!3m2!1sen!2sus!4v1700448652273!5m2!1sen!2sus',
        dropOffLocations: [
            "Reception",
        ]
    },
]
export default sponsors;
