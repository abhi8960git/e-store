// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
  

// } from 'firebase/auth'

// // firebase
// import {
//   getFirestore,
//   doc,
//   getDoc,
//   setDoc,
// } from 'firebase/firestore'



// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDf2fwDujRrV632Uc0CmiuZ7LPdcfN9QgM",
//   authDomain: "e-commercial-b8d4f.firebaseapp.com",
//   projectId: "e-commercial-b8d4f",
//   storageBucket: "e-commercial-b8d4f.appspot.com",
//   messagingSenderId: "452683694030",
//   appId: "1:452683694030:web:43bd31a88e5ad76de9b59f"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig); 

// const provider=new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt:'select_account',
// });

// export const auth=getAuth();
// export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

// export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);

// export const db=getFirestore();

// export const createUserDocumentFromAuth=async (userAuth,additionalInformation={})=>{
//   if(!userAuth) return;

//   const userDocRef=doc(db,'users',userAuth.uid);
//   // console.log(userDocRef);
//   // console.log("hello1");
//   const userSnapshot=await getDoc(userDocRef);
//   // this is special doc object now

//   // console.log(userSnapshot);
//   // whether or not this document exists
//   // console.log(userSnapshot.exists());



//   if(!userSnapshot.exists()){
//     // setting inside our database userdoc
//     const {displayName,email}=userAuth;
//     const createdAt=new Date();


//     try{
//       await setDoc(userDocRef,{
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//     }catch(error){
//       console.log('error creating the user',error.message);
//     }
//   }


//   return userDocRef;
// };


// export const createAuthUserWithEmailAndPassword =async (email, password)=>{
//   if(!email || !password) return;

//   return await createUserWithEmailAndPassword(auth,email,password);
//   // give us back some auth object
// }

// export const signInAuthWithEmailAndPassword =async (email, password)=>{
//   if(!email || !password) return;

//   return await signInWithEmailAndPassword(auth,email,password);
//   // give us back some auth object
// }


// 

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDf2fwDujRrV632Uc0CmiuZ7LPdcfN9QgM",
  authDomain: "e-commercial-b8d4f.firebaseapp.com",
  projectId: "e-commercial-b8d4f",
  storageBucket: "e-commercial-b8d4f.appspot.com",
  messagingSenderId: "452683694030",
  appId: "1:452683694030:web:43bd31a88e5ad76de9b59f"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser=async ()=> await signOut(auth);


