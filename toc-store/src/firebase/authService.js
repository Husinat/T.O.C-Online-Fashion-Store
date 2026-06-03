//  Firebase Auth Services

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

const requireAuth = () => {
  if (!auth) {
    throw new Error('Firebase Auth is not configured. Add valid VITE_FIREBASE_* variables first.');
  }
  return auth;
};

export const registerUser = async (email, password, displayName) => {
  const firebaseAuth = requireAuth();
  const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
  await updateProfile(userCredential.user, { displayName });
  return userCredential.user;
};

export const loginUser = async (email, password) => {
  const firebaseAuth = requireAuth();
  const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
  return userCredential.user;
};

export const logoutUser = async () => {
  await signOut(requireAuth());
};

export const onAuthChange = (callback) => {
  if (!auth) {
    callback(null);
    return () => {};
  }

  return onAuthStateChanged(auth, callback);
};
