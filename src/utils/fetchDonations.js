import db from './firebaseConfig';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

export default async function fetchDonationProgress() {
    const lastFetchedTimestamp = localStorage.getItem('lastFetchedTimestamp');
    const donationsRef = collection(db, 'donations');
    const q = query(donationsRef, orderBy('timestamp', 'desc'), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        console.log("No documents found in 'donations' collection.");
        return null;
    }

    const latestDonation = querySnapshot.docs.map(doc => doc.data())[0];

    if (!lastFetchedTimestamp || new Date(latestDonation.timestamp) > new Date(lastFetchedTimestamp)) {
        localStorage.setItem('lastFetchedTimestamp', latestDonation.timestamp);
        return latestDonation;
    } else {
        return latestDonation;
    }
};
