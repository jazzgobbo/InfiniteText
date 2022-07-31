import { signInWithGoogle, signOut } from './utilities/firebase.js';

 //produces pop up for google authentication 
export const SignInButton = () => (
   <button className="btn btn-secondary btn-sm"
       onClick={() => signInWithGoogle()}>
     Sign In
   </button>
 );

export const SignOutButton = () => (
   <button className="btn btn-secondary btn-sm"
       onClick={() => signOut()}>
     Sign Out
   </button>
 );

