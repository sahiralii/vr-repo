import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// In AI Studio, the config is injected into firebase-applet-config.json after set_up_firebase(true)
let app;
let db: any;
let auth: any;

async function initFirebase() {
  try {
    // In AI Studio, we can fetch the config at runtime
    const response = await fetch('/firebase-applet-config.json');
    if (response.ok) {
      const config = await response.json();
      app = initializeApp(config);
      db = getFirestore(app, config.firestoreDatabaseId);
      auth = getAuth(app);
    }
  } catch (e) {
    console.warn("Firebase configuration not found or invalid. Booking will run in demo mode.");
  }
}

initFirebase();

export { db, auth };

export async function createBooking(bookingData: any) {
  if (!db) {
    console.log("Demo Mode: Booking data:", bookingData);
    return { id: 'demo-' + Date.now() };
  }

  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      ...bookingData,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id };
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
}
