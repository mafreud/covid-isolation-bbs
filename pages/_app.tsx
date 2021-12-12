import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import {
  AuthProvider,
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjXbVO_bymiShZIFucmHdyO2ZM_tOsfws",
  authDomain: "covid-isolation-bbs.firebaseapp.com",
  projectId: "covid-isolation-bbs",
  storageBucket: "covid-isolation-bbs.appspot.com",
  messagingSenderId: "744298031584",
  appId: "1:744298031584:web:9459616fa8a6234f306385",
  measurementId: "${config.measurementId}",
};

function FirebaseSDKProviders({ children }: any) {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
    </AuthProvider>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseSDKProviders>
        <Component {...pageProps} />
      </FirebaseSDKProviders>
    </FirebaseAppProvider>
  );
}

export default MyApp;
