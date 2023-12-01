import db from './firebaseConfig';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

export default async function fetchDonationProgress() {
    const cashRef = collection(db, 'donations');
    const toyRef = collection(db, 'toys');
    const cashQuery = query(cashRef, orderBy('timestamp', 'desc'), limit(1));
    const toyQuery = query(toyRef, orderBy('timestamp', 'desc'), limit(1));
    const cashQuerySnapshot = await getDocs(cashQuery);
    const toyQuerySnapshot = await getDocs(toyQuery);

    if (cashQuerySnapshot.empty) {
        console.log("No documents found in 'donations' collection.");
        return null;
    }

    if (toyQuerySnapshot.empty) {
        console.log("No documents found in 'toys' collection.");
        return null;
    }

    const latestToy = toyQuerySnapshot.docs.map((doc) => doc.data())[0];
    const latestCash = cashQuerySnapshot.docs.map((doc) => doc.data())[0];

    console.log('Latest toy:', latestToy);
    console.log('Latest cash:', latestCash);

    return { latestToy, latestCash };
}
