import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "royalty-db.firebaseapp.com",
  databaseURL: "https://royalty-db.firebaseio.com",
  projectId: "royalty-db",
  storageBucket: "royalty-db.appspot.com",
  messagingSenderId: "1085365531614",
  appId: "1:1085365531614:web:e640ebd03549e57695234f",
  measurementId: "G-CQK8YEGECB"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
}

export const getUserCartRef = async userId => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

export const getUserWishListRef = async userId => {
  const wishListRef = firestore.collection('wishlists').where('userId', '==', userId);
  const snapShot = await wishListRef.get();

  if (snapShot.empty) {
    const wishListDocRef = firestore.collection('wishlists').doc();
    await wishListDocRef.set({ userId, wishlistItems: [] });
    return wishListDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

export const setOrderDocument = async (userId, order) => {
  if (!userId) return;

  const ordersRef = firestore.collection('orders').doc();
  try {
    await ordersRef.set({ userId, order: order });
    return getUserOrdersDocs(userId);
  } catch (err) {
    console.log('error creating order in database', err.message);
  }
  
}

export const getUserOrdersDocs = async userId => {
  const ordersRef = firestore.collection('orders').where('userId', '==', userId);
  const snapShot = await ordersRef.get();

  if (snapShot.empty) {
    return [];
  } else {
    return snapShot.docs;
  }
};

export const convertOrdersSnapshotToMap = (orders) => {
  const transformedOrders = orders.docs.map(doc => {
    const { order } = doc.data();

    return {
      order
    };
  });

  return transformedOrders;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const getCureentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
