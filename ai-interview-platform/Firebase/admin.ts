import { auth, initializeApp } from 'firebase-admin';
import { getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initialize } from 'next/dist/server/lib/render-server';
const initFirebaseAdmin = () => {
    const apps = getApps();

    if(!apps.length)
        initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privatekey:process.env.FIREBASE_PRIVATE_KEY ?.replace(/\\n/g,"\n")
        })
    })


return {
    auth: getAuth(),
    db: getFirestore()
    
}

}

export const{ Auth,db} = initFirebaseAdmin();
