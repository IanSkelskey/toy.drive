import db from './firebaseConfig';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

export default async function fetchDonationProgress() {
    console.log("Fetching donation progress...");

    const lastFetchedTimestamp = localStorage.getItem('lastFetchedTimestamp');
    console.log("Last fetched timestamp from localStorage:", lastFetchedTimestamp);

    const donationsRef = collection(db, 'donations');
    const q = query(donationsRef, orderBy('timestamp', 'desc'), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        console.log("No documents found in 'donations' collection.");
        return null;
    }

    const latestDonation = querySnapshot.docs.map(doc => doc.data())[0];
    console.log("Latest donation data:", latestDonation);

    if (!lastFetchedTimestamp || new Date(latestDonation.timestamp) > new Date(lastFetchedTimestamp)) {
        console.log("Updating last fetched timestamp in localStorage.");
        localStorage.setItem('lastFetchedTimestamp', latestDonation.timestamp);
        return latestDonation;
    } else {
        console.log("No new data since last fetch.");
    }
};
